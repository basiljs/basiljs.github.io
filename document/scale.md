---
layout: entry
title: scale
codetitle: 'b.scale(scaleX, scaleY)'
description: "Increasing and decreasing the size of an object by expanding and contracting vertices. Scale values are specified as decimal percentages. The function call <code>scale(2.0)</code> increases the dimension of a shape by 200%. Objects always scale from their relative origin to the coordinate system. Transformations apply to everything that happens after and subsequent calls to the function multiply the effect. For example, calling <code>scale(2.0)</code> and then <code>scale(1.5)</code> is the same as <code>scale(3.0)</code>. If <code>scale()</code> is called within <code>draw()</code>, the transformation is reset when the loop begins again. This function can be further controlled by <code>pushMatrix()</code> and <code>popMatrix()</code>.\nIf only one parameter is given, it is applied on X and Y axis."
category: Document
subcategory: Transformation
returns: null
parameters:
    - {name: scaleX, description: 'The amount to scale the X axis.', optional: false, type: [Number]}
    - {name: scaleY, description: 'The amount to scale the Y axis.', optional: false, type: [Number]}
kind: function
todo: null
examples: []

---
