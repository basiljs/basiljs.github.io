---
layout: entry
title: isText()
description: "Checks whether a var is an indesign text object, returns true if this is the case\nNB: a indesign TextFrame will return false as it is just a container holding text.\nSo you could say that isText() refers to all the things inside a TextFrame."
category: Document
subcategory: Type-Check
returns: 'returns true if this is the case'
parameters:
    - {name: obj, description: 'The object to check'}

---
Checks whether a var is an indesign text object, returns true if this is the case
NB: a indesign TextFrame will return false as it is just a container holding text.
So you could say that isText() refers to all the things inside a TextFrame.