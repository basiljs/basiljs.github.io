---
layout: entry
title: JSON.stringify
codetitle: 'JSON.stringify(value, [replacer], [space])'
description: 'Function converts a JavaScript object or an array to a JSON string.'
category: Data
subcategory: JSON
returns:
    name: null
    description: 'The resulting JSON string'
    type: [String]
parameters:
    - {name: value, description: 'Any JavaScript value, usually an object or array', optional: false, type: [Object, Array]}
    - {name: replacer, description: 'Optional parameter that determines how object values are stringified for objects. It can be a function or an array of strings.', optional: true, type: [null]}
    - {name: space, description: 'Optional parameter that specifies the indentation of nested structures. If it is omitted, the text will be packed without extra whitespace. If it is a number, it will specify the number of spaces to indent at each level. If it is a string (such as `\t`), it contains the characters used to indent at each level.', optional: true, type: [null]}
kind: function
todo: null
examples:
    - {description: null, code: 'var str = JSON.stringify(obj);'}

---
