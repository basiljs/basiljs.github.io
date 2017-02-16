---
layout: entry
title: forEach()
description: 'Used to run a function on all elements of an array. Please note the existance of the convenience methods b.stories(), b.paragraphs(), b.lines(), b.words() and b.characters() that are used to iterate through all instances of the given type in the given document.'
category: Data
subcategory: 'Array Functions'
returns: null
parameters:
    - {name: collection, description: 'The array to be processed.'}
    - {name: cb, description: 'The function that will be called on each element. The call will be like function(item,i) where i is the current index of the item within the array.'}

---
Used to run a function on all elements of an array. Please note the existance of the convenience methods b.stories(), b.paragraphs(), b.lines(), b.words() and b.characters() that are used to iterate through all instances of the given type in the given document.