---
layout: entry
title: rotate
codetitle: b.rotate(angle)
description: 'Rotates an object the amount specified by the angle parameter. Angles should be specified in radians (values from 0 to PI*2) or converted to radians with the radians() function. Objects are always rotated around their relative position to the origin and positive numbers rotate objects in a clockwise direction with 0 radians or degrees being up and HALF_PI being to the right etc. Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. For example, calling rotate(PI/2) and then rotate(PI/2) is the same as rotate(PI). If rotate() is called within the draw(), the transformation is reset when the loop begins again. Technically, rotate() multiplies the current transformation matrix by a rotation matrix. This function can be further controlled by the pushMatrix() and popMatrix().'
category: Document
subcategory: Transformation
returns: null
parameters:
    - {name: angle, description: 'The angle specified in radians', optional: false, type: [Number]}
kind: function

---
