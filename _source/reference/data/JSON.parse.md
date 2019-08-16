---
layout: entry
title: JSON.parse
codetitle: 'JSON.parse(text, [reviver])'
description: 'Function parses (decodes) and validates a string as JSON object.'
category: Data
subcategory: JSON
returns:
    name: null
    description: 'The resulting JSON object.'
    type: [Object]
parameters:
    - {name: text, description: 'String to be parsed as JSON object.', optional: false, type: [String]}
    - {name: reviver, description: 'The optional reviver parameter is a function that can filter and transform the results. It receives each of the keys and values, and its return value is used instead of the original value. If it returns what it received, then the structure is not modified. If it returns undefined then the member is deleted.', optional: true, type: [Function]}
kind: function
todo: null
examples:
    - {description: null, code: 'var obj = JSON.parse(str);'}

---
