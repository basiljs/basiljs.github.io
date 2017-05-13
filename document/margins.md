---
layout: entry
title: margins
codetitle: 'b.margins([top], [right], [bottom], [left], [pageNumber])'
description: 'Sets the margins of a given page. If 1 value is given, all 4 sides are set equally. If 4 values are given, the current page will be adjusted. Adding a 5th value will set the margin of a given page. Calling the function without any values, will return the margins for the current page.'
category: Document
subcategory: Page
returns:
    name: null
    description: 'Current page margins with the properties: top, right, bottom, left.'
    type: [Object]
parameters:
    - {name: top, description: 'Optional, top margin or all if only one.', optional: true, type: [Number]}
    - {name: right, description: 'Optional, right margin.', optional: true, type: [Number]}
    - {name: bottom, description: 'Optional, bottom margin.', optional: true, type: [Number]}
    - {name: left, description: 'Optional, left margin.', optional: true, type: [Number]}
    - {name: pageNumber, description: 'Optional, sets margins to selected page, currentPage() if left blank.', optional: true, type: [Number]}
kind: function
todo: null
examples: []

---