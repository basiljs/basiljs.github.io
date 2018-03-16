---
layout: default
title: Basil.js
---

<ul>
  {% for page in site.pages %}
  {% if page.layout != 'entry' %}
  {%if page.layout == 'default' or page.layout == 'reference'  %}
  <li><a href="{{page.url}}">{{page.title}}</a></li>
    {%endif%}
  {% endif %}

  {% endfor %}
</ul>