---
layout: post
title: GitHub Pages + Cloudflare 自定义域名 HTTPS 配置指南
date: 2025-06-20
description:
og_image: /assets/img/blog/https-github-pages-and-cloudflare.webp
thumbnail: /assets/img/blog/https-github-pages-and-cloudflare.webp
categories: Internet
tags: gh-pages cloudflare
giscus_comments: true
---

<img src="/assets/img/blog/https-github-pages-and-cloudflare.webp" style="width:100%;" alt="https-github-pages-and-cloudflare">

借助 GitHub Pages 托管静态网站，再通过 Cloudflare 实现 DNS 管理、HTTPS 加密与全球加速，是构建高效、安全个人博客或站点的现代主流方案。
本文将手把手带你配置自定义域名（如 `xxxx.xx`），实现 HTTPS 安全访问，并解决常见的证书问题如 `Enforce HTTPS — Unavailable` 和 `SSL 526 错误`。

---

## 准备工作

---

| 事项              | 状态说明                     |
| ----------------- | ---------------------------- |
| 你已有一个域名    | 例如：xxxx.xx                |
| 使用 GitHub Pages | 仓库已启用 Pages 功能        |
| 使用 Cloudflare   | DNS 已接管（更换 NS 服务器） |

---

## 配置 Cloudflare DNS

---

### 裸域（如 `xxxx.xx`）添加 A 记录

---

进入 Cloudflare → `DNS`，添加以下 4 条 A 记录，并开启代理（橙色云 ☁️）：

| 类型 | 名称 | 值              | 代理状态   |
| ---- | ---- | --------------- | ---------- |
| A    | @    | 185.199.108.153 | ☁️ Proxied |
| A    | @    | 185.199.109.153 | ☁️ Proxied |
| A    | @    | 185.199.110.153 | ☁️ Proxied |
| A    | @    | 185.199.111.153 | ☁️ Proxied |

这些是 GitHub Pages 官方静态 IP 地址。务必开启橙色云，否则 Cloudflare 无法提供 HTTPS 代理功能。

---

## 配置 Cloudflare SSL（启用 HTTPS）

---

### 开启 Universal SSL（自动证书）

---

路径：`SSL/TLS → Edge Certificates`
确认你看到有效证书（例如）：

```
通用证书：xxxx.xx, *.xxxx.xx（由 Cloudflare 管理）
```

---

### 设置正确的 SSL 模式

---

路径：`SSL/TLS → Overview`
选择：

```
✅ Full
```

千万不要使用 `Strict` 模式，它会导致 GitHub Pages 无法验证域名控制权，从而签发 HTTPS 失败。

---

## 配置 GitHub 仓库

---

### 添加 CNAME 文件（必须）

---

在仓库根目录添加 `CNAME` 文件（无扩展名），内容仅为你绑定的域名：

```
xxxx.xx
```

提交并推送至 GitHub。

---

## 启用 GitHub Pages 并绑定域名

---

进入 GitHub 仓库 → `Settings → Pages`：

- Custom domain 填入：

  ```
  xxxx.xx
  ```

- 等待几分钟，GitHub 将尝试自动签发 HTTPS 证书。

- 成功后，启用选项：

  ```
  ✅ Enforce HTTPS
  ```

---

### 如 Enforce HTTPS 无法启用，怎么办？

---

如果看到：

`Enforce HTTPS — Unavailable for your site because your domain is not properly configured to support HTTPS`

说明 GitHub **无法验证你的域名所有权**，常见原因：**Cloudflare 开启了代理，GitHub 无法验证域名**。

---

### 解决方法

---

1. 暂时将 Cloudflare 中的 4 条 A 记录的代理状态改为「灰色云」（DNS only）
2. 等待 3\~15 分钟，GitHub 成功签发证书后，`Enforce HTTPS` 将变为可用
3. 勾选启用后，将 Cloudflare 的 A 记录重新改回「橙色云 ☁️」

---

## 附加推荐：绑定 www 子域 + 裸域跳转

---

### 添加 www 子域

---

Cloudflare → DNS 添加：

| 类型  | 名称 | 值                 | 代理状态   |
| ----- | ---- | ------------------ | ---------- |
| CNAME | www  | yourname.github.io | ☁️ Proxied |

---

### 设置裸域自动跳转至 www

---

Cloudflare → `Rules → Redirect Rules` 添加规则：

- If hostname = `xxxx.xx` → 301 重定向至 `https://www.xxxx.xx`

好处：

- 避免裸域 SSL 验证问题
- 用户访问裸域自动跳转，提升兼容性

---

## 常见问题速查

---

| 问题                     | 可能原因                                    | 解决方式                                          |
| ------------------------ | ------------------------------------------- | ------------------------------------------------- |
| `Enforce HTTPS` 无法启用 | Cloudflare 开启代理阻止 GitHub 验证         | 临时关闭代理（灰色云），等待签发后再开启          |
| 报错 526 或 SSL 无效     | 使用了 `Full (Strict)`，GitHub 证书尚未签发 | 暂时改为 `Full` 模式，签发成功后再切回 `Strict`   |
| 访问裸域无效             | 没配置 A 记录或未开启代理                   | 添加 4 条 A 记录并开启 ☁️ 代理                    |
| 证书看起来不是 GitHub 的 | 实际是 Cloudflare 的边缘证书                | 正常现象，Cloudflare 使用自己的证书在边缘节点处理 |

---

## 总结配置顺序

---

1. 添加 4 条裸域 A 记录（185.199.x.x），开启代理 ☁️
2. 添加仓库根目录 `CNAME` 文件，填入域名
3. 在 GitHub Pages 设置中绑定域名，等待 HTTPS 自动签发
4. 若 `Enforce HTTPS` 无法启用：临时关闭 Cloudflare 代理（灰色云），等待生效
5. 成功后启用 `Enforce HTTPS`，再改回橙色云 ☁️
6. （推荐）添加 `www` 子域并设置裸域跳转
