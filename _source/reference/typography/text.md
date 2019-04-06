---
layout: entry
title: text
codetitle: 'text(txt, x, y, w, h)'
description: 'Creates a text frame on the current layer on the current page in the current document. The text frame gets created in the position specified by the `x` and `y` parameters. The default document font will be used unless a font is set with the `textFont()` function. The default document font size will be used unless a font size is set with the `textSize()` function. Change the color of the text with the `fill()` function. The text displays in relation to the `textAlign()` and `textYAlign()` functions. The `w` and `h` parameters define a rectangular area. If a rectangle, an oval, a polygon or a graphic line are used instead of an x position, the given text will be placed in/on this shape.'
category: Typography
subcategory: null
returns:
    name: null
    description: 'The created text frame instance or the text path'
    type: [TextFrame, TextPath]
parameters:
    - {name: txt, description: 'The text content to set in the text frame.', optional: false, type: [String]}
    - {name: x, description: 'x-coordinate of text frame or item to place the text in or graphic line to place the text onto as a text path.', optional: false, type: [Number, Rectangle, Oval, Polygon, GraphicLine, TextFrame]}
    - {name: y, description: 'y-coordinate of text frame', optional: false, type: [Number]}
    - {name: w, description: 'width of text frame', optional: false, type: [Number]}
    - {name: h, description: 'height of text frame', optional: false, type: [Number]}
kind: function
todo: null
examples:
    - {description: 'Create a text frame with a Lorem ipsum text.', code: 'text(LOREM, 50, 50, 100, 200);'}
    - {description: 'Place a Lorem ipsum text inside an oval shape.', code: "var ell = ellipse(50, 50, 100, 100);\ntext(LOREM, ell);"}
    - {description: 'Place a Lorem ipsum text as a text path onto a line.', code: "var l = line(50, 50, 200, 80);\ntext(LOREM, l);"}

---
