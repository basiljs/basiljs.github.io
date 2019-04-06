---
layout: entry
title: paragraphs
codetitle: 'paragraphs(container, [cb])'
description: "Returns a collection of all paragraph objects in the given container. The container object can be a Document, Page, Layer, Group, Story or Text Frame.\nIf a callback function is given, `paragraphs()` calls this callback function on each paragraph object of the given container. When the callback function returns false, the loop stops and the `paragraphs()` function returns an array of all paragraphs up to this point."
category: Document
subcategory: Text
returns:
    name: null
    description: 'A collection or an array of Paragraph objects.'
    type: [Paragraphs, Array]
parameters:
    - {name: container, description: 'The document, page, layer, group, story or textFrame instance to  iterate the paragraphs in.', optional: false, type: [Document, Page, Layer, Group, Story, TextFrame]}
    - {name: cb, description: 'Optional: The callback function to call with each paragraph. When this function returns false the loop stops. Passed arguments: `paragraph`, `loopCount`', optional: true, type: [Function]}
kind: function
todo: null
examples: []

---
