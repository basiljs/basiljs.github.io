---
layout: entry
title: vertex
codetitle: 'vertex(x, y, [xLeftHandle], [yLeftHandle], [xRightHandle], [yRightHandle])'
description: "Shapes are constructed by connecting a series of vertices. `vertex()` is used to specify the vertex coordinates of lines and polygons. It is used exclusively between the `beginShape()` and `endShape()` functions.\n\nUse either `vertex(x, y)` for drawing straight corners or `vertex(x, y, xLeftHandle, yLeftHandle, xRightHandle, yRightHandle)` for drawing bezier shapes. You can also mix the two approaches."
category: Shape
subcategory: Vertex
returns: null
parameters:
    - {name: x, description: 'X-coordinate of the vertex.', optional: false, type: [Number]}
    - {name: y, description: 'Y-coordinate of the vertex.', optional: false, type: [Number]}
    - {name: xLeftHandle, description: 'X-coordinate of the left-direction point.', optional: true, type: [Number]}
    - {name: yLeftHandle, description: 'Y-coordinate of the left-direction point.', optional: true, type: [Number]}
    - {name: xRightHandle, description: 'X-coordinate of the right-direction point.', optional: true, type: [Number]}
    - {name: yRightHandle, description: 'Y-coordinate of the right-direction point.', optional: true, type: [Number]}
kind: function
todo: null
examples: []

---
