---
layout: entry
title: characters
codetitle: 'characters(container, [cb])'
description: 'If no callback function is given it returns a Collection of characters in the container otherwise calls the given callback function with each character of the given document, page, story, textFrame, paragraph, line or word.'
category: Document
subcategory: Text
returns:
    name: null
    description: 'A collection of Character objects.'
    type: [Characters]
parameters:
    - {name: container, description: 'The document, page, story, textFrame, paragraph, line or word instance to  iterate the characters in.', optional: false, type: [Document, Page, Story, TextFrame, Paragraph, Line, Word]}
    - {name: cb, description: 'Optional: The callback function to call with each character. When this function returns false the loop stops. Passed arguments: `character`, `loopCount`', optional: true, type: [Function]}
kind: function
todo: null
examples: []

---
