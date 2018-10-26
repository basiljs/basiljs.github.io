---
layout: entry
title: characters
codetitle: 'characters(container, [cb])'
description: "Returns a collection of all character objects in the given container. The container object can be a Document, Page, Layer, Group, Story, Text Frame, Paragraph, Line or Word.\nIf a callback function is given, `characters()` calls this callback function on each character object of the given container. When the callback function returns false, the loop stops and the `characters()` function returns an array of all characters up to this point."
category: Document
subcategory: Text
returns:
    name: null
    description: 'A collection or an array of Character objects.'
    type: [Characters, Array]
parameters:
    - {name: container, description: 'The document, page, layer, group, story, textFrame, paragraph, line or word instance to  iterate the characters in.', optional: false, type: [Document, Page, Layer, Group, Story, TextFrame, Paragraph, Line, Word]}
    - {name: cb, description: 'Optional: The callback function to call with each character. When this function returns false the loop stops. Passed arguments: `character`, `loopCount`', optional: true, type: [Function]}
kind: function
todo: null
examples: []

---
