---
layout: entry
title: beginShape
codetitle: beginShape(shapeMode)
description: "Using the beginShape() and endShape() functions allows to create more complex forms.\nbeginShape() begins recording vertices for a shape and endShape() stops recording.\nAfter calling the beginShape() function, a series of vertex() commands must follow.\nTo stop drawing the shape, call endShape(). The shapeMode parameter allows to close the shape\n(to connect the beginning and the end)."
category: Document
subcategory: Primitives
returns: null
parameters:
    - {name: shapeMode, description: 'Set to CLOSE if the new Path should be auto-closed.', optional: false, type: [String]}
kind: function
todo: null
examples: []

---
