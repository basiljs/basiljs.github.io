---
layout: entry
title: label
codetitle: 'label(itemOrLabel, label)'
description: 'Tags a page item with a given script label in the InDesign Script Label panel (`Window -> Utilities -> Script Label`). If only one argument is given, `label()` returns the first item that is tagged with the given label. Use this instead of `labels()`, when you know you just have one thing with that label and don''t want to deal with a single-element array.'
category: Document
subcategory: 'Page Items'
returns:
    name: null
    description: 'The tagged page item or the first page item with the given label.'
    type: [PageItem]
parameters:
    - {name: itemOrLabel, description: 'The page item to tag or the label identifier to search for.', optional: false, type: [String, PageItem]}
    - {name: label, description: 'The label identifier to tag the page item with.', optional: false, type: [String]}
kind: function
todo: null
examples: []

---
