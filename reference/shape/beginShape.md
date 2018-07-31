---
layout: entry
title: beginShape
codetitle: beginShape(shapeMode)
description: 'Using the `beginShape()` and `endShape()` functions allows to create more complex forms. `beginShape()` begins recording vertices for a shape and `endShape()` stops recording. After calling the `beginShape()` function, a series of `vertex()` commands must follow. To stop drawing the shape, call `endShape()`. The shapeMode parameter allows to close the shape (to connect the beginning and the end).'
category: Shape
subcategory: Vertex
returns: null
parameters:
    - {name: shapeMode, description: 'Set to `CLOSE` if the new path should be auto-closed.', optional: false, type: [String]}
kind: function
todo: null
examples: []

---
