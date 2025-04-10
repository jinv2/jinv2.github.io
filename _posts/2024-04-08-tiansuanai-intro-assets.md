---
layout: page  # 使用 'page' 布局来获取统一的蓝色绿色背景/头部样式
title: "天算AI 简介与数字资产" # 文章标题，反映页面内容
date: 2024-04-08 00:00:00 +0800 # 文章的日期
# categories: [介绍] # 可选的分类
# tags: [简介, 资产] # 可选的标签
---

<!-- ↓↓↓ 以下是你指定要显示的内容 ↓↓↓ -->

## 天算AI数字资产：

*   5万字原创诗文
*   7千分钟原创交响乐
*   9千部原创AI短视频
*   16项原创AI科技产品
*   7个天算AI大语言模型

---

天算AI (Natural Algorithm)

---

## 最新博客文章（从此页面查看）

<!-- 使用 Liquid 代码动态生成最新的文章列表 -->
<ul>
  {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}
    </li>
  {% endfor %}
</ul>

{% if site.posts.size > 0 %} <!-- 检查是否有文章 -->
  <p><a href="{{ '/blog/' | relative_url }}">查看所有文章</a></p> <!-- 请确认 /blog/ 是你文章列表页的正确路径 -->
{% endif %}

<!-- “返回主页”的链接应该由 _layouts/page.html 文件自动添加在下方 (如果已修改布局文件) -->
