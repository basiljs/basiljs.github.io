---
layout: entry
title: arc
codetitle: 'arc(cx, cy, w, h, startAngle, endAngle, [mode])'
description: 'The `arc()` function draws an arc. Arcs are drawn along the outer edge of an ellipse defined by the `x`, `y`, `width` and `height` parameters. The origin or the arc''s ellipse may be changed with the `ellipseMode()` function. The start and stop parameters specify the angles at which to draw the arc.'
category: Shape
subcategory: Primitives
returns:
    name: null
    description: 'The resulting GraphicLine or Polygon object (in InDesign Scripting terms the corresponding type is GraphicLine or Polygon, not Arc).'
    type: [GraphicLine, Polygon]
parameters:
    - {name: cx, description: 'X-coordinate of the arc''s center.', optional: false, type: [Number]}
    - {name: cy, description: 'Y-coordinate of the arc''s center.', optional: false, type: [Number]}
    - {name: w, description: 'Width of the arc''s ellipse.', optional: false, type: [Number]}
    - {name: h, description: 'Height of the arc''s ellipse.', optional: false, type: [Number]}
    - {name: startAngle, description: 'Starting angle of the arc in radians.', optional: false, type: [Number]}
    - {name: endAngle, description: 'Ending angle of the arc in radians.', optional: false, type: [Number]}
    - {name: mode, description: 'Mode to define the rendering technique of the arc: `OPEN` (default), `CHORD`, or `PIE`.', optional: true, type: [String]}
kind: function
todo: null
examples: []

---
