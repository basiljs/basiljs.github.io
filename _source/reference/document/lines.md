---
layout: entry
title: lines
codetitle: 'lines(container, [cb])'
description: "Returns a collection of all line objects in the given container. The container object can be a Document, Page, Layer, Group, Story, Text Frame or Paragraph. Please note that `lines()` refers to lines of text in a text frame. If you need to construct a geometric line on a page, use `line()` instead.\nIf a callback function is given, `lines()` calls this callback function on each line object of the given container. When the callback function returns false, the loop stops and the `lines()` function returns an array of all lines up to this point."
category: Document
subcategory: Text
returns:
    name: null
    description: 'A collection or an array of Line objects.'
    type: [Lines, Array]
parameters:
    - {name: container, description: 'The document, page, layer, group, story, textFrame or paragraph instance to  iterate the lines in.', optional: false, type: [Document, Page, Layer, Group, Story, TextFrame, Paragraph, Line]}
    - {name: cb, description: 'Optional: The callback function to call with each line. When this function returns false the loop stops. Passed arguments: `line`, `loopCount`', optional: true, type: [Function]}
kind: function
todo: null
examples: []

---
