---
layout: page
title: 神思庭·纪事 (Nexus Log)
permalink: /nexus/
---

<style>
  .nexus-timeline {
    border-left: 2px solid #d4af37;
    padding-left: 20px;
    margin-top: 20px;
    margin-left: 10px;
  }
  .nexus-item {
    margin-bottom: 30px;
    position: relative;
  }
  .nexus-item::before {
    content: '';
    position: absolute;
    left: -26px;
    top: 6px;
    width: 10px;
    height: 10px;
    background: #000;
    border: 2px solid #d4af37;
    border-radius: 50%;
    z-index: 1;
  }
  .nexus-date {
    font-size: 0.85em;
    color: #888;
    font-family: monospace;
    margin-bottom: 5px;
  }
  .nexus-title {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
    line-height: 1.4;
  }
  .nexus-title a {
    color: #333;
    text-decoration: none;
    transition: 0.3s;
  }
  .nexus-title a:hover {
    color: #d4af37;
  }
  .nexus-excerpt {
    font-size: 0.95em;
    color: #555;
    margin-top: 5px;
    line-height: 1.6;
  }
  @media (prefers-color-scheme: dark) {
    .nexus-title a { color: #e5e5e5; }
    .nexus-excerpt { color: #aaa; }
  }
</style>

<div class="nexus-intro" style="margin-bottom: 40px; text-align: center;">
  <h1 style="margin-bottom: 10px;">📜 生态纪事</h1>
  <p style="color: #666;">Shensi-Nexus 数字主权生态演进记录</p>
  <hr style="border-top: 1px solid #eee; margin-top: 20px;">
</div>

<div class="nexus-timeline">
  {% for post in site.categories.Product %}
    <div class="nexus-item">
      <div class="nexus-date">{{ post.date | date: "%Y-%m-%d" }}</div>
      <h3 class="nexus-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      <div class="nexus-excerpt">
        {{ post.excerpt | strip_html | truncatewords: 30 }}
      </div>
    </div>
  {% endfor %}
</div>
