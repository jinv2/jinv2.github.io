---
layout: page # 确保使用 page 布局
title: 天算AI # 这个 title 可能不再直接显示在头部，但对浏览器标签等仍有用
---

<!-- Logo 和 大标题 "天算AI" 由 _layouts/page.html 文件提供，这里不需要再写 -->

<!-- 主要内容区域 -->
<div> <!-- 不再需要很大的 padding-top -->

    <!-- ↓↓↓ 经过样式化的欢迎内容 ↓↓↓ -->

    <!-- 第一个段落块：浅灰色背景 -->
    <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
        <p style="color: #343a40; margin-bottom: 10px;">大家好！欢迎来到 天算AI 的官方博客。</p>
        <p style="color: #495057;">在这里，我将分享关于人工智能 (AI) 科技的研发进展、前沿资讯的影视化解读，以及个人的学习和思考。</p>
    </div>

    <!-- 目标列表块：略微不同的样式，例如加个边框 -->
    <div style="border: 1px solid #dee2e6; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="color: #0056b3; margin-top: 0;">我的目标是：</h3>
        <ul style="color: #495057; padding-left: 20px;">
            <li>探索 AI 的无限可能</li>
            <li>分享最新的科技动态</li>
            <li>记录原创内容的创作历程</li>
        </ul>
    </div>

    <!-- YouTube 频道块：可以用不同的背景或文字颜色强调 -->
    <div style="background-color: #e9ecef; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
        <h2 style="color: #007bff; margin-top: 0;">关注我的 YouTube 频道</h2>
        <p style="color: #495057;">除了文字内容，我也会在 YouTube 上发布相关的视频内容，包括 AI 资讯的影视化报道、原创音乐和短视频等。</p>
        <p style="margin-top: 15px;">
            欢迎订阅我的频道：<a href="https://www.youtube.com/@jinvjinvbar" target="_blank" style="color: #0056b3; font-weight: bold;">天算AI YouTube 频道</a> <!-- 确认链接正确 -->
        </p>

        <!-- YouTube 视频嵌入 -->
        <div style="text-align: center; margin: 25px 0 15px 0;"> <!-- 居中并添加上下边距 -->
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KtcN0AdthQY?si=li5KLtUoEl220yfZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

    </div>

    <!-- 结束语块：简单样式 -->
    <div style="padding: 10px 0;">
      <p style="color: #6c757d; text-align: center;">期待与大家一同在 AI 的世界里探索和成长！</p>
    </div>

    ---

    <!-- ↓↓↓ 最新博客文章列表 ↓↓↓ -->

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

<!-- 主要内容 div 在这里结束 -->
</div>
