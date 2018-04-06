---
layout: default
title: Basil.js
---

<div>
<ul>
  {% for page in site.pages %}
  {% if page.layout != 'entry' %}
  {%if page.layout == 'default' or page.layout == 'reference'  %}
  <li><a href="{{page.url}}">{{page.title}}</a></li>
    {%endif%}
  {% endif %}

  {% endfor %}
</ul>
</div>

## Have you ever wanted to ...

* export 10,000 mass-customized copies of your InDesign document?  
* use spatial-tiling algorithms to create your layouts?  
* pass real-time data from any source directly into your InDesign project?  
* create color palettes based on algorithms?  
* or simply reconsider what print can be?   


## basil.js is ...  


* making scripting in InDesign available to designers and artists.
* in the spirit of Processing and easy to learn.
* based on JavaScript and extends the existing API of InDesign.
* a project by The Basel School of Design in Switzerland.
* has been released as open source in February 2013!