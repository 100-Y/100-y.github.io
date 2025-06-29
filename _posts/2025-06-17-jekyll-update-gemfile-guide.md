---
layout: post
title: Jekyll 依赖管理：正确修改 Gemfile 并避免构建错误
date: 2025-06-17
description: 本文整理了在 Jekyll 项目中正确修改 Gemfile 和 Gemfile.lock 的最佳实践，并附上常见问题与解决方案。
og_image: /assets/img/blog/png/jekyll-update-gemfile-guide.png
thumbnail: /assets/img/blog/svg/jekyll-update-gemfile-guide.svg
categories: Internet
tags: jekyll gemfile
giscus_comments: true
---

<img src="/assets/img/blog/svg/jekyll-update-gemfile-guide.svg" alt="jekyll-update-gemfile-guide" style="width:100%">

当你在维护 Jekyll 项目时，**修改 Gemfile 后却忘记更新 Gemfile.lock**，很容易导致构建失败（特别是在 GitHub Actions、Cloudflare Pages 等 CI/CD 环境）。本文总结了常见问题、正确做法和命令技巧，帮你避免踩坑。

---

## 一、基础概念

---

| 文件名         | 作用说明                                    |
| -------------- | ------------------------------------------- |
| `Gemfile`      | 声明你项目需要哪些 Ruby gems（插件）        |
| `Gemfile.lock` | 锁定 gem 的具体版本，确保不同环境下依赖一致 |
| Bundler        | 管理上述两个文件、安装和更新依赖的工具      |

---

## 二、常见问题及错误信息

---

**场景**：你删除了某个插件（如 `jekyll-jupyter-notebook`）后，仅更新了 `Gemfile`，没改 `Gemfile.lock`，结果在 CI 构建时报错：

`Some dependencies were deleted from your gemfile, but the lockfile can't be updated because frozen mode is set`

**原因**：CI 环境默认开启 `frozen` 模式，禁止自动更新 `Gemfile.lock`，以避免依赖变更带来的不确定性。

---

## 三、正确修改依赖的流程

---

修改 Gemfile

```ruby
# 删除或注释掉不需要的插件
# gem "jekyll-jupyter-notebook"
```

允许更新锁文件

```bash
bundle config set frozen false
```

更新依赖并重生成 `Gemfile.lock`

```bash
bundle install
```

提交改动

```bash
git add Gemfile Gemfile.lock
git commit -m "Update dependencies"
git push
```

---

## 四、CI/CD 构建注意事项

---

| 建议做法                       | 原因                                  |
| ------------------------------ | ------------------------------------- |
| 本地更新 `Gemfile.lock` 并提交 | CI 环境锁定依赖，避免构建失败         |
| 不要在 CI 中禁用 frozen 模式   | 有安全风险，容易引入错误版本          |
| 遇到报错先检查是否提交了锁文件 | 多数构建错误都是因为漏了 Gemfile.lock |

---

## 五、常见坑 vs 解决方案

---

| 问题场景                | 正确解决方式                                         |
| ----------------------- | ---------------------------------------------------- |
| 构建时报错 frozen       | 本地运行 `bundle config set frozen false` 后重新安装 |
| 手动改了 `Gemfile.lock` | 禁止手动修改！请用 `bundle install` 自动处理         |
| 插件版本冲突或缺失      | 检查 Gemfile 中插件版本是否兼容                      |
| 部署环境无法安装依赖    | 确保 Gemfile.lock 被正确提交并同步                   |

---

## 六、快速命令汇总（复制即用）

---

```bash
cd /your/jekyll/project/path

bundle config set frozen false
bundle install

git add Gemfile Gemfile.lock
git commit -m "Update dependencies"
git push
```

---

## 七、总结建议

---

记住这几点：

- 改 Gemfile ➜ 一定也要改 Gemfile.lock
- 用 `bundle install` 自动更新锁文件，不要手动改
- CI 环境保留 `frozen: true` 设置，确保版本一致性
- 先本地检查、再提交构建，避免 CI 报错
