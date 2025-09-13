# YMD Syntax Highlighting (YAML + Markdown Prompts)

**YMD** (`.ymd` / `.yamd`) is a custom format for organizing **prompts**:  
- **YAML** is used for metadata and structure.  
- **Markdown** is embedded in block scalars (`key: |`) to describe prompt content.  

This extension adds **syntax highlighting**, **snippets**, and a **custom icon** for YMD files in VS Code.

---

## ✨ Features
- **Hybrid highlighting**: YAML for keys/values, Markdown inside block scalars.  
- **Snippets**:
  - `prompt` → scaffold a complete prompt template (`id`, `kind`, `version`, `system`, `instructions`, `developer`, `user`).  
  - `blk` → insert a Markdown block scalar quickly.  
- **Custom icon theme**: A speech bubble with `>` and `==`, over a purple rounded square — representing a prompt with text.

---

## 🎯 Motivation
Prompts often mix **structured metadata** and **free-form text**. Traditional formats (pure YAML or pure Markdown) are limited:  
- YAML is structured but bad for long text.  
- Markdown is good for text but lacks metadata organization.  

**YMD bridges this gap**:  
- Use YAML for metadata like `id`, `kind`, `version`.  
- Use Markdown for sections like `system`, `instructions`, `developer`, `user`.  

This makes prompts **easier to read, maintain, and share**.

---

## 📝 Example

```ymd
id: commitly_commit_message
kind: commitly
version: 0.1.0
title: Generate Conventional Commit Message with Structured Body

system: |
  You are a senior software engineer writing Conventional Commit messages.

instructions: |
  - Be accurate and concise.
  - Respond only with the commit message.

developer: |
  1. Subject line: <type>(<scope>): <summary>
  2. Body: bullet points with details
  3. Optional: why these changes matter

user: |
  Diff:
  {{diff}}
```

---

## 🚀 Usage
1. Open a `.ymd` file in VS Code.  
2. Syntax highlighting activates automatically.  
3. Use snippets (`prompt`, `blk`) for faster authoring.  
4. Enable the custom icon via: **Preferences → File Icon Theme → YMD Icons**.

---

## 📦 License
MIT License.