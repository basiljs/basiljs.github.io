---
layout: entry
title: lerp
codetitle: 'b.lerp(value1, value2, amt)'
description: 'Calculates a number between two numbers at a specific increment. The amt parameter is the amount to interpolate between the two values where 0.0 equal to the first point, 0.1 is very near the first point, 0.5 is half-way in between, etc. The lerp function is convenient for creating motion along a straight path and for drawing dotted lines.'
category: Math
subcategory: Calculation
returns:
    name: null
    description: 'The mapped value.'
    type: [Number]
parameters:
    - {name: value1, description: 'First value.', optional: false, type: [Number]}
    - {name: value2, description: 'Second value.', optional: false, type: [Number]}
    - {name: amt, description: 'Amount between 0.0 and 1.0.', optional: false, type: [Number]}
kind: function

---
