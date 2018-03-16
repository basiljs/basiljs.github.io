---
layout: entry
title: lines
codetitle: 'lines(container, [cb])'
description: 'If no callback function is given it returns a Collection of lines in the container otherwise calls the given callback function with each line of the given document, page, story, textFrame or paragraph.'
category: Document
subcategory: Multi-Getters
returns:
    name: null
    description: 'A collection of Line objects.'
    type: [Lines]
parameters:
    - {name: container, description: 'The document, page, story, textFrame or paragraph instance to iterate the lines in.', optional: false, type: [Document, Page, Story, TextFrame, Paragraph]}
    - {name: cb, description: 'Optional: The callback function to call with each line. When this function returns false the loop stops. Passed arguments: line, loopCount.', optional: true, type: [Function]}
kind: function
todo: null
examples: []

---
