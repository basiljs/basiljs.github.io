---
layout: entry
title: arrange
codetitle: 'b.arrange(pItemOrLayer, positionOrDirection, [reference])'
description: 'Arranges a page item or a layer before or behind other page items or layers. If using the constants '
category: Document
subcategory: Page
returns:
    name: null
    description: 'The newly arranged page item or layer.'
    type: [PageItem, Layer]
parameters:
    - {name: pItemOrLayer, description: 'The page item or layer to be moved to a new position.', optional: false, type: [PageItem, Layer]}
    - {name: positionOrDirection, description: 'The position or direction to move the page item or layer. Can be <code>b.FRONT</code>, <code>b.BACK</code>, <code>b.FORWARD</code> or <code>b.BACKWARD</code>.', optional: false, type: [String]}
    - {name: reference, description: 'A reference object to move the page item or layer behind or in front of.', optional: true, type: [null]}
kind: function
todo: null
examples: []

---
