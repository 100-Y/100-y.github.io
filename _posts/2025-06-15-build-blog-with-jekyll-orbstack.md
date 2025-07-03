---
layout: post
title: 全流程指南：用 Jekyll + al-folio + GitHub + Orbstack 打造本地博客系统（macOS 专用）
date: 2025-06-15
description: 教你如何用 Jekyll + al-folio 打造结构优雅、可自动部署、支持本地预览的博客系统，适用于 macOS 用户，结合 Orbstack、GitHub 与 VS Code 全流程优化。
og_image: /assets/img/blog/build-blog-with-jekyll-orbstack.png
thumbnail: /assets/img/blog/build-blog-with-jekyll-orbstack.svg
categories: Internet
tags: jekyll orbstack github
giscus_comments: true
---

<img src="/assets/img/blog/build-blog-with-jekyll-orbstack.svg" alt="build-blog-with-jekyll-orbstack" style="width:100%">

想搭建一个高颜值、可持续、可本地预览的博客系统？这篇教程将一步一步带你构建完整工作流，结合：

- `Jekyll + al-folio`：内容与学术写作首选静态博客方案
- `GitHub Pages`：一键托管自动部署
- `Orbstack`：轻量级本地容器平台，适合 macOS
- `VS Code`：全功能编辑器，支持 Markdown 与 YAML 插件

---

## 一、准备工作

---

**系统与网络要求：**

- macOS（Intel 或 Apple 芯片均可）
- 可访问网络
- 熟悉终端操作与基本 Git 流程

---

## 二、工具清单

---

| 工具           | 用途                        |
| -------------- | --------------------------- |
| Terminal       | 命令输入                    |
| GitHub Desktop | 可视化 Git 工具             |
| Orbstack       | 轻量容器平台（替代 Docker） |
| VS Code        | 编写 Markdown / 配置文件    |

---

## 三、使用 al-folio 模板创建 GitHub 博客仓库

---

### 1. 创建仓库

---

1. 打开模板项目：`al-folio`
2. 点击 `Use this template` → `Create a new repository`
3. 命名为 `yourname.github.io`（替换 yourname）

---

### 2. 配置 GitHub Actions 权限

---

仓库 → `Settings` → `Actions` → `General` →
勾选 `Read and write permissions`（用于自动部署）

---

### 3. 修改 `_config.yml`

---

```yaml
url: "https://yourname.github.io"
baseurl: ""
```

---

### 4. 设置 GitHub Pages 来源

---

仓库 → `Settings` → `Pages`：

- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/ (root)`

**等待站点启动**：`https://yourname.github.io`

---

## 四、本地开发：用 GitHub Desktop + Orbstack 快速预览

---

### 1. 克隆仓库（GitHub Desktop）

---

GitHub Desktop → File → Clone repository...
保存路径示例：`~/xx/GitHub/yourname.github.io`

---

### 2. 启动 Jekyll 博客容器（Orbstack）

---

```bash
cd ~/xx/GitHub/yourname.github.io
docker compose pull      # 拉取镜像
docker compose up        # 启动容器
```

本地访问：`http://localhost:8080`
支持热更新（Markdown 文件保存后自动刷新页面）

---

## 五、撰写新文章并部署上线

---

### 1. 新建 Markdown 文章（放入 `_posts/`）

---

命名格式：

```
YYYY-MM-DD-your-title.md
```

内容模板：

```
---
layout: post
title: 我的第一篇文章
date: 2025-06-20
categories: [博客]
tags: [jekyll, al-folio]
---
```

---

### 2. 提交并部署

---

1. GitHub Desktop 中 Commit → Push
2. GitHub Actions 自动构建
3. 几分钟后网站上线：`https://yourname.github.io`
