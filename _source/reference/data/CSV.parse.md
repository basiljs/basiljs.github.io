---
layout: entry
title: CSV.parse
codetitle: 'CSV.parse(String, [delimiter])'
description: 'Function parses a string as CSV-object Array, with optional custom delimiter.'
category: Data
subcategory: CSV
returns:
    name: null
    description: 'Returns CSV-object Array'
    type: [Array]
parameters:
    - {name: String, description: 'to be parsed as CSV-object.', optional: false, type: [String]}
    - {name: delimiter, description: 'optional character[s] used to separate data.', optional: true, type: [String]}
kind: function
todo: null
examples:
    - {description: null, code: "var arr = CSV.parse(str);\nvar str = CSV.stringify(arr);"}

---
