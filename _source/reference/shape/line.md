---
layout: entry
title: line
codetitle: 'line(x1, y1, x2, y2)'
description: 'Draws a line (a direct path between two points) to the page.'
category: Shape
subcategory: Primitives
returns:
    name: null
    description: 'New GraphicLine.'
    type: [GraphicLine]
parameters:
    - {name: x1, description: 'X-coordinate of Point 1.', optional: false, type: [Number]}
    - {name: y1, description: 'Y-coordinate of Point 1.', optional: false, type: [Number]}
    - {name: x2, description: 'X-coordinate of Point 2.', optional: false, type: [Number]}
    - {name: y2, description: 'Y-coordinate of Point 2.', optional: false, type: [Number]}
kind: function
todo: null
examples:
    - {description: null, code: "var vec1 = new Vector(x1, y1);\nvar vec2 = new Vector(x2, y2);\nline( vec1, vec2 );"}

---
