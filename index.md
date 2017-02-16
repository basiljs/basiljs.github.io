---
layout: default
---

<script type="text/javascript">
var searchindex = {{site.data.data | jsonify}};
</script>

![](./assets/images/out.gif)  

{% assign sorted = site.data.data | sort:'category' %}

* TOC
{:toc}

{% for entry in site.data.data %}
## {{entry.name}}  
{% if entry.description != null %}
{{entry.description}}  
{% endif %}

{% if entry.category != null %}
### {{entry.category}}  
{% endif %}

{% endfor %}