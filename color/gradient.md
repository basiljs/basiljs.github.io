---
layout: entry
title: gradient
codetitle: 'b.gradient(c1, c2, [name])'
description: "Creates a new gradient and adds it to the document, or gets a gradient by name from the document.\nIf two colors are given as the first two parameters, a gradient is created that blends between these two colors. If an array of colors is used\nas the first parameter, a gradient with the contained colors will be created. The colors will be distributed evenly. If additionally to this array\na second array of gradient stop positions is given, the colors will be positioned at the given gradient stops. Possible gradient stop positions\nrange from 0 to 100. All parameter options allow for an additional name parameter at the end to name the new gradient.\nIf a string is used as the only parameter, the gradient with that name will be returned, if it exists in the document."
category: Color
subcategory: null
returns:
    name: null
    description: 'Found or new gradient'
    type: [Gradient]
parameters:
    - {name: c1, description: 'First color of the gradient. Alternatively: Array of colors/gradients or name of gradient to get.', optional: false, type: [Color, Array, String]}
    - {name: c2, description: 'Second color of the gradient. Alternatively: Array of gradient stop positions (if first parameter is an array of colors).', optional: false, type: [Color, Array, String]}
    - {name: name, description: 'Optional name of the gradient.', optional: true, type: [String]}
kind: function
todo: null
examples: []

---
