---
layout: entry
title: binary()
description: "Converts a byte, char, int, or color to a String containing the\nequivalent binary notation. For example color(0, 102, 153, 255)\nwill convert to the String \"11111111000000000110011010011001\". This\nfunction can help make your geeky debugging sessions much happier."
category: Data
subcategory: Conversion
returns: 'A formatted string'
parameters:
    - {name: num, description: 'value to convert'}
    - {name: numBits, description: 'number of digits to return'}

---
Converts a byte, char, int, or color to a String containing the
equivalent binary notation. For example color(0, 102, 153, 255)
will convert to the String "11111111000000000110011010011001". This
function can help make your geeky debugging sessions much happier.