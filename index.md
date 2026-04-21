---
layout: default
title: Home
---

# Welcome to my Security Blog
Cloud and AI Security Researcher :)

## My Posts
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a> - {{ post.date | date_to_string }}
    </li>
  {% endfor %}
</ul>
