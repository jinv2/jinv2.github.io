---
layout: default  # 使用主题的默认布局
---

# 欢迎来到我的 AI 探索者博客

这里记录了我在人工智能，特别是大型语言模型领域的学习、研究和思考。

## 近期文章
{% for post in site.posts limit:5 %}
  * [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}

[查看所有文章](/archive.html) <!-- 您可以稍后创建一个文章存档页 -->
