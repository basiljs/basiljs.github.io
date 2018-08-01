---
author: admin
layout: default
originallink: http://basiljs.ch/gallery/
title: gallery
order: 6
---

{% for page in site.pages %}
  {% if page.layout == 'gallery' %}
- [{{page.title}}]({{page.url}})
  {% endif %}
{% endfor %}
