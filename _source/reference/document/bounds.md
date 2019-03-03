---
layout: entry
title: bounds
codetitle: bounds(obj)
description: 'The function calculates the geometric bounds of any given page item or text. Use the `transforms()` function to modify page items. In case the object is any kind of text, additional typographic information `baseline` and `xHeight` are calculated.'
category: Document
subcategory: 'Page Items'
returns:
    name: null
    description: 'Geometric bounds object with these properties: `width`, `height`, `left`, `right`, `top`, `bottom` and for text: `baseline`, `xHeight`.'
    type: [Object]
parameters:
    - {name: obj, description: 'The page item or text to calculate the geometric bounds.', optional: false, type: [PageItem, Text]}
kind: function
todo: null
examples: []

---
