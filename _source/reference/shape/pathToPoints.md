---
layout: entry
title: pathToPoints
codetitle: 'pathToPoints(obj, [addPoints])'
description: "Returns an object containing an array of all points, an array of all beziers (points + their anchor points) and an array of all paths (containing its array of points + beziers) of a given pageItem in InDesign. Together with `createOutlines()` this can be used on text items. Accepts both single paths or a collection/group of paths.\nWhen using this on a multi path object (e.g. text with separate paths), the `paths` property can be used to loop over every path separately, whereas the properties `points` and `beziers` contain arrays for all paths combined.\nAn optional second parameter adds interpolated points between existing points, which is helpful for subdividing existing paths."
category: Shape
subcategory: null
returns:
    name: null
    description: 'Returns object with the following arrays `points`, `beziers`, `paths`'
    type: [Object]
parameters:
    - {name: obj, description: 'The pageItem(s) to process point/bezier coordinates of.', optional: false, type: [Object]}
    - {name: addPoints, description: 'Optional amount of additional interpolated points.', optional: true, type: [Number]}
kind: function
todo: null
examples:
    - {description: 'Draw all points of a vector path', code: "noFill();\nvar myCircle = ellipse(width / 2, height / 2, width / 2, width / 2);\nvar pts = pathToPoints(myCircle);\n\nfor (var i = 0; i < pts.points.length; i++) {\n  var pt = pts.points[i];\n  ellipse(pt.x, pt.y, 3, 3);\n}"}
    - {description: 'With Interpolation between Points', code: "noFill();\nvar myCircle = ellipse(width / 2, height / 2, width / 2, width / 2);\nvar pts = pathToPoints(myCircle, 5); // add 5 points between each point\n\nfor (var i = 0; i < pts.points.length; i++) {\n  var pt = pts.points[i];\n  ellipse(pt.x, pt.y, 3, 3);\n}"}
    - {description: 'Draw Beziers and handles from Path', code: "noFill();\ntextSize(400);\nvar myText = text('S', 0, 0, width, height);\nvar myOutlines = createOutlines(myText);\nvar pts = pathToPoints(myOutlines);\n\nbeginShape();\nfor (var i = 0; i < pts.beziers.length; i++) {\n  var bz = pts.beziers[i];\n  vertex(bz.anchor.x, bz.anchor.y, bz.left.x, bz.left.y, bz.right.x, bz.right.y);\n  line(bz.anchor.x, bz.anchor.y, bz.left.x, bz.left.y); // left handle\n  line(bz.anchor.x, bz.anchor.y, bz.right.x, bz.right.y); // right handle\n}\nendShape(CLOSE);"}
    - {description: 'Separated Paths of Beziers', code: "noFill();\ntextSize(400);\nvar myText = text('B', 0, 0, width, height);\nvar myOutlines = createOutlines(myText);\nvar pts = pathToPoints(myOutlines); // add 3 for more detail\n\nfor (var j = 0; j < pts.paths.length; j++) {\n  var path = pts.paths[j];\n\n  beginShape();\n    for (var i = 0; i < path.beziers.length; i++) {\n      var bz = path.beziers[i];\n      vertex(bz.anchor.x, bz.anchor.y, bz.left.x, bz.left.y, bz.right.x, bz.right.y);\n      line(bz.anchor.x, bz.anchor.y, bz.left.x, bz.left.y); // left handle\n      line(bz.anchor.x, bz.anchor.y, bz.right.x, bz.right.y); // right handle\n    }\n  endShape(CLOSE);\n}"}

---
