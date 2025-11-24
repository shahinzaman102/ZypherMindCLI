# Quick Start

Get Zypher Agent from [https://zypher.corespeed.io/](https://zypher.corespeed.io/), an open-source AI-agent framework/SDK within the CoreSpeed platform for building production-ready autonomous agents. This guide will help you get a Zypher Agent running in under 5 minutes.

## Prerequisites

* **Deno 2.0+** – install from [https://docs.deno.com/runtime/getting_started/installation/](https://docs.deno.com/runtime/getting_started/installation/)
* **API Keys**

  * Gemini API Key – [https://aistudio.google.com/](https://aistudio.google.com/)
  * Firecrawl API Key – [https://www.firecrawl.dev/](https://www.firecrawl.dev/)

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

Install the Deno VSCode extension from [deno.land](https://deno.land). This provides a language server client for Deno.

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

* What are the benefits of using AI agents?
* Write a hello world program in TypeScript
* List the pros and cons of different programming languages
* etc.
