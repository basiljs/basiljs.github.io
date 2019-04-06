---
layout: entry
title: ellipseMode
codetitle: ellipseMode(mode)
description: 'The origin of new ellipses is modified by the `ellipseMode()` function. The default configuration is `ellipseMode(CENTER)`, which specifies the location of the ellipse as the center of the shape. The `RADIUS` mode is the same, but the `w` and `h` parameters to `ellipse()` specify the radius of the ellipse, rather than the diameter. The `CORNER` mode draws the shape from the upper-left corner of its bounding box. The `CORNERS` mode uses the four parameters to `ellipse()` to set two opposing corners of the ellipse''s bounding box.'
category: Shape
subcategory: Attributes
returns: null
parameters:
    - {name: mode, description: 'The ellipse mode to switch to: either `CENTER`, `RADIUS`, `CORNER`, or `CORNERS`.', optional: false, type: [String]}
kind: function
todo: null
examples: []

---
