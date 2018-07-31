---
layout: entry
title: label
codetitle: label(label)
description: 'Returns the first item that is tagged with the given label in the InDesign Script Label pane (`Window -> Utilities -> Script Label`). Use this instead of `labels()`, when you know you just have one thing with that label and don''t want to deal with a single-element array.'
category: Document
subcategory: 'Page Items'
returns:
    name: null
    description: 'The first page item with the given label.'
    type: [PageItem]
parameters:
    - {name: label, description: 'The label identifier.', optional: false, type: [String]}
kind: function
todo: null
examples: []

---
