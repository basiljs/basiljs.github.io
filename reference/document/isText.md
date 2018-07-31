---
layout: entry
title: isText
codetitle: isText(obj)
description: "Checks whether a var is an InDesign text object, returns `true` if this is the case.\nNB: a InDesign text frame will return `false` as it is just a container holding text. So you could say that `isText()` refers to all the things inside a text frame."
category: Document
subcategory: Type-Check
returns:
    name: null
    description: 'returns true if this is the case'
    type: [Boolean]
parameters:
    - {name: obj, description: 'The object to check', optional: false, type: [Character, InsertionPoint, Line, Paragraph, TextColumn, TextStyleRange, Word]}
kind: function
todo: null
examples: []

---
