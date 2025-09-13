# YMD Syntax Highlighting

<p align="center">
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg"></a>
  <a href="http://daviguides.github.io"><img src="https://img.shields.io/badge/built%20with-%E2%9D%A4%EF%B8%8F%20by%20Davi%20Guides-orange"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=daviguides.ymd-syntax"><img src="https://img.shields.io/badge/language-VSCode%20Extension-blue"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=daviguides.ymd-syntax"><img src="https://img.shields.io/badge/highlight-YAML%20+%20Markdown-purple"></a>
</p>

**YMD** (`.ymd` / `.yamd`) is a custom format for organizing **prompts**:  
- **YAML** provides metadata and structure.  
- **Markdown** lives inside block scalars (`key: |`) for rich prompt text.  

This VS Code extension brings **syntax highlighting**, **snippets**, and a **custom icon** to make `.ymd` prompts easy to read and maintain.

## ✨ Features

- 📑 **Hybrid highlighting**: YAML keys/values + embedded Markdown in block scalars.  
- ⚡ **Snippets**:
  - `prompt` → scaffold a complete prompt template (`id`, `kind`, `version`, `system`, `instructions`, `developer`, `user`).  
  - `blk` → insert a Markdown block scalar quickly.  
- 💬 **Custom file icon**: A speech bubble with `>` and `==` inside, over a purple rounded square — representing a prompt with text.  

## 🎯 Motivation

Prompts often combine **structured metadata** with **free-form instructions**.  
But neither YAML nor Markdown alone is ideal:  

- YAML is structured but unwieldy for long text.  
- Markdown is expressive but lacks metadata organization.  

**YMD bridges this gap**:  
- Use YAML for IDs, kinds, versions, metadata.  
- Use Markdown for system/instructions/developer/user sections.  

➡️ This makes prompts **easier to read, share, and version-control**.

## 📝 Example

![Screenshot](./assets/screenshot.png)

## 🚀 Usage

1. Open a `.ymd` file in VS Code.  
2. Syntax highlighting activates automatically.  
3. Use snippets (`prompt`, `blk`) for faster authoring.  
4. Enable the custom icon via:  
   **Preferences → File Icon Theme → YMD Icons**.

## ⚖️ License

MIT License

## 👨‍💼 Author

Built with ❤️ by [Davi Guides](http://daviguides.github.io)

Write structured prompts with clarity.
