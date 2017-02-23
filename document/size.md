---
layout: entry
title: size
codetitle: 'b.size(width, [height])'
description: "Sets the size of the current document, if arguments are given.\nIf only one argument is given, both the width and the height are set to this value.\nIf no argument is given, an object containing the current document's width and height is returned."
category: Document
subcategory: null
returns:
    name: null
    description: 'if no argument is given it returns an object containing the current width and height of the document.'
    type: [Object]
parameters:
    - {name: width, description: 'The desired width of the current document.', optional: false, type: [Number]}
    - {name: height, description: 'Optional the desired height of the current document. If not provided the width will be used as the height.', optional: true, type: [Number]}
kind: function

---
