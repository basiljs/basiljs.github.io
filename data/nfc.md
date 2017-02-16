---
layout: entry
title: nfc()
description: "Utility function for formatting numbers into strings and placing\nappropriate commas to mark units of 1000. There are two versions, one\nfor formatting ints and one for formatting an array of ints. The value\nfor the digits parameter should always be a positive integer."
category: Data
subcategory: 'String Functions'
returns: 'The formatted string'
parameters:
    - {name: value, description: 'The Number to convert'}
    - {name: leftDigits, description: ""}
    - {name: rightDigits, description: ""}

---
Utility function for formatting numbers into strings and placing
appropriate commas to mark units of 1000. There are two versions, one
for formatting ints and one for formatting an array of ints. The value
for the digits parameter should always be a positive integer.