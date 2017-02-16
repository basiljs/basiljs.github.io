---
layout: entry
title: nfs()
description: "Utility function for formatting numbers into strings. Similar to nf()\nbut leaves a blank space in front of positive numbers so they align\nwith negative numbers in spite of the minus symbol. There are two\nversions, one for formatting floats and one for formatting ints. The\nvalues for the digits, left, and right parameters should always be\npositive integers."
category: Data
subcategory: 'String Functions'
returns: 'The formatted string'
parameters:
    - {name: value, description: 'The Number to convert'}
    - {name: leftDigits, description: ""}
    - {name: rightDigits, description: ""}

---
Utility function for formatting numbers into strings. Similar to nf()
but leaves a blank space in front of positive numbers so they align
with negative numbers in spite of the minus symbol. There are two
versions, one for formatting floats and one for formatting ints. The
values for the digits, left, and right parameters should always be
positive integers.