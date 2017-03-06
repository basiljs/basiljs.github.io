---
layout: entry
title: nfp
codetitle: 'b.nfp(value, leftDigits, rightDigits)'
description: "Utility function for formatting numbers into strings. Similar to nf()\nbut puts a \"+\" in front of positive numbers and a \"-\" in front of\nnegative numbers. There are two versions, one for formatting floats\nand one for formatting ints. The values for the digits, left, and right\nparameters should always be positive integers."
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
