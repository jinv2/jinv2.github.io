---
layout: default # 使用 Cayman 主题的默认布局
title: 博客文章
permalink: /blog/
---

# 博客文章

以下是本站的所有文章列表：

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}
    </li>
  {% endfor %}
</ul>
