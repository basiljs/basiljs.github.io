---
layout: entry
title: imageMode()
description: "Modifies the location from which images draw. The default mode is imageMode(CORNER), which specifies the location to be the upper left corner and uses the fourth and fifth parameters of image() to set the image's width and height. The syntax imageMode(CORNERS) uses the second and third parameters of image() to set the location of one corner of the image and uses the fourth and fifth parameters to set the opposite corner. Use imageMode(CENTER) to draw images centered at the given x and y position.\nIf no parameter is passed the currently set mode is returned as String."
category: Document
subcategory: Image
returns: 'The current mode'
parameters:
    - {name: mode, description: 'Either b.CORNER, b.CORNERS, or b.CENTER'}

---
Modifies the location from which images draw. The default mode is imageMode(CORNER), which specifies the location to be the upper left corner and uses the fourth and fifth parameters of image() to set the image's width and height. The syntax imageMode(CORNERS) uses the second and third parameters of image() to set the location of one corner of the image and uses the fourth and fifth parameters to set the opposite corner. Use imageMode(CENTER) to draw images centered at the given x and y position.
If no parameter is passed the currently set mode is returned as String.