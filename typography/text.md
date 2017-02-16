---
layout: entry
title: text()
description: "Creates a text frame on the current layer on the current page in the current document.\nThe text frame gets created in the position specified by the x and y parameters.\nThe default document font will be used unless a font is set with the textFont() function.\nThe default document font size will be used unless a font size is set with the textSize() function.\nChange the color of the text with the fill() function.\nThe text displays in relation to the textAlign() and textYAlign() functions.\nThe width and height parameters define a rectangular area."
category: Typography
subcategory: null
returns: 'The created text frame instance'
parameters:
    - {name: txt, description: 'The text content to set in the text frame.'}
    - {name: x, description: 'x-coordinate of text frame'}
    - {name: y, description: 'y-coordinate of text frame'}
    - {name: w, description: 'width of text frame'}
    - {name: h, description: 'height of text frame'}

---
Creates a text frame on the current layer on the current page in the current document.
The text frame gets created in the position specified by the x and y parameters.
The default document font will be used unless a font is set with the textFont() function.
The default document font size will be used unless a font size is set with the textSize() function.
Change the color of the text with the fill() function.
The text displays in relation to the textAlign() and textYAlign() functions.
The width and height parameters define a rectangular area.