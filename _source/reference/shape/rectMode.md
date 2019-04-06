---
layout: entry
title: rectMode
codetitle: rectMode(mode)
description: 'Modifies the location from which rectangles or text frames draw. The default mode is `rectMode(CORNER)`, which specifies the location to be the upper left corner of the shape and uses the `w` and `h` parameters to specify the width and height. The syntax `rectMode(CORNERS)` uses the `x` and `y` parameters of `rect()` or `text()` to set the location of one corner and uses the `w` and `h` parameters to set the opposite corner. The syntax `rectMode(CENTER)` draws the shape from its center point and uses the `w` and `h` parameters to specify the shape''s width and height. The syntax `rectMode(RADIUS)` draws the shape from its center point and uses the `w` and `h` parameters to specify half of the shape''s width and height.'
category: Shape
subcategory: Attributes
returns: null
parameters:
    - {name: mode, description: 'The rectMode to switch to: either `CORNER`, `CORNERS`, `CENTER`, or `RADIUS`.', optional: false, type: [String]}
kind: function
todo: null
examples: []

---
