import "std/dotenv/load";

// === Fix HOME for Windows BEFORE Zypher imports ===
if (!Deno.env.get("HOME")) {
    const userProfile = Deno.env.get("USERPROFILE");
    if (!userProfile) throw new Error("Could not determine home directory");
    Deno.env.set("HOME", userProfile);
}

import { createZypherContext, ZypherAgent, runAgentInTerminal } from "@corespeed/zypher";
import { GeminiModelProvider } from "./GeminiModelProvider.ts";

// Load env
function env(name: string) {
    const value = Deno.env.get(name);
    if (!value) throw new Error(`Missing env: ${name}`);
    return value;
}

console.log("\n🚀 Starting Zypher Agent with Gemini + Firecrawl...\n");

// === Create Zypher Context ===
const context = await createZypherContext(Deno.cwd());

// === Create Gemini Provider ===
const provider = new GeminiModelProvider(env("GEMINI_API_KEY"));

// === Create Agent ===
const agent = new ZypherAgent(context, provider);

// === Register Firecrawl MCP ===
await agent.mcp.registerServer({
    id: "firecrawl",
    type: "command",
    command: {
        command: "firecrawl-mcp",
        args: [],
        env: { FIRECRAWL_API_KEY: env("FIRECRAWL_API_KEY") },
    },
});

console.log("✅ Gemini provider ready");
console.log("✅ Firecrawl MCP connected");
console.log("⚡ Agent ready\n");

// === Launch CLI interface ===
await runAgentInTerminal(agent, "gemini-2.5-flash");
