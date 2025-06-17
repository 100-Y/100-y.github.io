---
layout: page
permalink: /c-a/
title: 归类 / C-A
nav: true
nav_order: 3
---

---

## 1 分类 / Categories

### 1.1 原创 / Original

<ul style="line-height: 1; font-size: 18px; list-style: none; padding-left: 0;">
  <li style="margin-bottom: 12px;"><a href="/blog/category/notes/" style="font-size: inherit;">随笔 / Notes</a> ({{ site.categories.Notes | size }})</li>
  <li style="margin-bottom: 12px;"><a href="/blog/category/poems/" style="font-size: inherit;">诗歌 / Poems</a> ({{ site.categories.Poems | size }})</li>
  <li style="margin-bottom: 12px;"><a href="/blog/category/phrases/" style="font-size: inherit;">短语 / Phrases</a> ({{ site.categories.Phrases | size }})</li>
  <li style="margin-bottom: 12px;"><a href="/blog/category/dreams/" style="font-size: inherit;">梦境 / Dreams</a> ({{ site.categories.Dreams | size }})</li>
  <li style="margin-bottom: 12px;"><a href="/blog/category/essays/" style="font-size: inherit;">杂文 / Essays</a> ({{ site.categories.Essays | size }})</li>
  <li style="margin-bottom: 12px;"><a href="/blog/category/paintings/" style="font-size: inherit;">绘画 / Paintings</a> ({{ site.categories.Paintings | size }})</li>
  <li style="margin-bottom: 12px;"><a href="/blog/category/sea-wall/" style="font-size: inherit;">海城墙 / Sea-Wall</a> ({{ site.categories["Sea-Wall"] | size }})</li>
  <li style="margin-bottom: 12px;"><a href="/blog/category/cloud-country/" style="font-size: inherit;">云之国 / Cloud-Country</a> ({{ site.categories["Cloud-Country"] | size }})</li>
</ul>

### 1.2 衍生

<ul style="line-height: 1; font-size: 18px; list-style: none; padding-left: 0;">
  <li style="margin-bottom: 12px;"><a href="/blog/category/derivatives/" style="font-size: inherit;">翻译、整理</a> ({{ site.categories.Derivatives | size }})</li>
  <li style="margin-bottom: 12px;"><a href="/blog/category/hyzzj/" style="font-size: inherit;">汉阳舟子集</a> ({{ site.categories.hyzzj | size }})</li>
</ul>

---

## 2 归档 / Archives

<ul style="line-height: 1; font-size: 18px; list-style: none; padding-left: 0;">
  {% assign posts_by_year = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
  {% for year in posts_by_year %}
    <li style="margin-bottom: 12px;">
      <a href="{{ '/blog/' | append: year.name | relative_url }}" style="font-size: inherit;">
        {{ year.name }}
      </a> ({{ year.items | size }})
    </li>
  {% endfor %}
</ul>
---
