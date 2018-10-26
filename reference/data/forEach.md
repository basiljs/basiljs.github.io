---
layout: entry
title: forEach
codetitle: 'forEach(collection, cb)'
description: "Used to run a function on all elements of an array. `forEach()` calls this callback function on each element of the given array. When the callback function returns false, the loop stops and an array of all elements up to this point is returned.\nPlease note the existence of the convenience methods `stories()`, `paragraphs()`, `lines()`, `words()` and `characters()` that are used to iterate through all instances of the given type in the given document."
category: Data
subcategory: Collections
returns:
    name: null
    description: 'An array of the input array elements.'
    type: [Array]
parameters:
    - {name: collection, description: 'The array to be processed.', optional: false, type: [Array]}
    - {name: cb, description: 'The function that will be called on each element. The call will be like `function(item, i)` where `i` is the current index of the item within the array.', optional: false, type: [Function]}
kind: function
todo: null
examples: []

---
