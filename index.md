---

(这里是您从 README 粘贴过来的内容，像 # 天算AI ...)
# 天算AI

AI科技博主 | AI科技研发 | 科技前沿最新AI资讯影视化报道

---

## 天算AI数字资产：

*   5万字原创诗文
*   7千分钟原创交响乐
*   9千部原创AI短视频
*   16项原创AI科技产品
*   7个天算AI语言大模型

---
<iframe width="560" height="315" src="https://www.youtube.com/embed/SLv6RcKpPWM?si=m8IxR8b4vTZKTXEn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
天算AI（Natural Algorithm）
---

## 最新博客文章

<ul>
  {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}
    </li>
  {% endfor %}
</ul>

{% if site.posts.size > 5 %}
  <p><a href="#">查看所有文章</a> <!-- 这里将来可以链接到专门的博客页面 --> </p>
{% endif %}
