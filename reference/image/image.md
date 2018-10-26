---
layout: entry
title: image
codetitle: 'image(img, x, [y], [w], [h])'
description: 'Adds an image to the document. If the image argument is given as a string the image file must be in the document''s data directory which is in the same directory where the document is saved in. The image argument can also be a File instance which can be placed even before the document was saved. The second argument can either be the `x` position of the frame to create or an instance of a rectangle, oval or polygon to place the image in. If an `x` position is given, a `y` position must be given, too. If `x` and `y` positions are given and width and height are not given, the frame''s size gets set to the original image size.'
category: Image
subcategory: null
returns:
    name: null
    description: 'The item instance the image was placed in.'
    type: [Rectangle, Oval, Polygon]
parameters:
    - {name: img, description: 'The image file name in the document''s data directory or a File instance.', optional: false, type: [String, File]}
    - {name: x, description: 'The `x` position on the current page or the item instance to place the image in.', optional: false, type: [Number, Rectangle, Oval, Polygon, TextFrame]}
    - {name: y, description: 'The `y` position on the current page. Ignored if `x` is not a number.', optional: true, type: [Number]}
    - {name: w, description: 'The width of the rectangle to add the image to. Ignored if `x` is not a number.', optional: true, type: [Number]}
    - {name: h, description: 'The height of the rectangle to add the image to. Ignored if `x` is not a number.', optional: true, type: [Number]}
kind: function
todo: null
examples: []

---
