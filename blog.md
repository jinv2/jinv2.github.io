---
layout: default
title: 博客 (Blog)
permalink: /blog/
---

<style>
  /* 博客列表页面的简约样式 */
  .blog-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Lato', sans-serif;
  }
  .blog-header {
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  .blog-list {
    list-style: none;
    padding: 0;
  }
  .blog-item {
    margin-bottom: 35px;
  }
  .blog-title {
    font-size: 1.4em;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .blog-title a {
    color: #333;
    text-decoration: none;
  }
  .blog-title a:hover {
    color: #007bff; /* 链接悬停色 */
  }
  .blog-meta {
    font-size: 0.9em;
    color: #999;
    font-family: monospace;
    display: block;
    margin-bottom: 10px;
  }
  .blog-excerpt {
    color: #555;
    line-height: 1.6;
  }
  
  /* 底部跳转提示 */
  .nexus-link-box {
    margin-top: 50px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    text-align: center;
    border: 1px dashed #ddd;
  }
</style>

<div class="blog-container">

  <div class="blog-header">
    <h1>🖊️ 随笔与思考</h1>
    <p style="color: #666;">技术探索 · 哲学感悟 · 生活记录</p>
  </div>

  <ul class="blog-list">
    {% for post in site.posts %}
      
      <!-- 🔴 核心过滤器：如果文章分类包含 'Product'，则隐藏 -->
      {% unless post.categories contains 'Product' %}
      
        <li class="blog-item">
          <span class="blog-meta">{{ post.date | date: "%Y-%m-%d" }}</span>
          <div class="blog-title">
            <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
          </div>
          <div class="blog-excerpt">
            {{ post.excerpt | strip_html | truncatewords: 30 }}
          </div>
        </li>

      {% endunless %}
      <!-- 🔴 过滤器结束 -->

    {% endfor %}
  </ul>

  <!-- 引导去生态纪事 -->
  <div class="nexus-link-box">
    <p style="margin-bottom: 10px; color: #666; font-size: 0.9em;">Looking for Product Updates?</p>
    <a href="/nexus/" style="color: #d4af37; font-weight: bold; text-decoration: none; border-bottom: 2px solid #d4af37;">
      👉 查看【神思庭·生态纪事】(Product Log)
    </a>
  </div>

</div>
