---
layout: entry
title: margins()
description: 'Sets the margins of a given page. If 1 value is given, all 4 sides are set equally. If 4 values are given, the current page will be adjusted. Adding a 5th value will set the margin of a given page. Calling the function without any values, will return the margins for the current page.'
category: Document
subcategory: Page
returns: 'Current page margins with these properties: top, right, bottom, left'
parameters:
    - {name: top, description: 'Top margin or all if only one'}
    - {name: right, description: 'Right margin'}
    - {name: bottom, description: 'Bottom margin'}
    - {name: left, description: 'Left margin'}
    - {name: pageNumber, description: 'Sets margins to selected page, currentPage() if left blank'}

---
Sets the margins of a given page. If 1 value is given, all 4 sides are set equally. If 4 values are given, the current page will be adjusted. Adding a 5th value will set the margin of a given page. Calling the function without any values, will return the margins for the current page.