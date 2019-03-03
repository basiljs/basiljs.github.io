---
layout: entry
title: property
codetitle: 'property(obj, prop, [value])'
description: 'Sets a property of an object or of any other given data item to the specified value. Alternatively an object of key value pairs can be used as the second argument to set several properties to specified values at once. To retrieve a list of available properties for the different data types, the inspect() method can be used.'
category: Environment
subcategory: null
returns:
    name: null
    description: 'The object or other data item with the newly set property.'
    type: [Any]
parameters:
    - {name: obj, description: 'An object or any other data item whose properties to change.', optional: false, type: [Any]}
    - {name: prop, description: 'A string describing an object''s property or alternatively an object containing key value pairs.', optional: false, type: [String, Object]}
    - {name: value, description: 'A value of the appropriate type to set the object''s property to.', optional: true, type: [Any]}
kind: function
todo: null
examples:
    - {description: 'Sets name and fill color of an ellipse', code: "var ell = ellipse(100, 100, 50, 50);\nproperty(ell, \"name\", \"Red Circle\");\nproperty(ell, \"fillColor\", color(255, 0, 0));"}
    - {description: 'Sets name and fill color of a rectangle and locks it, using an object with key value pairs', code: "var blueSquare = rect(100, 100, 50, 50);\nvar squareProps = {\n  name: \"Blue Square\",\n  fillColor: color(0, 0, 255),\n  locked: true\n}\nproperty(blueSquare, squareProps);"}

---
