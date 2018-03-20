---
layout: entry
title: arrange
codetitle: 'arrange(pItemOrLayer, positionOrDirection, [reference])'
description: 'Arranges a page item or a layer before or behind other page items or layers. If using the constants <code>FORWARD</code> or <code>BACKWARD</code> the object is sent forward or back one step. The constants <code>FRONT</code> or <code>BACK</code> send the object to the very front or very back. Using <code>FRONT</code> or <code>BACK</code> together with the optional reference object, sends the object in front or behind this reference object.'
category: Document
subcategory: Page
returns:
    name: null
    description: 'The newly arranged page item or layer.'
    type: [PageItem, Layer]
parameters:
    - {name: pItemOrLayer, description: 'The page item or layer to be moved to a new position.', optional: false, type: [PageItem, Layer]}
    - {name: positionOrDirection, description: 'The position or direction to move the page item or layer. Can be <code>FRONT</code>, <code>BACK</code>, <code>FORWARD</code> or <code>BACKWARD</code>.', optional: false, type: [String]}
    - {name: reference, description: 'A reference object to move the page item or layer behind or in front of.', optional: true, type: [null]}
kind: function
todo: null
examples: []

---