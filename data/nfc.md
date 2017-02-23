---
layout: entry
title: nfc
codetitle: 'b.nfc(value, leftDigits, rightDigits)'
description: "Utility function for formatting numbers into strings and placing\nappropriate commas to mark units of 1000. There are two versions, one\nfor formatting ints and one for formatting an array of ints. The value\nfor the digits parameter should always be a positive integer."
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

---
