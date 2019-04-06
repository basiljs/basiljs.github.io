---
layout: entry
title: transform
codetitle: 'transform(pItem, type, [value])'
description: "Transforms a given page item. The type of transformation is determinded with the second parameter. The third parameter is the transformation value, either a number or an array of x and y values. The transformation's reference point (top left, bottom center etc.) can be set beforehand by using the `referencePoint()` function. If the third parameter is ommited, the function can be used to measure the value of the page item. There are 10 different transformation types:\n- `\"translate\"`: Translates the page item by the given `[x, y]` values. Returns the coordinates of the page item's anchor point as anray.\n- `\"rotate\"`: Rotates the page item to the given degree value. Returns the page item's rotation value in degrees.\n- `\"scale\"`: Scales the page item to the given `[x, y]` scale factor values. Alternatively, a single scale factor value can be usto scale the page item uniformely. Returns the scale factor values of the page item's current scale as an array.\n- `\"shear\"`: Shears the page item to the given degree value. Returns the page item's shear value in degrees.\n- `\"size\"`: Sets the page item's size to the given `[x, y]` dimensions. Returns the size of the page item as an array.\n- `\"width\"`: Sets the page item's width to the given value. Returns the width of the page item.\n- `\"height\"`: Sets the page item's height to the given value. Returns the height of the page item.\n- `\"position\"`: Sets the position of the page item's anchor point to the given `[x, y]` coordinates. Returns the coordinates of the page item's anchor point as an array.\n- `\"x\"`: Sets the x-position of the page item's anchor point to the given value. Returns the x-coordinate of the page item's anr point.\n- `\"y\"`: Sets the y-position of the page item's anchor point to the given value. Returns the y-coordinate of the page item's anchor point."
category: Transform
subcategory: null
returns:
    name: null
    description: 'The current value(s) of the specified transformation.'
    type: [Number, Array]
parameters:
    - {name: pItem, description: 'The page item to transform.', optional: false, type: [PageItem]}
    - {name: type, description: 'The type of transformation.', optional: false, type: [String]}
    - {name: value, description: 'The value(s) of the transformation.', optional: true, type: [null]}
kind: function
todo: null
examples:
    - {description: 'Rotating a rectangle to a 25 degrees angle', code: "var r = rect(20, 40, 200, 100);\ntransform(r, \"rotate\", 25);"}
    - {description: 'Measure the width of a rectangle', code: "var r = rect(20, 40, random(100, 300), 100);\nvar w = transform(r, \"width\");\nprintln(w); // prints the rectangle's random width between 100 and 300"}
    - {description: 'Position a rectangle''s lower right corner at a certain position', code: "var r = rect(20, 40, random(100, 300), random(50, 150));\nreferencePoint(BOTTOM_RIGHT);\ntransform(r, \"position\", [40, 40]);"}

---
