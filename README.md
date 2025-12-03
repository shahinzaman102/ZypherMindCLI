# Quick Start

Get Zypher Agent from [https://zypher.corespeed.io/](https://zypher.corespeed.io/), an open-source AI-agent framework/SDK within the CoreSpeed platform for building production-ready autonomous agents. This guide will help you get a Zypher Agent running in under 5 minutes.

## Prerequisites

* **Deno 2.0+** – install from <https://docs.deno.com/runtime/getting_started/installation/>
* **API Keys**
  * Gemini API Key – <https://aistudio.google.com/>
  * Firecrawl API Key – <https://www.firecrawl.dev/>
    * Gemini serves as an example LLM server.
    * Firecrawl serves as an example MCP server for web crawling.
  * **Note:** To retrieve the model name for Gemini, click on the Key listing and copy the cURL quickstart.

## Step 1: Clone the Project

```bash
git clone <this-project-https-clone-url>
cd ZypherMindCLI
```

## Step 2: Configure Environment Variables

Create a `.env` file in your project root:

```env
GEMINI_API_KEY=your_gemini_api_key_here
FIRECRAWL_API_KEY=your_firecrawl_api_key_here
```

## Step 3: Install VSCode Extension

Install the Deno VSCode extension from <https://deno.land>. This provides a language server client for Deno.

## Step 4: Run Your Agent

Start your agent using:

```bash
deno run -A main.ts
```

* The `-A` flag grants all permissions (`--allow-net --allow-read --allow-env`, etc.) and automatically fetches and caches dependencies.

Once running, the terminal interface allows you to:

* Chat with your agent interactively
* Receive real-time streamed responses
* Ask follow-up questions within the same session

## Try Different Tasks

After your agent is running, you can experiment with:

* Write a short motivational message for a startup team using bullet points.
* Rewrite the motivational message in a humorous tone and limit it to 3 bullets.
* Use Firecrawl to crawl <https://openai.com/research> and extract titles of the most recent research updates.
* etc.

## About Feature Coverage

ZypherMindCLI focuses on the core capabilities best supported by the **free-tier Gemini API**: text generation and reasoning. These features match the project's goal of providing a lightweight, CLI-driven AI agent experience.

For a complete list of Gemini API features and their potential usage, see the official documentation: [Gemini API What's Next](https://ai.google.dev/gemini-api/docs/quickstart#what's-next).

### Gemini API Feature Coverage in ZypherMindCLI

**Already Supported:**
* **Text Generation** – Full support using `generateContent` + streaming.
* **Thinking / Reasoning** – Automatically leveraged by Gemini models.

**Available in Gemini, Not Implemented in This Project:**
* **Image Generation** – Not added because CLI cannot display images.
* **Image Understanding (Vision)** – Not added because CLI does not handle image inputs.
* **Function Calling** – Optional; can be added later for complex agent tool orchestration.
* **Long Context** – Free-tier context window is limited; not needed for CLI.
* **Embeddings** – Not added; used mainly for RAG or search systems, outside this project's scope.

These advanced features can be implemented if you:
* Upgrade your Gemini API plan, **or**
* Want the agent to support richer capabilities beyond the CLI environment.

For most CLI-based use cases, the current implementation is optimal—simple, fast, and aligned with the strengths of the free-tier Gemini models.
