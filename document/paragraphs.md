---
layout: entry
title: paragraphs
codetitle: 'b.paragraphs(container, [cb])'
description: 'If no callback function is given it returns a Collection of paragraphs in the container otherwise calls the given callback function with each paragraph of the given document, page, story or textFrame.'
category: Document
subcategory: Multi-Getters
returns:
    name: null
    description: 'Array of Paragraphs.'
    type: []
parameters:
    - {name: container, description: 'The document, story, page or textFrame instance to iterate the paragraphs in', optional: false, type: [Document, Page, Story, TextFrame]}
    - {name: cb, description: 'Optional: The callback function to call with each paragraph. When this function returns false the loop stops. Passed arguments: para, loopCount', optional: true, type: [Function]}
kind: function

---
