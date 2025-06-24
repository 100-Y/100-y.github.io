---
layout: post
title: 用 Python 脚本自动同步 Markdown 文章 Front Matter 的图片链接
date: 2025-06-20
description: 通过 Python 脚本批量更新 博客 Front Matter 中的图片字段，实现文章与图片文件名自动匹配，提升维护效率。
og_image: /assets/img/blog/python-update-frontmatter-link.webp
thumbnail: /assets/img/blog/python-update-frontmatter-link.webp
categories: Internet
tags: python frontmatter
giscus_comments: true
---

<img src="/assets/img/blog/python-update-frontmatter-link.webp" style="width:100%;" alt="python-update-frontmatter-link">

## 一、背景

---

在修改 Markdown 文章时，通常需要为每篇文章设置 `og_image`（社交分享图）和 `thumbnail`（缩略图）。手动维护这两个字段往往费时且易错，尤其当图片文件名与文章文件名严格对应时，自动化脚本就能派上用场。通过简单的 Python 脚本，批量更新博客文章 Front Matter 中的 `og_image` 和 `thumbnail` 字段，使其和本地图片文件名保持一致，极大提升内容维护效率。

---

## 二、需求分析

---

- 博客文章位于 `_posts` 文件夹，文件名格式形如：
  `2025-06-20-my-post.md`
- 对应图片存放在 `assets/img/blog/`，图片文件名形如：
  `my-post.webp`
- 希望自动将每篇文章 Front Matter 中的 `og_image` 和 `thumbnail` 指向对应图片的路径：
  `/assets/img/blog/my-post.webp`
- 如果字段不存在，自动插入 `og_image` 在前、`thumbnail` 在后
- 不修改正文内容，仅处理 Front Matter
- 保持原有的图片路径前缀，替换文件名部分

---

## 三、解决方案

---

利用 Python 脚本遍历所有文章，匹配对应图片文件，更新 Front Matter 中相关字段。核心步骤：

1. **文件匹配规则**
   去除文章文件名前的日期前缀（如 `2025-06-20-`），得到 slug
2. **路径构造**
   拼接图片目录路径，检查图片文件是否存在
3. **Front Matter 读取与修改**
   定位 YAML 头部区域，查找 `og_image` 和 `thumbnail` 字段
4. **字段更新或插入**
   替换或新增字段，保证字段顺序和内容正确
5. **写回文件**

---

## 四、最终脚本展示 `update_thumbnail.py`

---

```python
import os
import re

# === 设置目录 ===
posts_dir = './_posts'
img_dir = './assets/img/blog'

# 获取 Markdown 文件列表（按字母排序）
post_files = sorted([f for f in os.listdir(posts_dir) if f.endswith('.md')])


for post_file in post_files:
    post_name = os.path.splitext(post_file)[0]

    # 🟡 去除日期前缀，只保留 slug 作为图片名匹配
    slug = re.sub(r'^\d{4}-\d{2}-\d{2}-', '', post_name)
    expected_img = slug + ".webp"
    img_path = os.path.join(img_dir, expected_img)

    # 如果图片不存在，跳过
    if not os.path.exists(img_path):
        print(f"⚠️ 缺少图片：{expected_img}，跳过 {post_file}")
        continue

    img_name = expected_img
    img_web_path = f"/assets/img/blog/{img_name}"

    # === 读取文章内容 ===
    post_path = os.path.join(posts_dir, post_file)
    with open(post_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # === 定位 Front Matter（YAML）范围 ===
    in_front_matter = False
    front_matter_end_idx = 0
    for idx, line in enumerate(lines):
        if line.strip() == '---':
            if not in_front_matter:
                in_front_matter = True
            else:
                front_matter_end_idx = idx
                break

    fm_lines = lines[1:front_matter_end_idx]
    new_fm_lines = []
    og_image_found = False
    thumbnail_found = False

    for line in fm_lines:
        m = re.match(r'^(thumbnail:|og_image:)\s*(.+)$', line)
        if m:
            field_name = m.group(1)
            old_path = m.group(2).strip()
            prefix_match = re.match(r'(.*/)', old_path)
            prefix = prefix_match.group(1) if prefix_match else "/assets/img/blog/"
            new_path = prefix + img_name
            new_fm_lines.append(f"{field_name} {new_path}\n")
            if field_name == "og_image:":
                og_image_found = True
            elif field_name == "thumbnail:":
                thumbnail_found = True
        else:
            new_fm_lines.append(line)

    # === 插入字段（如果不存在） ===
    if not og_image_found:
        new_fm_lines.append(f"og_image: {img_web_path}\n")
    if not thumbnail_found:
        new_fm_lines.append(f"thumbnail: {img_web_path}\n")

    # === 写回文件：更新后的 Front Matter + 原正文 ===
    new_lines = ['---\n'] + new_fm_lines + ['---\n'] + lines[front_matter_end_idx + 1:]
    with open(post_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

    print(f"✅ 已更新 Front Matter：{post_file} → 图片 {img_name}")
```

---

## 五、使用说明

---

- 将脚本保存为 `update_thumbnail.py` 放在文件夹根目录（比如`xx`）

- 确保目录结构如下：

  ```
  xx/
  ├── update_thumbnail.py
  ├── _posts/
  │   ├── 2025-06-20-my-post.md
  │   └── ...
  └── assets/
      └── img/
          └── blog/
              ├── my-post.webp
              └── ...
  ```

- 运行脚本：

  ```bash
  cd ~/Desktop/xx
  python3 update_thumbnail.py
  ```

---

## 六、处理示例

---

假设原始 Front Matter 是：

```
---
layout: post
title: 示例
date: 2025-06-20
---
```

运行后则自动变为：

```
---
layout: post
title: 示例
date: 2025-06-20
og_image: /assets/img/blog/my-post.webp
thumbnail: /assets/img/blog/my-post.webp
---
```
