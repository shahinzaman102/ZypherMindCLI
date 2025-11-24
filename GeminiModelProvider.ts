import { GoogleGenAI } from "@google/genai";
import {
    ModelProvider,
    StreamChatParams,
    ModelStream,
    ModelEvent,
    ProviderInfo,
    FinalMessage,
    ContentBlock,
} from "@corespeed/zypher";
import { Observable } from "rxjs";

export class GeminiModelProvider implements ModelProvider {
    ai: GoogleGenAI;

    info: ProviderInfo = {
        name: "gemini",
        version: "1.0.0",
        capabilities: ["thinking"],
    };

    constructor(apiKey: string) {
        this.ai = new GoogleGenAI({ apiKey });
    }

    streamChat(params: StreamChatParams): ModelStream {
        const { messages, model } = params;
        const modelName = model ?? "gemini-2.5-flash";

        // Convert Zypher messages to single text prompt
        const promptText = messages
            .map((m) =>
                m.content
                    .filter((b) => b.type === "text")
                    .map((b: any) => b.text)
                    .join(" ")
            )
            .join("\n");

        // Streaming observable
        const events$ = new Observable<ModelEvent>((subscriber) => {
            (async () => {
                try {
                    const stream = await this.ai.models.generateContentStream({
                        model: modelName,
                        contents: promptText,
                    });

                    // Stream chunks as plain text
                    for await (const chunk of stream) {
                        if (chunk.text) {
                            subscriber.next({
                                type: "text",
                                content: chunk.text,
                            });
                        }
                    }

                    subscriber.complete();
                } catch (err) {
                    subscriber.error(err);
                }
            })();

            return () => { };
        });

        return {
            events: events$,

            finalMessage: async (): Promise<FinalMessage> => {
                const response = await this.ai.models.generateContent({
                    model: modelName,
                    contents: promptText,
                });

                const text = response.text ?? "";

                const blocks: ContentBlock[] = [
                    { type: "text", text }
                ];

                return {
                    role: "assistant",
                    content: blocks,
                    stop_reason: "end_turn",
                    timestamp: new Date(),
                };
            },
        };
    }
}
