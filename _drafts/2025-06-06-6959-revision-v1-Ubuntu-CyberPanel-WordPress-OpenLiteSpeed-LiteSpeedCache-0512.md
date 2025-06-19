---
layout: post
title: '#Ubuntu + #CyberPanel + #WordPress + #OpenLiteSpeed + #LiteSpeedCache 0512'
date: 2025-06-06
layout: revision
---

<img src="/assets/img/blog/xxxxxxxx" style="width:100%;" alt="xxxxxxxx">

登录服务器厂家界面：https://app.cloudcone.com/login。  
  
RE-INSTALL VPS  
Re-install a template onto your VPS and boot it up  
Re-installing will format your servers disks, existing data will be irrecoverable  
  
重新安装VPS  
在您的VPS上重新安装一个模板并启动它  
重新安装将会格式化您的服务器磁盘，现有数据将无法恢复  
  
  
CyberPanel 无法在 Ubuntu 24.04 上安装，报错：Unable to detect your OS...  
这是因为：  
🔧 CyberPanel 脚本目前官方仅支持 Ubuntu 18.04、20.04、22.04、AlmaLinux 8/9、CloudLinux 7.x  
🚫 Ubuntu 24.04 尚未被 CyberPanel 官方脚本适配（截至 2025 年 5 月）  
  
  
  
  
一、操作系统：Ubuntu 22.04 - x86\_64（https://releases.ubuntu.com/noble/）  
  
✅ 一、安装 Ubuntu 22.04 LTS  
  
方式一：在 CloudCone / VPS 面板中安装（推荐）  
  
1\. 登录 CloudCone 控制面板  
2\. 选择你的服务器 → 点击 `Reinstall OS` 或 `Install OS`  
3\. 在操作系统列表中选择：  
 ✅ \*\*Ubuntu 22.04 - x86\\\_64\*\*  
4\. 点击确认安装，等待约 1–3 分钟完成初始化  
  
&gt; 系统安装完后，将会通过 Email / 面板显示 \*\*root 密码\*\* 与服务器 IP 地址。  
  
\## ✅ 二、首次登录 VPS（远程连接）  
  
使用终端工具连接服务器：  
  
root  
密码  
  
\## ✅ 三、更新系统软件包（建议立刻执行）  
  
这是非常重要的一步，可获得最新安全补丁和内核支持：  
  
\# 查看了所有待升级的软件包列表  
apt list --upgradable  
  
\# 升级所有已安装包  
apt upgrade -y  
  
  
你看到的是 `openssh-server` 在系统升级时提示的配置文件冲突处理界面：  
\## 🧩 问题说明  
Ubuntu 检测到你已有一个修改过的 `sshd\_config` 文件，而新的软件包也提供了一个新版本（位于 `/tmp` 临时目录中）。系统正在询问：  
&gt; \*\*是否要覆盖你当前的 SSH 配置文件？\*\*  
\## ✅ 建议选择（安全推荐）：  
🔴 \*\*保持当前本地配置（默认高亮项）\*\*  
即：`keep the local version currently installed`  
✅ 这是最安全的选择，\*\*不会破坏当前 SSH 登录设置\*\*  
如果你修改过：  
\* 端口（如非22）  
\* 禁用了密码登录  
\* 启用了特定用户限制  
 选择这项可以保留这些设置。  
\## 📝 其他选项解释（了解即可）：  
| 选项 | 说明 |  
| -------------------------------- | -------------------------- |  
| install the maintainer's version | 用新版本替换你当前的配置（⚠️风险：SSH可能失联） |  
| show the differences... | 查看旧新版本之间的差异 |  
| do a 3-way merge | 手动合并两者差异（适合高级用户） |  
| start a new shell... | 启动新的终端去做手动处理 |  
\## ✅ 如何操作？  
按键盘：  
\* 直接 \*\*回车 Enter\*\* 保持默认选中项（即保持本地配置）  
你之后可以手动比较并合并新旧配置（如有必要）：  
diff /etc/ssh/sshd\_config /tmp/tmp.XXXXXX  
  
  
\# （可选但推荐）升级内核、系统核心组件（升级发行版组件）  
apt dist-upgrade -y  
  
\# 清理无用包和缓存  
apt autoremove -y  
apt clean  
  
\# 重启服务器（如有提示）  
\*\*\* System restart required \*\*\*  
reboot  
  
\# 验证更新状态  
lsb\_release -a # 查看当前系统版本  
uname -r # 查看当前运行内核版本  
apt list --upgradable # 再次检查是否还有可更新项  
  
  
  
  
二、系统图形界面：cyberpanel：https://cyberpanel.net/get-started-with-cyberpanel  
  
\---  
  
\## ✅ 一、准备阶段  
  
\### SSH 登录确认：  
  
root  
密码  
  
\## ✅ 二、安装 CyberPanel（含 OpenLiteSpeed + PHP + MariaDB + WordPress）  
  
\### 📦 一键安装命令（官方推荐方式）：  
  
```bash  
sh ```  
  
系统会进入交互式安装，你只需按照以下选择操作：  
  
\---  
  
\## ✅ 三、安装过程交互说明（建议选项）  
  
| 步骤 | 建议输入 |  
| -------------------------- | ------------------------- |  
| 是否安装 CyberPanel？ | `1`（安装 CyberPanel） |  
| 使用哪种 Web 服务器？ | `1`（选择 OpenLiteSpeed 免费版） |  
| 安装 Full Service 或 Minimal？ | `1`（Full Installation） |  
| 设置 admin 密码？ | 自定义（或回车使用随机） |  
| 安装 PowerDNS？ | `n`（除非你要做域名服务） |  
| 安装 Postfix/Dovecot（邮件）？ | `n`（不建议新手启用） |  
| 安装 Memcached/Redis？ | `y`（建议启用） |  
| 安装 Watchdog？ | `n`（不建议） |  
  
\---  
  
\## ✅ 四、安装完成后登录面板  
  
安装结束后终端会显示类似：  
  
```  
CyberPanel Successfully Installed!  
Panel URL: https://你的IP:8090  
Username: admin  
Password: 你设置的密码  
```  
  
你现在可以通过浏览器访问：  
  
```  
https://你的IP:8090  
```  
  
⚠️ \*\*记得在安全组/防火墙中放行端口 8090、80、443、21、22。\*\*  
  
\---  
  
\## ✅ 五、部署 WordPress（在面板中）  
  
1\. 登录 CyberPanel 面板  
2\. 左侧 → Websites → Create Website  
3\. 填写域名、邮箱、PHP 版本（推荐 8.1+）  
4\. 创建后 → Website Management → 选择网站 → 点击 `Install WordPress`  
5\. 填写站点名称、管理员账户、密码等信息 → 完成  
  
\---  
  
\## ✅ 六、后续优化（建议）  
  
\* \*\*启用 LiteSpeed Cache 插件\*\*  
\* 配置自动 SSL（Let’s Encrypt）  
\* 配合 Redis + Cloudflare 实现全站加速  
\* 定期更新 CyberPanel（可后台操作）  
  
\---  
  
是否需要我为这整个过程生成：  
📄 \*\*完整《CyberPanel 安装 + WordPress 部署操作手册》Markdown/PDF 版本\*\*？  
或提供防火墙端口开放指令 + Cloudflare 对接方案？  
  
  
  
三、明白了！你现在已经完成了 CyberPanel 的安装，接下来我将一步步教你如何\*\*在 CyberPanel 上安装 WordPress 网站\*\*，从添加站点到登录 WordPress 后台。  
  
\---  
  
\## ✅ 一、前提确认  
  
确保你已经能访问 CyberPanel 面板：  
  
```  
https://你的服务器IP:8090  
```  
  
如果可以正常登录，就可以开始安装 WordPress 站点了。  
  
\---  
  
\## 🧭 二、完整 WordPress 安装步骤（图形界面操作）  
  
\### 1️⃣ 创建新网站  
  
1\. 登录 CyberPanel 后台  
2\. 左侧菜单点击：`Websites → Create Website`  
3\. 填写以下信息：  
  
| 项目 | 内容说明 |  
| --------------- | ------------------------ |  
| \*\*Domain Name\*\* | 输入你的域名（如：example.com） |  
| \*\*Email\*\* | 管理员邮箱 |  
| \*\*Package\*\* | 选 default |  
| \*\*Owner\*\* | 保持默认（admin） |  
| \*\*PHP Version\*\* | 推荐选 8.1 或 8.2 |  
| \*\*SSL\*\* | ✅ 勾选（稍后安装 Let’s Encrypt） |  
  
&gt; 然后点击最下方 `Create Website`  
  
\---  
  
\### 2️⃣ 安装 WordPress 应用  
  
1\. 左侧菜单：`Websites → List Websites`  
2\. 找到你刚刚创建的域名，点击 `Manage`  
3\. 下拉找到 `Application Installer` 区块  
4\. 点击 \*\*WordPress\*\*，进入安装页面  
5\. 填写以下字段：  
  
| 项目 | 示例值 |  
| ------------------ | ----------------------------------------------- |  
| \*\*Site Title\*\* | 我的博客 / My Site |  
| \*\*Login Username\*\* | admin |  
| \*\*Login Password\*\* | 自定义强密码 |  
| \*\*Login Email\*\* | \[example@domain.com\](mailto:example@domain.com) |  
  
&gt; 完成后点击 \*\*Install Now\*\*  
  
\---  
  
\### 3️⃣ 安装完成后，你将看到：  
  
\* WordPress 登录地址：  
  
 ```  
 http://你的域名/wp-login.php  
 ```  
\* 使用你刚设定的用户名和密码即可登录后台  
  
\---  
  
\## ✅ 三、启用 HTTPS（Let’s Encrypt）  
  
1\. CyberPanel 左侧 → `Websites → List Websites` → 选择你的站点 → `Manage`  
2\. 找到 “SSL” 区块，点击 “Issue SSL”  
3\. 建议同时启用 “Force SSL” 强制全站 HTTPS  
  
⚠️ 确保你\*\*域名已正确解析到服务器 IP\*\*，否则无法申请证书  
  
\---  
  
\## ✅ 四、安装完成后建议操作  
  
| 操作项 | 说明 |  
| --------------------- | ----------------------- |  
| 安装 LiteSpeed Cache 插件 | 提升站点加载速度，开启缓存 |  
| 安装安全插件 | 如 Wordfence 或 Loginizer |  
| 安装备份插件 | 如 UpdraftPlus，配置定时备份到云盘 |  
  
\---  
  
如果你使用的是 \*\*IP 地址访问\*\*，而不是绑定域名，也可以在创建网站时填入服务器 IP，但推荐绑定域名后再完成 SSL 和 CDN 配置。  
  
是否需要我为你生成一份图文版 PDF《CyberPanel WordPress 安装图解手册》？  
  
  
  
  
  
  
太棒了！你已经成功在 CyberPanel 中创建了站点 ✅，现在我们可以继续完成最核心的任务 —— \*\*在该站点上安装 WordPress\*\*。  
  
以下是下一步详细流程：  
  
\---  
  
\## ✅ 一、进入站点管理后台  
  
1\. 登录 CyberPanel 面板  
2\. 左侧菜单点击：`Websites → List Websites`  
3\. 找到你刚刚创建的域名，点击对应的 `Manage` 按钮  
  
\---  
  
\## ✅ 二、安装 WordPress 应用  
  
在站点管理页中：  
  
1\. 滚动页面，找到 `Application Installer` 区块  
2\. 点击 \*\*WordPress\*\* 安装器  
  
&gt; 📌 注意：此功能会自动下载并配置最新版 WordPress，包括数据库连接。  
  
\---  
  
\## ✅ 三、填写 WordPress 安装信息  
  
在安装页面中，填写以下字段：  
  
| 字段名称 | 示例值 | 说明 |  
| ------------------ | ------------------------------------------------------- | -------------- |  
| \*\*Site Title\*\* | 我的博客 / MySite | WordPress 网站标题 |  
| \*\*Login Username\*\* | admin | 管理员用户名 |  
| \*\*Login Password\*\* | 自定义强密码（非常重要） | 登录后台使用的密码 |  
| \*\*Login Email\*\* | \[example@yourdomain.com\](mailto:example@yourdomain.com) | 管理员邮箱地址 |  
  
&gt; 填完后点击 \*\*Install Now\*\*  
  
系统会自动：  
  
\* 下载 WordPress  
\* 配置 wp-config.php  
\* 创建数据库并绑定  
  
\---  
  
\## ✅ 四、安装成功后，你将看到：  
  
\* 你的站点地址：  
  
 ```  
 http://yourdomain.com  
 ```  
\* WordPress 后台地址：  
  
 ```  
 http://yourdomain.com/wp-login.php  
 ```  
  
使用刚才设置的用户名和密码登录即可。  
  
\---  
  
\## ✅ 五、后续建议操作  
  
1\. \*\*开启 SSL（HTTPS）\*\*  
  
 \* 回到站点管理页 → SSL → `Issue SSL`（Let’s Encrypt）  
 \* 然后启用 `Force SSL`  
  
2\. \*\*安装 LiteSpeed Cache 插件\*\*  
  
 \* 后台插件 → 搜索 `LiteSpeed Cache` → 安装并启用  
 \* 它能开启全页缓存，显著加速网站  
  
3\. \*\*配置 SMTP 发信插件（可选）\*\*  
  
 \* 插件推荐：WP Mail SMTP / FluentSMTP  
 \* 用 Gmail / Mailgun 代替服务器发邮件，防止进入垃圾箱  
  
\---  
  
\## ✅ 六、检查站点状态  
  
\* 如果你未绑定域名，也可使用 `http://your-server-ip/` 临时访问  
\* 如果站点访问失败，请检查：  
  
 \* 域名 DNS 是否解析成功  
 \* 服务器端口是否开启（80, 443）  
 \* SSL 是否签发完成  
  
\---  
  
如果你愿意，我可以继续为你生成：  
  
📄《WordPress 安装后安全/性能/备份优化清单》  
或手把手配置 LiteSpeed Cache + Redis 加速系统？  
  
是否继续？