---
layout: entry
title: labels
codetitle: 'labels(label, [cb])'
description: 'Returns items tagged with the given label in the InDesign Script Label pane (`Window -> Utilities -> Script Label`).'
category: Document
subcategory: 'Page Items'
returns:
    name: null
    description: 'Array of concrete page item instances, e.g. text frame or spline item.'
    type: [Array]
parameters:
    - {name: label, description: 'The label identifier.', optional: false, type: [String]}
    - {name: cb, description: 'The callback function to call with each item in the search result. When this function returns `false`, the loop stops. Passed arguments: `item`, `loopCount`.', optional: true, type: [Function]}
kind: function
todo: null
examples: []

---
