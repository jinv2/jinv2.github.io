---
layout: post # 继续使用 post 布局
title: "天算AI 简介与数字资产" # 可以把标题改成更符合内容的，比如这个
date: 2024-04-07 00:00:00 +0800 # 保留原始发布日期
# categories: [介绍] # 可以根据新内容调整分类
# tags: [简介, 资产] # 可以根据新内容调整标签
---

<!-- ↓↓↓ 这里是新的博客文章内容（原来主页的内容）↓↓↓ -->

## 天算AI数字资产：

*   5万字原创诗文
*   7千分钟原创交响乐
*   9千部原创AI短视频
*   16项原创AI科技产品
*   7个天算AI大语言模型

---

<div style="text-align: center; margin: 20px 0;"> <!-- YouTube 视频居中显示 -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/SLv6RcKpPWM?si=m8IxR8b4vTZKTXEn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

天算AI (Natural Algorithm)

---

## 最新博客文章（从此页面查看）

<ul>
  {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}
    </li>
  {% endfor %}
</ul>

{% if site.posts.size > 0 %} <!-- 检查是否有文章 -->
  <p><a href="{{ '/blog/' | relative_url }}">查看所有文章</a></p> <!-- 确认 /blog/ 是你文章列表页的正确路径 -->
{% endif %}
