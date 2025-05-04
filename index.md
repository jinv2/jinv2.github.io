---
layout: default # 确保主页使用我们统一的 default 布局
title: "天算AI - 首页" # 主页标题 (显示在浏览器标签栏)
---

<!-- V V V 融合后的完整内容 (居中标题, 移除下方重复标识) V V V -->

<!-- 将原来的 # 天算AI... 改为居中的 H2 -->
<h2 style="text-align: center;">天算AI (Natural Algorithm)</h2>

<!-- 欢迎/介绍文字 -->
✨ AI科技博主 | AI科技研发 | 前沿资讯影视化报道 ✨

欢迎来到 **天算AI (Natural Algorithm)** 博客！

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
<iframe width="560" height="315" src="https://www.youtube.com/embed/iNLfbru91AA?si=BbGajTUjoRnRrFz9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!-- 天算AI (Natural Algorithm) <--- 确保视频下方的这行已被删除 -->

---

<!-- V V V 新增的博客文章列表部分 V V V -->
## 最新博文

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span> - {{ post.date | date: "%Y-%m-%d" }}</span>
      <!-- 这里已经删除了多余的注释 -->
    </li>
  {% endfor %}
</ul>
<!-- ^ ^ ^ 新增的博客文章列表部分结束 ^ ^ ^ -->
