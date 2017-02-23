---
layout: entry
title: bleeds
codetitle: 'b.bleeds([top], [right], [bottom], [left])'
description: 'Sets the document bleeds. If one value is given, all 4 are set equally. If 4 values are given, the top/right/bottom/left document bleeds will be adjusted. Calling the function without any values, will return the document bleed settings.'
category: Document
subcategory: Page
returns:
    name: null
    description: 'Current document bleeds settings.'
    type: [Object]
parameters:
    - {name: top, description: 'Optional, top bleed or all if only one.', optional: true, type: [Number]}
    - {name: right, description: 'Optional, right bleed.', optional: true, type: [Number]}
    - {name: bottom, description: 'Optional, bottom bleed.', optional: true, type: [Number]}
    - {name: left, description: 'Optional, left bleed.', optional: true, type: [Number]}
kind: function

---
