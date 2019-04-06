---
layout: entry
title: endShape
codetitle: endShape(shapeMode)
description: 'The `endShape()` function is the companion to `beginShape()` and may only be called after `beginShape()`. It creates and returns a path of the previously called `vertex()` points. The `shapeMode` parameter allows to close the shape (to connect the beginning and the end).'
category: Shape
subcategory: Vertex
returns:
    name: null
    description: 'The GraphicLine or Polygon object that was created.'
    type: [GraphicLine, Polygon]
parameters:
    - {name: shapeMode, description: 'Set to `CLOSE` if the new path should be auto-closed.', optional: false, type: [String]}
kind: function
todo: null
examples: []

---
