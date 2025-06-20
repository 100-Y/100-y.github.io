---
layout: post
title: "页面加载完成后，再执行Google AdSense代码"
date: 2023-03-02
excerpt: "这里填写摘要"
description: 完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致
og_image: /assets/img/blog/xxxxxxxx
thumbnail: /assets/img/blog/xxxxxxxx
categories: Notes
tags:
---

<img src="/assets/img/blog/xxxxxxxx" style="width:100%;" alt="xxxxxxxx">

2023/03/02

function downloadJSAtOnload() {  
var element = document.createElement(“script”);  
element.setAttribute(“async”, “”);  
element.src = “\*\*\[https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=\*\*ca-pub-xxxxxxxxxxxxxxxx\*\*“\](https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=\*\*ca-pub-xxxxxxxxxxxxxxxx\*\*%E2%80%9C)\*\*;  
element.setAttribute(“crossorigin”, “anonymous”);  
document.body.appendChild(element);  
}  
if (window.addEventListener)  
window.addEventListener(“load”, downloadJSAtOnload, false);  
else if (window.attachEvent)  
window.attachEvent(“onload”, downloadJSAtOnload);  
else window.onload = downloadJSAtOnload;

隐藏空白AdSense代码css：  
ins.adsbygoogle\[data-ad-status=”unfilled”\] {  
display: none !important;  
}
