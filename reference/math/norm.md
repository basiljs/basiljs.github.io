---
layout: entry
title: norm
codetitle: 'norm(aNumber, low, high)'
description: "Normalizes a number from another range into a value between `0` and `1`.\nIdentical to `map(value, low, high, 0, 1);`\nNumbers outside the range are not clamped to `0` and `1`, because out-of-range values are often intentional and useful."
category: Math
subcategory: Calculation
returns:
    name: null
    description: 'The normalized value.'
    type: [Number]
parameters:
    - {name: aNumber, description: 'The value to be normed.', optional: false, type: [Number]}
    - {name: low, description: 'The lowest value to be expected.', optional: false, type: [Number]}
    - {name: high, description: 'The highest value to be expected.', optional: false, type: [Number]}
kind: function
todo: null
examples: []

---
