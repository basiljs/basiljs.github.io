---
layout: entry
title: nfs
codetitle: 'nfs(value, leftDigits, rightDigits)'
description: "Utility function for formatting numbers into strings. Similar to nf()\nbut leaves a blank space in front of positive numbers so they align\nwith negative numbers in spite of the minus symbol. There are two\nversions, one for formatting floats and one for formatting ints. The\nvalues for the digits, left, and right parameters should always be\npositive integers."
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
