---
layout: entry
title: characters
codetitle: 'b.characters(container, [cb])'
description: 'If no callback function is given it returns a Collection of characters in the container otherwise calls the given callback function with each character of the given document, page, story, textFrame, paragraph, line or word.'
category: Document
subcategory: Multi-Getters
returns:
    name: null
    description: 'You can use it like an array.'
    type: [Characters]
parameters:
    - {name: container, description: "The document, page, story, textFrame, paragraph, line or word instance to\n                                                   iterate the characters in", optional: false, type: [Document, Page, Story, TextFrame, Paragraph, Line, Word]}
    - {name: cb, description: 'Optional: The callback function to call with each character. When this function returns false the loop stops. Passed arguments: character, loopCount', optional: true, type: [Function]}
kind: function

---
