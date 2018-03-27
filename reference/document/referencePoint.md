---
layout: entry
title: referencePoint
codetitle: 'referencePoint([referencePoint])'
description: "Sets the reference point for transformations using the <code>transform()</code> function. The reference point will be used for all following transformations, until it is changed again. By default, the reference point is set to the top left.\nArguments can be the basil constants <code>TOP_LEFT</code>, <code>TOP_CENTER</code>, <code>TOP_RIGHT</code>, <code>CENTER_LEFT</code>, <code>CENTER</code>, <code>CENTER_RIGHT</code>, <code>BOTTOM_LEFT</code>, <code>BOTTOM_CENTER</code> or <code>BOTTOM_RIGHT</code>. Alternatively the digits 1 through 9 (as they are arranged on a num pad) can be used to set the anchor point. Lastly the function can also use an InDesign anchor point enumerator to set the reference point.\nIf the function is used without any arguments the currently set reference point will be returned."
category: Document
subcategory: Transformation
returns:
    name: null
    description: 'Current reference point setting.'
    type: [String]
parameters:
    - {name: referencePoint, description: 'The reference point to set.', optional: true, type: [String]}
kind: function
todo: null
examples: []

---
