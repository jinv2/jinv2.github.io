---
layout: page # 改回使用 page 布局，希望能获得合适的头部样式
title: 天算AI (Natural Algorithm) # 这个标题可能会显示在页面头部
---

<!-- Logo 使用绝对定位放在左上角 -->
<img src="{{ '/assets/images/天算LOGO3.png' | relative_url }}" alt="天算AI Logo" style="position: absolute; top: 20px; left: 20px; width: 60px; z-index: 10;">
<!-- 你可以根据需要修改 width, top, left 的值 -->

<!-- 用一个 div 包裹主要内容，并添加上内边距 (padding-top) 为 Logo 留出空间 -->
<div style="padding-top: 80px;"> <!-- 如果 Logo 下方的空白太多或太少，请调整这里的 80px -->

    <!-- ↓↓↓ 欢迎信息作为主要内容 ↓↓↓ -->

    大家好！欢迎来到 天算AI 的官方博客。

    在这里，我将分享关于人工智能 (AI) 科技的研发进展、前沿资讯的影视化解读，以及个人的学习和思考。

    我的目标是：

    *   探索 AI 的无限可能
    *   分享最新的科技动态
    *   记录原创内容的创作历程

    ## 关注我的 YouTube 频道

    除了文字内容，我也会在 YouTube 上发布相关的视频内容，包括 AI 资讯的影视化报道、原创音乐和短视频等。

    欢迎订阅我的频道：[天算AI YouTube 频道](https://www.youtube.com/@tiansuanai) <!-- 请确认这里的链接是正确的 -->

    期待与大家一同在 AI 的世界里探索和成长！

    ---

    <!-- ↓↓↓ 重新添加最新博客文章列表 ↓↓↓ -->

    ## 最新博客文章

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

<!-- 包裹内容的 div 在这里结束 -->
</div>
