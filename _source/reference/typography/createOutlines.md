---
layout: entry
title: createOutlines
codetitle: 'createOutlines(item, [cb])'
description: "Returns an array of polygons after outlining text and optionally processes them with a callback function.\nUse together with `pathToPoints()` for getting point and bezier coordinates from outlines. If used on a text frame,\nall linked text frames will be converted to outlines as well."
category: Typography
subcategory: null
returns:
    name: null
    description: 'Returns an array of polygons.'
    type: [Array]
parameters:
    - {name: item, description: 'Text or TextPath to be outlined.', optional: false, type: [TextFrame, TextPath]}
    - {name: cb, description: 'Optional: Callback function to use with each polygon. Passed arguments: `obj`, `loopCounter`', optional: true, type: [Function]}
kind: function
todo: null
examples:
    - {description: 'Convert text to outlines', code: "textSize(150);\nvar myText = text(\"Hello\", 0, 0, width, height);\nvar outlines = createOutlines(myText);"}
    - {description: 'Run a callback function on each resulting shape', code: "textSize(150);\nvar myText = text(\"Hello \\nWorld\", 0, 0, width, height);\nvar outlines = createOutlines(myText, function(obj){\n  var pts = pathToPoints(obj);\n  println(pts.length); // check number of points\n});"}

---
