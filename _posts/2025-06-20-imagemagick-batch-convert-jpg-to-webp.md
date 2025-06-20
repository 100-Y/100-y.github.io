---
layout: post
title: 使用 ImageMagick 批量转换 JPG 为 WebP 格式，提升网页性能
date: 2025-06-20
excerpt: 介绍如何使用 ImageMagick 在本地批量将 JPG 图片转换为 WebP 格式，有效减小图片体积、提升网页加载速度，并提供适用于 macOS、Linux 的完整脚本与操作指南。
description: 介绍如何使用 ImageMagick 在本地批量将 JPG 图片转换为 WebP 格式，有效减小图片体积、提升网页加载速度，并提供适用于 macOS、Linux 的完整脚本与操作指南。
og_image: /assets/img/blog/imagemagick-batch-convert-jpg-to-webp.webp
thumbnail: /assets/img/blog/imagemagick-batch-convert-jpg-to-webp.webp
categories: Internet
tags: homebrew imagemagick webp
related_posts: true
---

<img src="/assets/img/blog/imagemagick-batch-convert-jpg-to-webp.webp" style="width:100%;" alt="imagemagick-batch-convert-jpg-to-webp">

在现代网页优化中，图片格式的选择和压缩率直接影响页面加载速度和用户体验。WebP 作为一种现代图片格式，兼具优秀的压缩率和较好的兼容性，已被广泛应用于网站图片优化。本文介绍如何使用开源工具 ImageMagick 实现本地批量将 JPG 图片转换为 WebP 格式，简洁高效，适合开发者和设计师。

---

## 为什么选择 WebP？

WebP 是由 Google 推出的图片格式，支持有损和无损压缩，文件大小相比传统 JPEG 和 PNG 格式大幅减小，能有效提升网站加载速度，降低带宽使用。

- **有损压缩**：适合照片类图片，文件更小，质量可调
- **无损压缩**：适合图标、透明背景图片，保证图像质量

兼容主流浏览器（Chrome、Firefox、Edge、Safari 14+），是目前网页图片优化的首选格式。

---

## ImageMagick 简介

ImageMagick 是强大的开源图像处理工具，支持超过 200 种图片格式转换。通过命令行，开发者可以快速批量处理图片，执行格式转换、尺寸调整、水印添加等多种操作。

---

## 环境准备

- **macOS 用户**：推荐通过 Homebrew 安装

  ```bash
  brew install imagemagick
  ```

- **Linux 用户**：

  ```bash
  sudo apt update
  sudo apt install imagemagick
  ```

---

## 批量转换脚本示例

假设你的 JPG 图片都存放在 `~/Desktop/media` 文件夹，执行以下 Bash 脚本即可将所有 JPG 转换为 WebP，转换结果放在 `webp_output` 子目录：

```bash
#!/bin/bash

INPUT_DIR=~/Desktop/media
OUTPUT_DIR=~/Desktop/media/webp_output

mkdir -p "$OUTPUT_DIR"
cd "$INPUT_DIR" || exit

for img in *.jpg *.jpeg; do
  magick convert "$img" -quality 80 "$OUTPUT_DIR/${img%.jpg}.webp"
  echo "Converted $img to WebP."
done

echo "All images converted and saved in $OUTPUT_DIR"
```

- `-quality 80` 参数控制压缩质量，范围 0-100，80 是常用的高质量设置
- 输出目录分离，避免覆盖源文件

---

## 运行步骤

1. 将上述脚本保存为 `convert_webp.sh`，赋予执行权限：

   ```bash
   chmod +x convert_webp.sh
   ```

2. 执行脚本：

   ```bash
   ./convert_webp.sh
   ```

3. 等待完成后，检查 `webp_output` 文件夹，查看转换结果

- `WARNING: The convert command is deprecated in IMv7, use "magick" instead of "convert" or "magick convert"`，这是 ImageMagick 7 版本的新变化提醒，建议以后用 magick convert 或直接用 magick 命令代替 convert，但你脚本里用 magick convert 就是正确的。

---

## 总结

通过 ImageMagick 批量转换图片格式，开发者可以方便快捷地将 JPG 图片转换为更高效的 WebP 格式，从而提升网页加载性能和用户体验。结合自动化脚本，批量处理大批量图片变得轻松简单。
