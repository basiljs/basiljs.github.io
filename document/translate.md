---
layout: entry
title: translate()
description: 'Specifies an amount to displace objects within the page. The x parameter specifies left/right translation, the y parameter specifies up/down translation. Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. For example, calling translate(50, 0) and then translate(20, 0) is the same as translate(70, 0). This function can be further controlled by the pushMatrix() and popMatrix().'
category: Document
subcategory: Transformation
returns: null
parameters:
    - {name: tx, description: 'The amount of offset on the X axis.'}
    - {name: ty, description: 'The amount of offset on the Y axis.'}

---
Specifies an amount to displace objects within the page. The x parameter specifies left/right translation, the y parameter specifies up/down translation. Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. For example, calling translate(50, 0) and then translate(20, 0) is the same as translate(70, 0). This function can be further controlled by the pushMatrix() and popMatrix().