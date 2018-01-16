---
layout: entry
title: translate
codetitle: 'b.translate(tx, ty)'
description: 'Specifies an amount to displace objects within the page. The x parameter specifies left/right translation, the y parameter specifies up/down translation. Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. For example, calling <code>translate(50, 0)</code> and then <code>translate(20, 0)</code> is the same as <code>translate(70, 0)</code>. This function can be further controlled by the <code>pushMatrix()</code> and <code>popMatrix()</code>.'
category: Document
subcategory: Transformation
returns: null
parameters:
    - {name: tx, description: 'The amount of offset on the X axis.', optional: false, type: [Number]}
    - {name: ty, description: 'The amount of offset on the Y axis.', optional: false, type: [Number]}
kind: function
todo: null
examples: []

---
