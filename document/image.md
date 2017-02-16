---
layout: entry
title: image()
description: "Adds an image to the document. If the image argument is given as a string the image file must be in the document's\ndata directory which is in the same directory where the document is saved in. The image argument can also be a File\ninstance which can be placed even before the document was saved.\nThe second argument can either be the x position of the frame to create or an instance of a rectangle,\noval or polygon to place the image in. If an x position is given, a y position must be given, too.\nIf x and y positions are given and width and height are not given, the frame's size gets set to the original image size."
category: Document
subcategory: Image
returns: 'The item instance the image was placed in.'
parameters:
    - {name: img, description: 'The image file name in the document''s data directory or a File instance'}
    - {name: x, description: 'The x position on the current page or the item instance to place the image in'}
    - {name: y, description: 'The y position on the current page. Ignored if x is not a number.'}
    - {name: w, description: 'The width of the rectangle to add the image to. Ignored if x is not a number.'}
    - {name: h, description: 'The height of the rectangle to add the image to. Ignored if x is not a number.'}

---
Adds an image to the document. If the image argument is given as a string the image file must be in the document's
data directory which is in the same directory where the document is saved in. The image argument can also be a File
instance which can be placed even before the document was saved.
The second argument can either be the x position of the frame to create or an instance of a rectangle,
oval or polygon to place the image in. If an x position is given, a y position must be given, too.
If x and y positions are given and width and height are not given, the frame's size gets set to the original image size.