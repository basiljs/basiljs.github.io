---
layout: entry
title: masterPage
codetitle: 'masterPage(master, [pageIndex])'
description: "Sets a master page to be the active page. This can be used to set up and arrange page items on master pages, so they appear throughout the entire document.\n\nThe `master` parameter describes the master spread that contains the master page. It can be given as a master spread object or as a string. If a string is used, it can either hold the master page prefix (e.g \"A\", \"B\") or the full name *including* the prefix (e.g \"A-Master\", \"B-Master\"). The latter is useful, if there are several masters using the same prefix.\n\nAs master pages cannot directly be targeted by number, the optional `pageIndex` parameter can be used to specify which master page of the given master spread should be set as the active page, in case there are several pages on the master spread. Counting starts from 0, beginning from the leftmost page. If the `pageIndex` parameter is not given, the first page of the master spread is returned."
category: Document
subcategory: Page
returns:
    name: null
    description: 'The active master page.'
    type: [Page]
parameters:
    - {name: master, description: 'The master spread that contains the master page.', optional: false, type: [String, MasterSpread]}
    - {name: pageIndex, description: 'The index of the page on the master spread, counting from 0.', optional: true, type: [Number]}
kind: function
todo: null
examples:
    - {description: 'Set master page to be the first page of master "A".', code: 'masterPage("A");'}
    - {description: 'Set master page to be the second page of master "B".', code: 'masterPage("B", 1);'}
    - {description: 'Alternate way to set master page ot the second page of master "B".', code: "masterPage(\"B\");\nnextPage();"}

---
