---
layout: entry
title: applyMasterPage
codetitle: 'applyMasterPage(page, master)'
description: "Applies a master page to the given page.\n\nThe `page` parameter can be given as a page object, as a page name or as a page number (numbering starts at 1).\n\nThe `master` parameter can be given as a master spread object or as a string. If a string is used, it can either hold the master page prefix (e.g \"A\", \"B\") or the full name *including* the prefix (e.g \"A-Master\", \"B-Master\"). The latter is useful, if there are several masters using the same prefix. Alternatively, the constant `NONE` can be used to apply InDesign's `[none]` master to the page and thus remove the previously applied master page from the page."
category: Document
subcategory: Page
returns:
    name: null
    description: 'The page the master page was applied to.'
    type: [Page]
parameters:
    - {name: page, description: 'The page to apply the master page to.', optional: false, type: [Number, String, Page]}
    - {name: master, description: 'The master page to apply.', optional: false, type: [String, MasterSpread]}
kind: function
todo: null
examples:
    - {description: 'Apply the master with prefix "B" to the documents third page', code: 'applyMasterPage(3, "B");'}
    - {description: 'In a document with master pages "A-Text" and "A-Images", apply "A-Images" to the current page', code: 'applyMasterPage(page(), "A-Images");'}
    - {description: 'Remove the master page from the page named "IV"', code: 'applyMasterPage("IV", NONE);'}

---
