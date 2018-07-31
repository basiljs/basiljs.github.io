---
layout: entry
title: nf
codetitle: 'nf(value, leftDigits, rightDigits)'
description: "Utility function for formatting numbers into strings. There are two versions, one for formatting floats and one for formatting ints. The values for the digits, left, and right parameters should always be positive integers.\n\n`nf()` is used to add zeros to the left and/or right of a number. This is typically for aligning a list of numbers. To remove digits from a floating-point number, use the `ceil()`, `floor()`, or `round()` functions."
category: Data
subcategory: 'String Functions'
returns:
    name: null
    description: 'The formatted string'
    type: [String]
parameters:
    - {name: value, description: 'The Number to convert', optional: false, type: [Number]}
    - {name: leftDigits, description: null, optional: false, type: [Number]}
    - {name: rightDigits, description: null, optional: false, type: [Number]}
kind: function
todo: null
examples: []

---
