---
layout: post
title: Markdown 批量更新 Front Matter 日期并重命名文件的实用脚本教程
date: 2025-06-19
description: 利用 Python 与 Shell 脚本，从正文提取日期并自动写入或更新 YAML Front Matter 中的 date 字段，并批量按日期重命名文件名，适用于静态博客内容管理。
og_image: /assets/img/blog/markdown-frontmatter-auto-date.png
thumbnail: /assets/img/blog/markdown-frontmatter-auto-date.svg
categories: Internet
tags: markdown frontmatter python bash
giscus_comments: true
---

<img src="/assets/img/blog/markdown-frontmatter-auto-date.svg" alt="markdown-frontmatter-auto-date" style="width:100%">

---

在构建基于 Jekyll 或 Hugo 的博客时，标准化的 Front Matter 格式（尤其是 `date:` 字段）至关重要。本文介绍一个两步自动化方案：使用 Python 提取正文日期并插入到 YAML Front Matter 中，然后使用 Shell 脚本按 `date:` 重命名所有 Markdown 文件。

---

## 一、目标

---

- 自动从 Markdown 正文中提取 `YYYY/MM/DD`，`YYYY-MM-DD`格式的日期
- 将其转为标准格式 `YYYY-MM-DD`
- 添加或更新 `date:` 字段到 Front Matter 中
- 根据 `date:` 字段重命名文件为 `YYYY-MM-DD-filename.md`

---

## 二、使用 Python 脚本自动更新 `date:` 字段

---

### 1. 脚本说明

---

- 搜索正文中的第一个日期（格式如 `2024/5/9`，`2024-5-9`）
- 格式化为 `2024-05-09`
- 写入（或更新）YAML Front Matter 中的 `date:` 字段

---

### 2. 脚本代码（保存为 `update_date.py`）

---

```python
import re
import sys

filename = sys.argv[1]

with open(filename, 'r', encoding='utf-8') as f:
    content = f.read()

# 找正文第一次出现 YYYY/MM/DD 格式的日期，没有跳过
date_match = re.search(r'(\d{4})/(\d{1,2})/(\d{1,2})', content)
if not date_match:
    print(f"No date found in {filename}, skipped")
    sys.exit(0)

yyyy, mm, dd = date_match.groups()
date_str = f"{yyyy}-{int(mm):02d}-{int(dd):02d}"

# 判断是否有 Front Matter，分割
if content.startswith('---'):
    parts = content.split('---', 2)
    fm = parts[1]
    body = parts[2]

    # 替换或新增 date: 字段
    if re.search(r'^date:\s*.*$', fm, re.MULTILINE):
        fm_new = re.sub(r'^date:\s*.*$', f"date: {date_str}", fm, flags=re.MULTILINE)
    else:
        fm_new = fm.strip() + f"\ndate: {date_str}\n"

    new_content = f"---{fm_new}---{body}"

else:
    # 没有 Front Matter，新增一个
    new_content = f"---\ndate: {date_str}\n---\n{content}"

with open(filename, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Updated {filename} with date: {date_str}")
```

---

## 三、Shell 脚本按 `date:` 字段批量重命名文件

---

### 1. 脚本代码（可保存为 `rename_by_date.sh`）

---

```bash
#!/bin/bash

for file in *.md; do
  date_prefix=$(grep -m1 '^date:' "$file" | sed -E 's/date:[[:space:]]*([0-9]{4}-[0-9]{2}-[0-9]{2}).*/\1/')
  if [[ -n "$date_prefix" ]]; then
    new_name="${date_prefix}-$file"
    mv "$file" "$new_name"
    echo "Renamed $file → $new_name"
  fi
done
```

---

### 2. 整段逻辑说明

---

| 代码片段                                                         | 作用说明                                                                              |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `for file in *.md; do ... done`                                  | 遍历当前目录下所有 Markdown 文件（`.md` 结尾）                                        |
| `date_prefix=$(grep -m1 '^date:' "$file" \| sed -E '...')`       | 从文件中提取 `date: YYYY-MM-DD` 的值（例如 `2024-06-20`），并赋值给变量 `date_prefix` |
| `grep -m1 '^date:'`                                              | 查找开头为 `date:` 的第一行（避免多次匹配）                                           |
| `sed -E 's/date:[[:space:]]*([0-9]{4}-[0-9]{2}-[0-9]{2}).*/\1/'` | 使用正则从 `date:` 这一行中提取 `YYYY-MM-DD` 日期                                     |
| `[[ -n "$date_prefix" ]]`                                        | 判断是否成功提取日期（非空）                                                          |
| `new_name="${date_prefix}-$file"`                                | 构造新文件名：在原文件名前加上日期前缀，如 `2025-06-20-xxx.md`                        |
| `mv "$file" "$new_name"`                                         | 使用 `mv` 命令将原文件重命名                                                          |
| `echo "Renamed $file → $new_name"`                               | 输出重命名日志，提示用户本次处理的文件名变更                                          |

---

### 3. 效果示例

---

| 原始文件名   | 文件内容中的日期字段 | 执行后文件名            |
| ------------ | -------------------- | ----------------------- |
| `article.md` | `date: 2024/06/20`   | `2024-06-20-article.md` |

---

## 四、使用方法（终端中执行）

---

```bash
cd ~/Desktop/drafts  # 切换到你的 Markdown 文件夹
# 逐个文件调用 Python 脚本
for file in *.md; do python3 ../update_date.py "$file"; done
# 然后执行重命名脚本
bash rename_by_date.sh
```
