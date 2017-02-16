---
layout: entry
title: labels()
description: 'Returns items tagged with the given label in the InDesign Script Label pane (Window -> Utilities -> Script Label).'
category: Document
subcategory: Multi-Getters
returns: 'Array of concrete PageItem instances, e.g. TextFrame or SplineItem.'
parameters:
    - {name: label, description: 'The label identifier'}
    - {name: cb, description: 'Optional: The callback function to call with each item in the search result. When this function returns false the loop stops. Passed arguments: item, loopCount'}

---
Returns items tagged with the given label in the InDesign Script Label pane (Window -> Utilities -> Script Label).