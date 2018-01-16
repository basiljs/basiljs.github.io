---
layout: entry
title: rotate
codetitle: b.rotate(angle)
description: 'Rotates an object the amount specified by the angle parameter. Angles should be specified in radians (values from 0 to <code>PI</code>*2) or converted to radians with the <code>radians()</code> function. Objects are always rotated around their relative position to the origin and positive numbers rotate objects in a clockwise direction with 0 radians or degrees being up and <code>HALF_PI</code> being to the right etc. Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. For example, calling <code>rotate(PI/2)</code> and then <code>rotate(PI/2)</code> is the same as <code>rotate(PI)</code>. If <code>rotate()</code> is called within the <code>draw()</code>, the transformation is reset when the loop begins again. Technically, <code>rotate()</code> multiplies the current transformation matrix by a rotation matrix. This function can be further controlled by the <code>pushMatrix()</code> and <code>popMatrix()</code>.'
category: Document
subcategory: Transformation
returns: null
parameters:
    - {name: angle, description: 'The angle specified in radians', optional: false, type: [Number]}
kind: function
todo: null
examples: []

---
