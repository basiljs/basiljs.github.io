---
layout: entry
title: JSON.decode
codetitle: JSON.decode(String)
description: 'Function parses and validates a string as JSON-object.'
category: Data
subcategory: JSON
returns:
    name: null
    description: 'Returns JSON-object or throws an error if invalid JSON has been provided.'
    type: [Object]
parameters:
    - {name: String, description: 'to be parsed as JSON-object.', optional: false, type: [String]}
kind: function
todo: null
examples:
    - {description: null, code: "var obj = JSON.decode(str);\nvar str = JSON.encode(obj);"}

---