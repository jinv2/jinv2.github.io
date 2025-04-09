layout: archive
layout: default # 使用主题的默认页面布局
title: 博客文章
permalink: /blog/ # 设置页面的固定链接为 /blog/
---

# 博客文章

以下是本站的所有文章列表：

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}
    </li>
  {% endfor %}
</ul>
