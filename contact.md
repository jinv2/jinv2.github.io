---
layout: default # <--- 确保使用 default 布局
title: 联系我们 # <--- 页面的标题
permalink: /contact/ # <--- 页面的固定链接 (确保斜杠)
---

<!-- V V V 以下是联系页面内容 V V V -->

# 联系我们

如果您有任何问题、建议或合作意向，欢迎通过以下方式与我们联系：

**电子邮箱:** ssk937520@gmail.com

<!-- === 开始：显示名片预览图和下载链接 === -->

<hr style="margin-top: 40px; margin-bottom: 40px;"> <!-- 添加一条分隔线 -->

<div style="text-align: center; margin: 30px 0;">
  <h2 style="margin-bottom: 20px;">天算AI名片预览</h2> <!-- 添加小标题 -->
  <!-- 这里仍然显示名片的预览图，路径需要根据你的实际情况调整 -->
  <!-- 假设你有一个预览图放在 assets/images/ 下 -->
  <img
    src="/tsai/assets/images/tian_suan_logo.jpg" <!-- 或者用 circuit_background.jpg 或其他名片预览图 -->
    alt="天算AI 名片预览"
    style="max-width: 320px; height: auto; border-radius: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"
  >
  <p style="font-size: 0.9em; color: #555; margin-top: 10px;">(名片预览图)</p>
</div>

<p style="text-align: center; margin-top: 15px; margin-bottom: 30px;">
  <!-- 修改为下载包含所有文件的 ZIP 压缩包 -->
  <a
    href="/tsai/contact/天算AI数字名片.zip"  <!-- 确保路径正确 -->
    download="天算AI数字名片.zip"         <!-- download 属性建议的文件名 -->
    style="display: inline-block; padding: 12px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;"
  >
    下载交互式名片 (ZIP 压缩包) <!-- 修改链接文字以明确说明 -->
  </a>
</p>

<!-- === 结束：显示名片预览图和下载链接 === -->

<!-- 页面底部的导航链接 (可选) -->
<!--
<hr>
<p>
  <a href="{{ '/' | relative_url }}">首页</a> |
  <a href="{{ '/blog/' | relative_url }}">博客</a> |
  <a href="{{ '/about/' | relative_url }}">关于</a> |
  <a href="{{ '/contact/' | relative_url }}">联系我们</a>
</p>
-->
