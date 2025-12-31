---
layout: default
title: 神思庭·生态纪事
permalink: /nexus/
---

<style>
  /* === 神思庭档案馆 · 专属样式 === */
  
  /* 容器修正 */
  .nexus-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Lato', 'Helvetica', sans-serif;
  }

  /* 顶部导航条 */
  .nexus-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #d4af37; /* 金色分割线 */
    padding-bottom: 20px;
    margin-bottom: 40px;
  }

  /* 返回按钮 (黑金风格) */
  .btn-back {
    background: #000;
    color: #d4af37 !important;
    border: 1px solid #d4af37;
    padding: 8px 20px;
    text-decoration: none !important;
    font-weight: bold;
    border-radius: 4px;
    transition: all 0.3s;
    font-size: 0.9em;
    display: inline-block;
  }
  .btn-back:hover {
    background: #d4af37;
    color: #000 !important;
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  }

  /* 标题样式 */
  .nexus-header h1 {
    font-size: 2.2em;
    margin: 0;
    color: #333;
    letter-spacing: 1px;
  }
  .nexus-header p {
    color: #666;
    margin-top: 5px;
    font-style: italic;
  }

  /* 时间轴样式优化 */
  .nexus-timeline {
    position: relative;
    padding-left: 30px;
    border-left: 2px solid #eee;
  }

  .nexus-item {
    margin-bottom: 40px;
    position: relative;
  }

  /* 时间轴节点 (金色) */
  .nexus-item::before {
    content: '';
    position: absolute;
    left: -37px;
    top: 6px;
    width: 12px;
    height: 12px;
    background: #fff;
    border: 3px solid #d4af37;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #fff; /* 制造间隔感 */
  }

  .nexus-date {
    font-family: monospace;
    font-size: 0.9em;
    color: #999;
    margin-bottom: 8px;
    display: block;
  }

  .nexus-card {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #eee;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .nexus-card:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    border-left: 3px solid #d4af37;
  }

  .nexus-item-title {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.4em;
  }
  
  .nexus-item-title a {
    color: #222;
    text-decoration: none;
  }
  .nexus-item-title a:hover {
    color: #d4af37;
  }

  /* 移动端适配 */
  @media (max-width: 600px) {
    .nexus-nav { flex-direction: column; gap: 15px; text-align: center; }
  }
</style>

<div class="nexus-container">

  <!-- 1. 顶部导航区 (解决没有按钮的问题) -->
  <div class="nexus-nav">
    <div class="nexus-header">
      <h1>📜 生态纪事</h1>
      <p>Shensi-Nexus Log</p>
    </div>
    <!-- 返回博客主页按钮 -->
    <a href="/blog/" class="btn-back">← 返回博客列表</a>
  </div>

  <!-- 2. 介绍语 -->
  <p style="margin-bottom: 40px; font-size: 1.1em; line-height: 1.6; color: #444;">
    这是 <strong>神思庭 (Shensi-ST)</strong> 数字主权生态的演进记录。
    <br>在此记录音乐、影视、文学、智能体四大矩阵的每一次核心迭代。
  </p>

  <!-- 3. 时间轴内容 -->
  <div class="nexus-timeline">
    
    {% for post in site.categories.Product %}
      <div class="nexus-item">
        <span class="nexus-date">{{ post.date | date: "%Y-%m-%d" }}</span>
        <div class="nexus-card">
          <h3 class="nexus-item-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <p style="margin-bottom: 15px; color: #666;">
            {{ post.excerpt | strip_html | truncatewords: 40 }}
          </p>
          <a href="{{ post.url | relative_url }}" style="color: #d4af37; font-weight: bold; font-size: 0.9em; text-decoration: none;">
            阅读全文 &rarr;
          </a>
        </div>
      </div>
    {% endfor %}

    <!-- 历史起点 -->
    <div class="nexus-item">
      <span class="nexus-date">2025-12-01</span>
      <div class="nexus-card" style="opacity: 0.6;">
        <h3 class="nexus-item-title">神思庭计划启动</h3>
        <p>数字主权构想诞生，开始构建 PWA 矩阵。</p>
      </div>
    </div>

  </div>

  <!-- 4. 底部返回 -->
  <div style="margin-top: 50px; text-align: center;">
    <a href="/" class="btn-back">回到首页</a>
  </div>

</div>
