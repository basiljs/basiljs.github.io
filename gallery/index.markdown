---
author: admin
layout: default
originallink: http://basiljs.ch/gallery/
title: Gallery
---

{% for page in site.pages %}
  {% if page.type == 'project' %}
    - {{page.title}}
  {% endif %}
{% endfor %}
