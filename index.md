---
layout: home
title: 天算AI 主页
---

<div style="text-align: center; margin-bottom: 15px;"> <!-- Logo 居中显示 -->
  <img src="{{ '/assets/images/天算LOGO3.png' | relative_url }}" alt="天算AI Logo" width="100">
  <!-- 使用 relative_url 过滤器确保路径正确 -->
  <!-- 您可以修改 width="100" 来调整 Logo 大小 -->
</div>

# 天算AI

AI科技博主 | AI科技研发 | 科技前沿最新AI资讯影视化报道

---

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

## 最新博客文章

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
