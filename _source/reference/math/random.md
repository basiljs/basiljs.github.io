---
layout: entry
title: random
codetitle: 'random([low], [high])'
description: "Generates random numbers. Each time the `random()` function is called, it returns an unexpected value within the specified range. If one parameter is passed to the function it will return a float between zero and the value of the high parameter. The function call `random(5)` returns values between `0` and `5`. If two parameters are passed, it will return a float with a value between the the parameters. The function call `random(-5, 10.2)` returns values between `-5` and `10.2`.\nOne parameter sets the range from `0` to the given parameter, while with two parameters present you set the range from `val1` to `val2`.\nIf one argument is given and it is an array, returns a random element from that array."
category: Math
subcategory: Random
returns:
    name: null
    description: 'A random number or a random element from array.'
    type: [Number, Object]
parameters:
    - {name: low, description: 'The low border of the range.', optional: true, type: [Number]}
    - {name: high, description: 'The high border of the range.', optional: true, type: [Number]}
kind: function
todo: null
examples: []

---
