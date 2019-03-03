---
layout: entry
title: transform
codetitle: 'transform(pItem, type, [value])'
description: "Transforms a given page item. The type of transformation is determinded with the second parameter. The third parameter is the transformation value, either a number or an array of x and y values. The transformation's reference point (top left, bottom center etc.) can be set beforehand by using the <code>referencePoint()</code> function. If the third parameter is ommited, the function can be used to measure the value of the page item.\nThere are 10 different transformation types:\n<ul>\n<li> <code>\"translate\"</code>: Translates the page item by the given <code>[x, y]</code> values. Returns the coordinates of the page item's anchor point as an array.</li>\n<li> <code>\"rotate\"</code>: Rotates the page item to the given degree value. Returns the page item's rotation value in degrees.</li>\n<li> <code>\"scale\"</code>: Scales the page item to the given <code>[x, y]</code> scale factor values. Alternatively, a single scale factor value can be used to scale the page item uniformely. Returns the scale factor values of the page item's current scale as an array.</li>\n<li> <code>\"shear\"</code>: Shears the page item to the given degree value. Returns the page item's shear value in degrees.</li>\n<li> <code>\"size\"</code>: Sets the page item's size to the given <code>[x, y]</code> dimensions. Returns the size of the page item as an array.</li>\n<li> <code>\"width\"</code>: Sets the page item's width to the given value. Returns the width of the page item.</li>\n<li> <code>\"height\"</code>: Sets the page item's height to the given value. Returns the height of the page item.</li>\n<li> <code>\"position\"</code>: Sets the position of the page item's anchor point to the given <code>[x, y]</code> coordinates. Returns the coordinates of the page item's anchor point as an array.</li>\n<li> <code>\"x\"</code>: Sets the x-position of the page item's anchor point to the given value. Returns the x-coordinate of the page item's anchor point.</li>\n<li> <code>\"y\"</code>: Sets the y-position of the page item's anchor point to the given value. Returns the y-coordinate of the page item's anchor point.</li>\n</ul>"
category: Document
subcategory: Transformation
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
