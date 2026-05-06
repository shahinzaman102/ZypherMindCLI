# Quick Start

Get Zypher Agent from [https://zypher.corespeed.io/](https://zypher.corespeed.io/), an open-source AI-agent framework/SDK within the CoreSpeed platform for building production-ready autonomous agents.

This project uses the **Zypher Agent framework** to build a **CLI-based AI Assistant that is agent-ready by design**. While the current implementation focuses on fast, lightweight text-based interaction, the architecture is intentionally extensible, making it easy to evolve into a fully autonomous agent with advanced capabilities in the future.

This guide will help you get your CLI AI Assistant running in under 5 minutes.

## Prerequisites

* **Deno 2.0+** – install from <https://docs.deno.com/runtime/getting_started/installation/>
* **API Keys**
  * Gemini API Key – <https://aistudio.google.com/>
    * **Note:** To retrieve the model name for Gemini, click on the Key listing and copy the cURL quickstart.
  * Firecrawl API Key – <https://www.firecrawl.dev/>
  
  **Note:**
    * Gemini serves as the example LLM server.
    * Firecrawl serves as an example MCP server for web crawling.

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

## Step 4: Run Your Assistant

Start your CLI AI Assistant using:

```bash
deno run -A main.ts
```

* The `-A` flag grants all permissions (`--allow-net --allow-read --allow-env`, etc.) and automatically fetches and caches dependencies.

Once running, the terminal interface allows you to:

* Chat with your agent interactively
* Receive real-time streamed responses
* Ask follow-up questions within the same session

## Try Different Tasks

After your assistant is running, you can experiment with:

* Write a short motivational message for a startup team using bullet points.
* Rewrite the motivational message in a humorous tone and limit it to 3 bullets.
* Use Firecrawl to crawl <https://openai.com/research> and extract titles of the most recent research updates.
* etc.

## About Feature Coverage

ZypherMindCLI is currently a **CLI AI Assistant,** not a fully autonomous agent yet.

However, it is built using the **Zypher Agent framework,** making it:

* **Agent-ready**
* **Modular and extensible**
* **Designed for future upgrades into a full AI agent system**

The current implementation focuses on the **core strengths of the free-tier Gemini API:**

* Fast text generation
* Built-in reasoning capabilities
* Lightweight CLI interaction

**Note:** For a complete list of Gemini API features and their potential usage, see the official documentation: [Gemini API What's Next](https://ai.google.dev/gemini-api/docs/quickstart#what's-next).

### Gemini API Feature Coverage in ZypherMindCLI

**Already Supported:**
* **Text Generation** – Full support using `generateContent` + streaming.
* **Thinking / Reasoning** – Automatically leveraged by Gemini models.

**Available in Gemini, Not Implemented in This Project:**

* Image Generation
* Image Understanding (Vision)
* Function Calling
* Long Context
* Embeddings

These features are intentionally not included to keep the CLI experience simple and efficient.

## Future Scope (Planned but Not Implemented)

The project is designed to evolve into a full autonomous agent system. Planned features include:

### 1. Function Calling & Task Automation (Core Agent Capability)

* Execute system commands
* Create and edit files
* Call external APIs

### 2. Tool Integration

* CLI tools
* Web search
* External services

### 3. Memory & Embeddings

* Store past interactions
* Enable long-term memory and recall

### 4. Multimodal Inputs

* Accept PDFs, images, and other file types

### 5. Image Capabilities

* Image generation
* Visual understanding (vision models)


## Design Philosophy

ZypherMindCLI follows a progressive enhancement approach:

* Start simple → CLI-based assistant
* Stay fast → optimized for free-tier APIs
* Scale later → evolve into a full agent system

This makes it ideal for:

* Developers exploring AI agents
* Rapid prototyping
* Learning agent architecture
* Building production-ready systems incrementally

For most CLI-based use cases, the current implementation is simple, fast, and well-aligned with the strengths of the free-tier Gemini models.
