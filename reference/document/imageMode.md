---
layout: entry
title: imageMode
codetitle: 'b.imageMode([mode])'
description: "Modifies the location from which images draw. The default mode is imageMode(CORNER), which specifies the location to be the upper left corner and uses the fourth and fifth parameters of image() to set the image's width and height. The syntax imageMode(CORNERS) uses the second and third parameters of image() to set the location of one corner of the image and uses the fourth and fifth parameters to set the opposite corner. Use imageMode(CENTER) to draw images centered at the given x and y position.\nIf no parameter is passed the currently set mode is returned as String."
category: Document
subcategory: Image
returns:
    name: null
    description: 'The current mode.'
    type: [String]
parameters:
    - {name: mode, description: 'Either b.CORNER, b.CORNERS, or b.CENTER.', optional: true, type: [String]}
kind: function
todo: null
examples: []

---
