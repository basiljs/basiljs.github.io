---
layout: entry
title: textStyleRanges
codetitle: 'textStyleRanges(container, [cb])'
description: "Returns a collection of all text style range objects in the given container. A text style range is a continuous range of identically formatted text (i.e., three consecutive red words in an otherwise black text of the same style would form a text style range). The container object can be a Document, Page, Layer, Group, Story, Text Frame, Paragraph, Line or Word.\nIf a callback function is given, `textStyleRanges()` calls this callback function on each text style range object of the given container. When the callback function returns false, the loop stops and the `textStyleRanges()` function returns an array of all text style ranges up to this point."
category: Document
subcategory: Text
returns:
    name: null
    description: 'A collection or an array of TextStyleRange objects.'
    type: [TextStyleRanges, Array]
parameters:
    - {name: container, description: 'The document, page, layer, group, story, textFrame, paragraph, line or word instance to iterate the text style ranges in.', optional: false, type: [Document, Page, Layer, Group, Story, TextFrame, Paragraph, Line, Word]}
    - {name: cb, description: 'Optional: The callback function to call with each text style range. When this function returns false the loop stops. Passed arguments: `textStyleRange`, `loopCount`', optional: true, type: [Function]}
kind: function
todo: null
examples: []

---
