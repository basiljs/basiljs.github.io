---
layout: entry
title: canvasMode
codetitle: b.canvasMode(mode)
description: "Use this to set the dimensions of the canvas. Choose between b.PAGE (default), b.MARGIN, b.BLEED resp. b.FACING_PAGES, b.FACING_MARGINS and b.FACING_BLEEDS for book setups with facing page. Please note: Setups with more than two facing pages are not yet supported.\nPlease note that you will loose your current MatrixTransformation. You should set the canvasMode before you attempt to use b.translate(), b.rotate() and b.scale();"
category: Document
subcategory: Page
returns:
    name: null
    description: 'The current canvas mode.'
    type: [String]
parameters:
    - {name: mode, description: 'The canvas mode to set.', optional: false, type: [String]}
kind: function
todo: null
examples: []

---
