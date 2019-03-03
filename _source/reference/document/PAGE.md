---
layout: entry
title: page
codetitle: 'page([page])'
description: 'Returns the current page and sets it if argument page is given. If page is given as string, the page will be set to the page with this name (e.g. "4", "04", "D", "IV"). If the page is given as an integer, the page will be set to the page according to this number, no matter the actual naming of the page. Numbering starts with 1 in this case. If you pass a page item the current page will be set to its containing page. If this page item is off the page (on the pasteboard) the current page will be set to the first page of its containing spread.'
category: Document
subcategory: Page
returns:
    name: null
    description: 'The current page instance.'
    type: [Page]
parameters:
    - {name: page, description: 'The page number (as integer), page name or page object to set the current page to or an page item to refer to its containing page.', optional: true, type: [null]}
kind: function
todo: null
examples:
    - {description: 'Sets the current page to the third page of the document', code: page(3);}
    - {description: 'Sets the current page to the page named "004"', code: 'page("004");'}
    - {description: 'Sets the current page to the containing page of a rectangle', code: "var myRect = rect(100, 100, 200, 200);\npage(myRect);"}

---
