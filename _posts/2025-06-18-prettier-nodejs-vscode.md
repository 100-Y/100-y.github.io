---
layout: post
title: macOS 本地从零开始配置 Prettier + VS Code
date: 2025-06-18
description: 本文详细介绍如何在 macOS 本地通过 Homebrew 安装 Node.js，并结合 Prettier 与 VS Code，实现对 Markdown、YAML、HTML、JS 等常见格式的自动与批量格式化。
og_image: /assets/img/blog/png/prettier-nodejs-vscode.png
thumbnail: /assets/img/blog/svg/prettier-nodejs-vscode.svg
categories: Internet
tags: vscode prettier
giscus_comments: true
---

<img src="/assets/img/blog/svg/prettier-nodejs-vscode.svg" alt="prettier-nodejs-vscode" style="width:100%">

---

本指南适用于希望**批量格式化 Markdown、YAML、HTML、JS、CSS 等文件**的用户，尤其适合使用 VS Code 的用户。

---

## 一、安装 Node.js（推荐使用 Homebrew）

---

Prettier 依赖 Node.js 环境，建议通过 Homebrew 安装，便于更新与管理。

```bash
brew install node
```

安装完成后，在终端运行验证命令：

```bash
node -v
npm -v
```

示例输出：

```
v22.16.0
10.9.2
```

---

### 常见问题

---

如遇 `zsh: command not found: node`，请确认路径是否加入环境变量：

```bash
export PATH="/opt/homebrew/bin:$PATH"
source ~/.zprofile
```

---

## 二、在项目中安装 Prettier

---

进入你的项目目录（如 `xxxx.github.io`）：

```bash
cd ~/xx/xxxx.github.io
```

安装 Prettier 到项目开发依赖中：

```bash
npm install --save-dev prettier
```

安装成功后，目录中会出现：

- `node_modules/`
- `package-lock.json`
- `package.json`（如原本不存在会自动生成）

---

## 三、安装 VS Code 插件：Prettier

---

1. 打开 VS Code
2. 前往扩展商店，搜索并安装：

```
Prettier - Code formatter
```

---

## 四、配置 VS Code 自动格式化

---

打开 `settings.json`（打开命令面板：`Cmd + Shift + P`，命令面板中搜索 `Preferences: Open Settings (JSON)`），添加以下内容：

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

自动保存。如你只希望对特定语言启用（如 Markdown）：

```json
{
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}
```

---

## 五、配置 Prettier 行为（可选）

---

### 1. 创建 `.prettierrc` 文件

---

在项目根目录创建 `.prettierrc` 文件，自定义格式规则。例如：

```json
{
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "proseWrap": "preserve"
}
```

---

### 2. 创建 `.prettierignore` 文件

---

可用于排除不希望格式化的路径，例如：

```
node_modules
_site
_assets
docs/vendor
*.min.js
```

---

## 六、批量格式化项目文件

---

在项目根目录运行以下命令格式化所有支持的文件：

```bash
npx prettier . --write
```

可选用法（推荐）：

```bash
npx prettier "**/*.{md,yml,yaml,html,json,css,js}" --write
```

仅检查格式（不会修改文件）：

```bash
npx prettier . --check
```
