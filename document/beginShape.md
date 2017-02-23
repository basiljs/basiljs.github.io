---
layout: entry
title: beginShape
codetitle: b.beginShape(shapeMode)
description: "Using the beginShape() and endShape() functions allow creating more complex forms.\nbeginShape() begins recording vertices for a shape and endShape() stops recording.\nAfter calling the beginShape() function, a series of vertex() commands must follow.\nTo stop drawing the shape, call endShape(). The value of the parameter tells whether the paths to\ncreate from the provided vertices have to be closed or not (to connect the beginning and the end)."
category: Document
subcategory: Primitives
returns: null
parameters:
    - {name: shapeMode, description: 'Set b.CLOSE if the new Path should be auto-closed.', optional: false, type: []}
kind: function

---
