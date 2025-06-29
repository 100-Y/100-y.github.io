---
layout: post
title: 三层结构，双态网络：家庭网络架构中的角色分工与流量分流策略
date: 2025-04-02
description:
og_image: /assets/img/blog/png/
thumbnail: /assets/img/blog/svg/
categories: Notes
tags: internet
giscus_comments: true
---

<img src="/assets/img/blog/svg/" alt="" style="width:100%">

---

## 一、网络设备与角色配置

---

### 1. 光猫（一级网关）

---

**IP 地址**：`192.168.1.1`  
**角色**：网络出口 + 主 DHCP 服务  
**DHCP 范围**：`192.168.1.2 ~ 192.168.1.254`

---

### 2. TP-Link 主路由（独立子网）

---

**WAN 接口**：接入光猫，自动获取 IP `192.168.1.2`  
**LAN 接口**：设置为 `192.168.0.1`，创建 NAT 子网  
**DHCP 范围**：`192.168.0.100 ~ 192.168.0.199`  
**连接方式**：LAN to WAN（物理隔离子网）  
**接入设备**：电视、平板、手机等家庭设备

---

### 3. Cudy 路由器（旁路由 / 透明代理）

---

**系统**：OpenWRT + SSR Plus+  
**接口桥接**：LAN（eth0）+ WAN（eth1） → `br-lan`  
**IP 配置**：

- IP 地址：`192.168.1.3`（静态）
- 网关：`192.168.1.1`（光猫）

**DHCP 服务**：关闭（由光猫统一分配）  
**WAN 接口**：不启用独立 IP，仅参与桥接  
**接入设备**：专用电脑（网线直连）与手机（Wi-Fi 接入）

---

## 二、流量路径分析

---

### 1. 路径①：家庭设备访问百度（走 TP-Link 子网）

---

**IP 地址**：`192.168.0.x`（TP-Link DHCP 分配）  
**路径流程**：

```
设备 → TP-Link LAN → NAT → TP-Link WAN（192.168.1.2）
      → 光猫（192.168.1.1） → ISP 出口 → 百度服务器
      → 返回同路径返还
```

**特点**：

- 走独立子网，**不经过 Cudy**
- 无代理、无干扰，适合家庭使用

---

### 2. 路径②：专人设备访问百度（直连流量）

---

**接入方式**：Cudy LAN / Wi-Fi  
**IP 地址**：`192.168.1.x`（由光猫分配）  
**SSR Plus** 判断为：国内流量  
**路径流程**：

```
设备 → br-lan → SSR Plus 判定直连 → 光猫 → ISP → 百度
      → 返回数据经光猫 → br-lan → 设备
```

**特点**：

- Cudy 做透明分流，**判断为国内流量后直接放行**
- 路由路径简洁高效

---

### 3. 路径③：专人设备访问 Google（代理流量）

---

**接入方式**：Cudy LAN / Wi-Fi  
**IP 地址**：`192.168.1.x`（光猫 DHCP）  
**SSR Plus** 判断为：需代理流量

---

### 4. 通信流程：

---

**发出阶段**：

```
设备 → br-lan（Cudy） → SSR Plus 拦截 → 启动 TPROXY
→ Cudy 发起加密连接 → 经光猫 → SSR 节点 → Google
```

**返回阶段**：

```
Google → SSR 节点 → 返回 Cudy → 解密
→ 伪装为 Google 回包 → 直接返回设备（透明）
```

---

### 5. 通俗比喻：

---

**你** = 想访问 Google 的人  
**Cudy** = 家中聪明助手  
**SSR 节点** = 国外翻译朋友  
**光猫** = 小区门卫（放行正常请求）

---

## 三、关键技术点汇总

---

| 项目         | TP-Link 主路由          | Cudy 路由器（透明代理） |
| ------------ | ----------------------- | ----------------------- |
| 网络接入     | WAN 接光猫              | LAN/WAN 桥接，接光猫    |
| 子网划分     | 自建 `192.168.0.x` 子网 | 不建子网，使用主网段    |
| DHCP         | 自行分配                | 关闭（依赖光猫）        |
| NAT 操作     | 开启                    | 关闭（透明转发）        |
| 插件功能     | 无                      | SSR Plus 分流           |
| 插件模式     | 不适用                  | TPROXY 模式（透明代理） |
| 接入设备     | 家庭设备                | 专人设备                |
| 数据出口路径 | TP-Link → 光猫 → ISP    | Cudy → 光猫 → SSR → ISP |

---

## 四、整体架构总结

---

**透明分流**：Cudy 利用 TPROXY 模式无感知分流国内与国外请求  
**主网不变**：不更改原有 192.168.1.x 结构，兼容性好  
**家庭与专人隔离**：TP-Link 创建独立子网，家庭设备无需代理  
**统一物理出口**：所有数据仍经由光猫出入，便于管理与监控

---

## 五、最终效果：

---

SSR Plus 判别访问目标，是否代理；  
Cudy 负责透明拦截与转发，终端无感知；  
网络高效分流，结构清晰可控。
