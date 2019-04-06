---
layout: entry
title: typo
codetitle: 'typo(item, property, [value])'
description: "Sets text properties to the given item. If the item is not an instance the text property can be set to, the property gets set to the direct descendants of the given item, e.g. all stories of a given document.\n\nIf no value is given and the given property is a string, the function acts as a getter and returns the corresponding value(s) in an array. This can either be an array containing the value of the concrete item (e.g. character) the values of the item's descendants (e.g. paragraphs of given text frame)."
category: Typography
subcategory: Attributes
returns:
    name: null
    description: 'The property value(s) if the function acts as getter or the items the property was assigned to.'
    type: [null, null, null]
parameters:
    - {name: item, description: 'The object to apply the property to.', optional: false, type: [Document, Spread, Page, Layer, Story, TextFrame, TextPath, Text]}
    - {name: property, description: 'The text property name or an object of key/value property/value pairs. If property is a string and no value is given, the function acts as getter.', optional: false, type: [String, Object]}
    - {name: value, description: 'The value to apply to the property.', optional: true, type: [null]}
kind: function
todo: null
examples: []

---
