---
layout: entry
title: CSV.stringify
codetitle: 'CSV.stringify(Array, [delimiter])'
description: 'Function convert an javascript array of objects to a CSV-string, with optional custom delimiter.'
category: Data
subcategory: CSV
returns:
    name: null
    description: 'Returns CSV-string'
    type: [String]
parameters:
    - {name: Array, description: 'to be converted to a CSV-string', optional: false, type: [Array]}
    - {name: delimiter, description: 'optional character[s] used to separate data.', optional: true, type: [String]}
kind: function
todo: null
examples:
    - {description: null, code: "var str = CSV.stringify(arr);\nvar arr = CSV.parse(str);"}

---
