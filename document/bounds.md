---
layout: entry
title: bounds
codetitle: b.bounds(obj)
description: "The function calculates the geometric bounds of any given object. Use b.itemX(), b.itemY(), b.itemPosition(), b.itemWidth(), b.itemHeight() and b.itemSize() to modify PageItems.\nIn case the object is any kind of text, then additional typographic information baseline and xHeight are calculated"
category: Document
subcategory: Transformation
returns:
    name: null
    description: 'Geometric bounds object with these properties: width, height, left, right, top, bottom and for text: baseline, xHeight.'
    type: [Object]
parameters:
    - {name: obj, description: 'The object to calculate the geometric bounds.', optional: false, type: [Text, Object]}
kind: function

---
