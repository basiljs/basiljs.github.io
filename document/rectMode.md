---
layout: entry
title: rectMode
codetitle: b.rectMode(mode)
description: "Modifies the location from which rectangles draw. The default mode is\nrectMode(CORNER), which specifies the location to be the upper left\ncorner of the shape and uses the third and fourth parameters of rect()\nto specify the width and height. The syntax rectMode(CORNERS) uses the\nfirst and second parameters of rect() to set the location of one corner\nand uses the third and fourth parameters to set the opposite corner.\nThe syntax rectMode(CENTER) draws the image from its center point and\nuses the third and forth parameters of rect() to specify the image's\nwidth and height. The syntax rectMode(RADIUS) draws the image from its\ncenter point and uses the third and forth parameters of rect() to specify\nhalf of the image's width and height. The parameter must be written in\n\"ALL CAPS\"."
category: Document
subcategory: Attributes
returns: null
parameters:
    - {name: mode, description: 'Either b.CORNER, b.CORNERS, b.CENTER, or b.RADIUS', optional: false, type: [String]}
kind: function
todo: null
examples: []

---
