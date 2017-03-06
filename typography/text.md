---
layout: entry
title: text
codetitle: 'b.text(txt, x, y, w, h)'
description: "Creates a text frame on the current layer on the current page in the current document.\nThe text frame gets created in the position specified by the x and y parameters.\nThe default document font will be used unless a font is set with the textFont() function.\nThe default document font size will be used unless a font size is set with the textSize() function.\nChange the color of the text with the fill() function.\nThe text displays in relation to the textAlign() and textYAlign() functions.\nThe width and height parameters define a rectangular area."
category: Typography
subcategory: null
returns:
    name: null
    description: 'The created text frame instance'
    type: [TextFrame]
parameters:
    - {name: txt, description: 'The text content to set in the text frame.', optional: false, type: [String]}
    - {name: x, description: 'x-coordinate of text frame', optional: false, type: [Number]}
    - {name: y, description: 'y-coordinate of text frame', optional: false, type: [Number]}
    - {name: w, description: 'width of text frame', optional: false, type: [Number]}
    - {name: h, description: 'height of text frame', optional: false, type: [Number]}
kind: function
todo: null
examples: []

---
