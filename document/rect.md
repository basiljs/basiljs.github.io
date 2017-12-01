---
layout: entry
title: rect
codetitle: 'b.rect(x, y, w, h, [tl], [tr], [br], [bl])'
description: "Draws a rectangle on the page.\nBy default, the first two parameters set the location of the upper-left corner, the third sets the width, and the fourth sets the height. The way these parameters are interpreted, however, may be changed with the b.rectMode() function.\nThe fifth, sixth, seventh and eighth parameters, if specified, determine corner radius for the top-right, top-left, lower-right and lower-left corners, respectively. If only a fifth parameter is provided, all corners will be set to this radius."
category: Document
subcategory: Primitives
returns:
    name: null
    description: 'The rectangle that was created.'
    type: [Rectangle]
parameters:
    - {name: x, description: 'X-coordinate of the rectangle.', optional: false, type: [Number]}
    - {name: y, description: 'Y-coordinate of the rectangle.', optional: false, type: [Number]}
    - {name: w, description: 'Width of the rectangle.', optional: false, type: [Number]}
    - {name: h, description: 'Height of the rectangle.', optional: false, type: [Number]}
    - {name: tl, description: 'Radius of top left corner or radius of all 4 corners (optional).', optional: true, type: [Number]}
    - {name: tr, description: 'Radius of top right corner (optional).', optional: true, type: [Number]}
    - {name: br, description: 'Radius of bottom right corner (optional).', optional: true, type: [Number]}
    - {name: bl, description: 'Radius of bottom left corner (optional).', optional: true, type: [Number]}
kind: function
todo: null
examples: []

---
