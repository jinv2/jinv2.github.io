---
layout: default # 确保主页使用我们统一的 default 布局
title: "天算AI - 首页" # 主页标题 (显示在浏览器标签栏)
---

<!-- V V V 融合后的完整内容 V V V -->

<!-- 欢迎/介绍文字 -->
# 天算AI (Tiansuan AI)

✨ AI科技博主 | AI科技研发 | 前沿资讯影视化报道 ✨

欢迎来到 **天算AI (Tiansuan AI)** 博客！

我是天算AI，一名专注于人工智能领域的科技博主。本博客致力于分享 AI 科技研发的探索、实践与思考。我相信技术与艺术的结合能带来更深刻的理解和启发，探索“自然算法 (Natural Algorithm)”的奥秘。

---

<!-- 数字资产列表 -->
## 天算AI数字资产：

*   5万字原创诗文 (50,000+ Characters of Original Poetry/Prose)
*   🎵 7千分钟 原创交响乐 (7,000+ Minutes of Original Symphonic Music)
*   🎬 9千部 原创AI短视频 (9,000+ Original AI Short Videos)
*   💡 16项 原创AI科技产品 (16 Original AI Tech Products Developed)
*   🧠 7个 天算AI大语言模型 (7 Custom Tiansuan AI Large Language Models Trained/Developed)

---

<!-- 嵌入的视频 -->
<!-- V V V V V 请仔细检查下面这行 iframe 代码是否完整且正确 V V V V V -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/SLv6RckpPWM?si=m8lxR8b4VTZKTXEn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- ^ ^ ^ ^ ^ 检查 iframe 代码结束 ^ ^ ^ ^ ^ -->

天算AI (Natural Algorithm)

---

<!-- 最新博客文章列表 -->
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
<!-- ^ ^ ^ 融合内容结束 ^ ^ ^ -->
