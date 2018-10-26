---
layout: entry
title: items
codetitle: 'items(container, [cb])'
description: "Returns a collection of all page items in the given container. The container object can be a Document, Page, Layer, Group, Story, Page Item or Text Object.\nIf a callback function is given, `items()` calls this callback function on each page item of the given container. When the callback function returns false, the loop stops and the `items()` function returns an array of all page items up to this point."
category: Document
subcategory: 'Page Items'
returns:
    name: null
    description: 'A collection or an array of page items.'
    type: [PageItems, Array]
parameters:
    - {name: container, description: 'The document, page, layer, group, story, page item or text object instance to iterate the page items in.', optional: false, type: [Document, Page, Layer, Group, Story, PageItem, TextObject]}
    - {name: cb, description: 'Optional: The callback function to call with each page item. When this function returns false the loop stops. Passed arguments: `item`, `loopCount`', optional: true, type: [Function]}
kind: function
todo: null
examples: []

---
