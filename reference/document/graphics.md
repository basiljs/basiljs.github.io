---
layout: entry
title: graphics
codetitle: 'graphics(container, [cb])'
description: "Returns a collection of all graphics in the given container. The container object can be a Document, Page, Layer, Group, Story, Page Item or Text Object. This function can be used to get the graphic within a graphic frame and move it independently of its parent frame.\nIf a callback function is given, `graphics()` calls this callback function on each graphic of the given container. When the callback function returns false, the loop stops and the `graphics()` function returns an array of all graphics up to this point."
category: Document
subcategory: 'Page Items'
returns:
    name: null
    description: 'An array of Graphics.'
    type: [Array]
parameters:
    - {name: container, description: 'The document, page, layer, group, story, page item or text object to iterate the graphics in.', optional: false, type: [Document, Page, Layer, Group, Story, PageItem, TextObject]}
    - {name: cb, description: 'The callback function to call with each graphic. When this function returns false the loop stops. Passed arguments: `graphic`, `loopCount`.', optional: true, type: [Function]}
kind: function
todo: null
examples: []

---
