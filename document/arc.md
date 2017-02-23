---
layout: entry
title: arc
codetitle: 'b.arc(cx, cy, w, h, startAngle, endAngle, mode)'
description: "The arc() function draws an arc in the display window.\nArcs are drawn along the outer edge of an ellipse defined by the\n"
category: Document
subcategory: Primitives
returns:
    name: null
    description: "newShape (n.b. in Adobe Scripting the corresponding type is a Path Item)\n\nTODO(S)\n- fix overlapping points bug"
    type: [GraphicLine, Polygon]
parameters:
    - {name: cx, description: 'x-coordinate of the arc''s center', optional: false, type: [Number]}
    - {name: cy, description: 'y-coordinate of the arc''s center', optional: false, type: [Number]}
    - {name: w, description: 'width of the arc''s ellipse', optional: false, type: [Number]}
    - {name: h, description: 'height of the arc''s ellipse', optional: false, type: [Number]}
    - {name: startAngle, description: 'starting angle of the arc (radians)', optional: false, type: [Number]}
    - {name: endAngle, description: 'ending angle of the arc (radians)', optional: false, type: [Number]}
    - {name: mode, description: 'optional property defines rendering technique of arc, b.OPEN (default), b.CHORD, or b.PIE', optional: false, type: [String]}
kind: function

---
