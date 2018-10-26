---
layout: entry
title: words
codetitle: 'words(container, [cb])'
description: "Returns a collection of all word objects in the given container. The container object can be a Document, Page, Layer, Group, Story, Text Frame, Paragraph or Line.\nIf a callback function is given, `words()` calls this callback function on each word object of the given container. When the callback function returns false, the loop stops and the `words()` function returns an array of all words up to this point."
category: Document
subcategory: Text
returns:
    name: null
    description: 'A collection or an array of Word objects.'
    type: [Words, Array]
parameters:
    - {name: container, description: 'The document, page, layer, group, story, textFrame, paragraph or line instance to iterate the words in.', optional: false, type: [Document, Page, Layer, Group, Story, TextFrame, Paragraph, Line]}
    - {name: cb, description: 'Optional: The callback function to call with each word. When this function returns false the loop stops. Passed arguments: `word`, `loopCount`', optional: true, type: [Function]}
kind: function
todo: null
examples: []

---
