---
author: admin
layout: default
title: Gallery
order: 6
---

{% for page in site.pages %}
  {% if page.layout == 'gallery-item' %}
- [{{page.title}}]({{page.url}})
  {% endif %}
{% endfor %}
