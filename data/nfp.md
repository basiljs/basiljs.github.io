---
layout: entry
title: nfp()
description: "Utility function for formatting numbers into strings. Similar to nf()\nbut puts a \"+\" in front of positive numbers and a \"-\" in front of\nnegative numbers. There are two versions, one for formatting floats\nand one for formatting ints. The values for the digits, left, and right\nparameters should always be positive integers."
category: Data
subcategory: 'String Functions'
returns: 'The formatted string'
parameters:
    - {name: value, description: 'The Number to convert'}
    - {name: leftDigits, description: ""}
    - {name: rightDigits, description: ""}

---
Utility function for formatting numbers into strings. Similar to nf()
but puts a "+" in front of positive numbers and a "-" in front of
negative numbers. There are two versions, one for formatting floats
and one for formatting ints. The values for the digits, left, and right
parameters should always be positive integers.