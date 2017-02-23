---
layout: entry
title: stories
codetitle: 'b.stories(doc, [cb])'
description: 'If no callback function is given it returns a Collection of items otherwise calls the given callback function with each story of the given document.'
category: Document
subcategory: Multi-Getters
returns:
    name: null
    description: 'Array of Stories.'
    type: []
parameters:
    - {name: doc, description: 'The document instance to iterate the stories in', optional: false, type: [Document]}
    - {name: cb, description: 'Optional: The callback function to call with each story. When this function returns false the loop stops. Passed arguments: story, loopCount;', optional: true, type: [Function]}
kind: function

---
