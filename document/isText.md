---
layout: entry
title: isText
codetitle: b.isText(obj)
description: "Checks whether a var is an indesign text object, returns true if this is the case\nNB: a indesign TextFrame will return false as it is just a container holding text.\nSo you could say that isText() refers to all the things inside a TextFrame."
category: Document
subcategory: Type-Check
returns:
    name: null
    description: 'returns true if this is the case'
    type: [Boolean]
parameters:
    - {name: obj, description: 'The object to check', optional: false, type: [Character, InsertionPoint, Line, Paragraph, TextColumn, TextStyleRange, Word]}
kind: function

---
