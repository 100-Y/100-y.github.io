---
layout: post
title: HTML 标签 + Markdown 语法：在 VS Code 中结合使用的实战指南
date: 2025-06-22
description: 通过 VS Code 快捷键与 Emmet 包裹功能，实现 Markdown 文本加粗、高亮、下划线等扩展格式，全面掌握 Markdown 语法 × HTML 标签 的实战技巧。
og_image: /assets/img/blog/png/html-tags-and-markdown-syntax.png
thumbnail: /assets/img/blog/svg/html-tags-and-markdown-syntax.svg
categories: Internet
tags: markdown html
giscus_comments: true
---

<img src="/assets/img/blog/svg/html-tags-and-markdown-syntax.svg" alt="html-tags-and-markdown-syntax" style="width:100%">

---

Markdown 是写作界的轻量标记语言明星，语法简洁、格式清晰。但它在某些格式表达（<u>如下划线、高亮</u>）方面存在局限。幸运的是，**<mark>Markdown 完全支持内嵌 HTML 标签</mark>**，这使我们能结合 `<mark>`、`<u>` 等标签弥补 Markdown 的不足。本文将结合 <u>VS Code 编辑器、Emmet 快捷键</u>、自动补全语法，教你高效写作出格式丰富、结构清晰的 Markdown 文档。

---

## 一、HTML 标签 vs Markdown 语法对照表

---

| 样式   | HTML                | Markdown    | 效果              |
| ------ | ------------------- | ----------- | ----------------- |
| 斜体   | `<em>text</em>`     | `*text*`    | _text_            |
| 删除线 | `<del>text</del>`   | `~~text~~`  | ~~text~~          |
| 高亮   | `<mark>text</mark>` | X（不支持） | <mark>text</mark> |
| 下划线 | `<u>text</u>`       | X（不支持） | <u>text</u>       |

---

所有 HTML 标签在 Markdown 中可直接嵌入使用，只要 Markdown 渲染器支持（如 GitHub、Jekyll、Obsidian）。

---

## 二、在 VS Code 中高效使用 HTML + Markdown

---

### 1. 自动补全 Markdown 语法

---

VS Code 对 Markdown 提供原生语法补全：

- 输入 `**` → 自动生成 `**|**`
- 输入 `*` → 自动生成 `*|*`
- 输入 `~~` → 自动生成 `~~|~~`

常用于加粗、斜体、删除线等

---

### 2. Emmet 快捷键包裹 HTML 标签

---

Markdown 不支持 `<mark>`、`<u>` 等格式？用 Emmet 来救场！

**<mark>操作步骤</mark>**

1. 选中 Markdown 文本
2. 使用命令面板（Shift+Cmd+P / Ctrl+Shift+P）或快捷键
3. 搜索并执行：`Emmet: Wrap with Abbreviation`
4. 输入如 `mark`、`u`、`del` 等标签 → 自动包裹

**<mark>示例</mark>**

- 原始文本：`需要高亮的部分`
- 选中后 → 执行 → 输入 `mark` → 变成：<mark>需要高亮的部分</mark>

---

### 3. 绑定快捷键（推荐：Shift + Space）

---

让 Emmet 包裹操作更快捷！

1. 打开快捷键设置（Cmd+S）
2. 搜索 `emmet.wrapWithAbbreviation`
3. 设置快捷键为 `Shift + Space`

设置后只需：

- 选中文字
- 按 `Shift + Space`
- 输入 `u` / `mark` / `del` 等，即可快速包裹

---

## 三、推荐 HTML + Markdown 组合写法示例

---

```md
**<mark>重点术语</mark>**  
_<u>强调句子</u>_
```

**<mark>重点术语</mark>**  
_<u>强调句子</u>_
