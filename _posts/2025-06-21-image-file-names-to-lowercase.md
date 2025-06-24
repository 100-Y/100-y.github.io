---
layout: post
title: 批量将图片文件名改为小写
date: 2025-06-21
description: 使用 Bash 脚本批量将图片文件名统一转换为小写，解决 GitHub Pages 线上图片因大小写敏感导致无法显示的问题。
og_image: /assets/img/blog/image-file-names-to-lowercase.webp
thumbnail: /assets/img/blog/image-file-names-to-lowercase.webp
categories: Internet
tags: bash gh-pages
giscus_comments: true
---

## 批量将图片文件名改为小写（保留扩展名）

---

在使用 GitHub Pages 搭建博客的过程中，常会遇到这样的问题：本地图片能正常显示，线上却无法查看。根本原因在于：GitHub Pages 的服务器是大小写敏感的。例如，MyImage.JPG 与 myimage.JPG 在本地可能等价，但线上并不识别为同一文件。

以下脚本能批量把指定目录下所有图片的**文件名（不含扩展名）转换为小写**，扩展名保持不变：

```bash
#!/bin/bash

# 设置图片目录（修改成你自己的目录）
IMAGE_DIR=~/Desktop/media

cd "$IMAGE_DIR" || exit 1

# 查找所有图片文件（你可以增加其他类型）
find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | while read f; do
  dir=$(dirname "$f")
  filename=$(basename "$f")
  name="${filename%.*}"         # 文件名（不含扩展名）
  ext="${filename##*.}"         # 扩展名

  # 生成小写文件名
  lower_name=$(echo "$name" | tr '[:upper:]' '[:lower:]')
  new_file="$dir/$lower_name.$ext"

  if [ "$f" != "$new_file" ]; then
    mv "$f" "$new_file"
  fi
done
```

---

## 使用方法

---

将脚本保存为 `xxxx.sh`  
替换 IMAGE_DIR=... 为你图片所在目录路径  
赋予执行权限并运行：

```bash
chmod +x xxxx.sh
./xxxx.sh
```

这样可避免线上图片加载失败的问题，确保文件名和引用路径一致。
