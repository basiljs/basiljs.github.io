---
layout: entry
title: binary
codetitle: 'b.binary(num, [numBits])'
description: "Converts a byte, char, int, or color to a String containing the\nequivalent binary notation. For example color(0, 102, 153, 255)\nwill convert to the String \"11111111000000000110011010011001\". This\nfunction can help make your geeky debugging sessions much happier."
category: Data
subcategory: Conversion
returns:
    name: null
    description: 'A formatted string'
    type: [String]
parameters:
    - {name: num, description: 'value to convert', optional: false, type: [Number]}
    - {name: numBits, description: 'number of digits to return', optional: true, type: [Number]}
kind: function

---
