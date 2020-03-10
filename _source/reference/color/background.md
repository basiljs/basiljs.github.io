---
layout: entry
title: background
codetitle: background(bgColor)
description: 'Sets a background on the current page. The function takes the current canvas mode into account, so setting canvas mode to `FACING_PAGES` beforehand would result in the background to be drawn across the entire spread. The background will be placed on a background layer that basil creates automatically.'
category: Color
subcategory: null
returns:
    name: null
    description: 'The newly created background shape.'
    type: [Rectangle]
parameters:
    - {name: bgColor, description: 'Accepts a color/gradient/swatch as string name or variable. Or values: GRAY / R,G,B / C,M,Y,K.', optional: false, type: [Color, Gradient, Swatch, Numbers, String]}
kind: function
todo: null
examples: []

---
