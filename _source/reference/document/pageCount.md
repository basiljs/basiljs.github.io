---
layout: entry
title: pageCount
codetitle: 'pageCount([pageCount])'
description: 'Returns the number of all pages in the current document. If a number is given as an argument, it will set the document''s page count to the given number by either adding pages or removing pages until the number is reached. If pages are added, the master page of the document''s last page will be applied to the new pages.'
category: Document
subcategory: Page
returns:
    name: null
    description: 'The amount of pages.'
    type: [Number]
parameters:
    - {name: pageCount, description: 'New page count of the document (integer between 1 and 9999).', optional: true, type: [Number]}
kind: function
todo: null
examples: []

---
