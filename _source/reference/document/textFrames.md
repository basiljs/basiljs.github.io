---
layout: entry
title: textFrames
codetitle: 'textFrames(container, [cb])'
description: "Returns a collection of all text frames in the given container. The container object can be a Document, Page, Layer, Group, Story, Page Item or Text Object.\nIf a callback function is given, `textFrames()` calls this callback function on each text frame of the given container. When the callback function returns false, the loop stops and the `textFrames()` function returns an array of all text frames up to this point."
category: Document
subcategory: 'Page Items'
returns:
    name: null
    description: 'An array of Text Frames.'
    type: [Array]
parameters:
    - {name: container, description: 'The document, page, layer, group, story, page item or text object to iterate the text frames in.', optional: false, type: [Document, Page, Layer, Group, Story, PageItem, TextObject]}
    - {name: cb, description: 'The callback function to call with each text frame. When this function returns false the loop stops. Passed arguments: `textFrame`, `loopCount`.', optional: true, type: [Function]}
kind: function
todo: null
examples: []

---
