---
layout: entry
title: bounds()
description: "The function calculates the geometric bounds of any given object. Use b.itemX(), b.itemY(), b.itemPosition(), b.itemWidth(), b.itemHeight() and b.itemSize() to modify PageItems.\nIn case the object is any kind of text, then additional typographic information baseline and xHeight are calculated"
category: Document
subcategory: Transformation
returns: 'Geometric bounds object with these properties: width, height, left, right, top, bottom and for text: baseline, xHeight'
parameters:
    - {name: obj, description: 'The object to calculate the geometric bounds'}

---
The function calculates the geometric bounds of any given object. Use b.itemX(), b.itemY(), b.itemPosition(), b.itemWidth(), b.itemHeight() and b.itemSize() to modify PageItems.
In case the object is any kind of text, then additional typographic information baseline and xHeight are calculated