---
layout: default # 确保主页使用我们统一的 default 布局
title: "天算AI - 首页" # 主页标题 (显示在浏览器标签栏)
---

# 天算AI 
<!-- (这个内容区的标题可以保留或删除) -->

AI科技博主 | AI科技研发 | 科技前沿最新AI资讯影视化报道

---

## 天算AI数字资产：

*   5万字原创诗文
*   7千分钟原创交响乐
*   9千部原创AI短视频
*   16项原创AI科技产品
*   7个天算AI大语言模型

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/SLv6RckpPWM?si=m8lxR8b4VTZKTXEn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

天算AI (Natural Algorithm)

---

## 最新博客文章

<ul>
  {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}
    </li>
  {% endfor %}
</ul>

{% if site.posts.size > 0 %}
  <p><a href="{{ '/blog/' | relative_url }}">查看所有文章</a></p>
{% endif %}

<!-- 页面底部的导航链接 -->
<hr>
<p>
  <a href="{{ '/' | relative_url }}">首页</a> |
  <a href="{{ '/blog/' | relative_url }}">博客</a> |
  <a href="{{ '/about/' | relative_url }}">关于</a> |
  <a href="{{ '/contact/' | relative_url }}">联系我们</a>
</p>
