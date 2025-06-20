---
layout: post
title: 三层结构，双态网络：家庭网络架构中的角色分工与流量分流策略
date: 2025-04-02
excerpt: "（这里写摘要）"
description: 完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致
og_image: /assets/img/blog/xxxxxxxx
thumbnail: /assets/img/blog/xxxxxxxx
categories: Notes
tags: internet
giscus_comments: true
---

<img src="/assets/img/blog/xxxxxxxx" style="width:100%;" alt="xxxxxxxx">

【设备角色与配置】

光猫（一级网关）

- IP 地址：192.168.1.1
- 功能：网络出口 + 主 DHCP 服务
- DHCP 范围：192.168.1.2 ~ 254

TP-Link 主路由（创建独立子网）

- WAN口：接入光猫，自动获取 192.168.1.2
- LAN口：192.168.0.1，自建 NAT 子网
- DHCP：开启，范围 192.168.0.100~199
- 接入设备：电视、平板、手机等家庭共用设备
- 连接方式：LAN to WAN（隔离子网）

Cudy 路由器（旁路由）

- 系统：OpenWRT + SSR Plus+
- LAN口（eth0）+ WAN口（eth1）→ 桥接为 br-lan
- br-lan 配置：
  - IP 地址：192.168.1.3（静态）
  - 网关：192.168.1.1（光猫）
  - WAN 接口：不启用独立 IP，仅作为物理桥
  - DHCP：关闭（由光猫分配）
- 接入设备：电脑（网线接 Cudy LAN）、手机（Wi-Fi 接入 Cudy）

【流量路径分析】

流量路径 ①：家庭共用设备（访问百度）

- 接入方式：TP-Link Wi-Fi / LAN
- IP 地址：192.168.0.x（由 TP-Link 分配）
- 路径流程：

  - 设备 → TP-Link LAN → NAT → TP-Link WAN（192.168.1.2）
  - → 光猫（192.168.1.1） → 出口 → 百度服务器
  - → 百度返回 → 光猫 → NAT → 返回设备

- `备注：`
  - `完全走 TP-Link 子网`
  - `不经过 Cudy，不分流、不代理`
  - `适合普通家庭网络使用`

流量路径 ②：专人设备访问百度（直连流量）

- 接入方式：Cudy LAN/Wi-Fi
- IP 地址：192.168.1.x（由光猫分配）
- SSR Plus 分流判断：国内流量
- 路径流程：

  - 设备 → br-lan → SSR Plus 检测为“直连”
  - → 转发数据 → 光猫网关（192.168.1.1） → 出口
  - → 百度服务器 → 返回 → 光猫 → 返回设备

- `备注：`
  - `Cudy 检查目标后不代理，直接放行`
  - `数据走光猫出入，无拦截`
  - `适合访问国内服务`

流量路径 ③：专人设备访问 Google（代理流量）

- 接入方式：Cudy LAN/Wi-Fi
- IP 地址：192.168.1.x（光猫 DHCP）
- SSR Plus 分流判断：需要代理
- 路径流程（通俗+专业结合）：

  - 【发出过程】
    - 设备发出访问 Google 请求
    - → 被 Cudy 拦截（TPROXY 透明代理）
    - → Cudy 发起 SSR 加密连接（自己代你访问）
    - → 请求数据通过光猫 → 远程 SSR 代理节点 → Google
  - 【返回过程】
    - Google 返回数据 → SSR 节点 → 回传 Cudy
    - → Cudy 解密 → 假装是 Google 回来的原始数据
    - → 通过内网直接还给你的设备

- `通俗类比：`
  - 你 = 想去 Google 的人
  - Cudy = 家里的聪明助手
  - SSR 节点 = 国外的翻译朋友
  - 光猫 = 小区门卫（看你助手正常出门，就不拦）

【关键技术点汇总】

- 项目 TP-Link 主路由 Cudy 旁路由（透明代理）
- 网络接入 WAN 接光猫 LAN/WAN 桥接接光猫
- 子网划分 创建 192.168.0.x 子网 不建子网，保留主网段
- DHCP 服务 自行分配 关闭，依赖光猫
- NAT 操作 开启 关闭
- 插件作用 无 SSR Plus 透明代理
- 插件模式 不适用 TPROXY 分流/劫持
- 接入设备 家庭设备（隔离子网） 专人设备（主网透明代理）
- 数据出口路径 TP-Link → 光猫 → ISP Cudy → 光猫 → SSR → ISP

【总结】

- 整个架构将 Cudy 设置为无子网透明旁路由，实现：
- 主网结构不变；
- 分流灵活透明；
- 家庭设备与代理设备互不干扰；
- 所有数据物理出口统一通过光猫，逻辑出口由 Cudy 控制。
- SSR Plus 抓住设备发出的请求，判断是否需要走“翻译代理”，再帮你完成访问国外网站的过程，设备无感知。
