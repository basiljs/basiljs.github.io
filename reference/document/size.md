---
layout: entry
title: size
codetitle: 'b.size([widthOrPageSize], [heightOrOrientation])'
description: "Sets the size of the current document, if arguments are given.\nIf only one argument is given, both the width and the height are set to this value.\nAlternatively, a string can be given as the first argument to apply an existing page size preset (\"A4\", \"Letter\" etc.).\nIn this case, either PORTRAIT or LANDSCAPE can be used as a second argument to determine the orientation of the page.\nIf no argument is given, an object containing the current document's width and height is returned."
category: Document
subcategory: null
returns:
    name: null
    description: 'Object containing the current <code>width</code> and <code>height</code> of the document.'
    type: [Object]
parameters:
    - {name: widthOrPageSize, description: 'The desired width of the current document or the name of a page size preset.', optional: true, type: [null]}
    - {name: heightOrOrientation, description: 'The desired height of the current document. If not provided the width will be used as the height. If the first argument is a page size preset, the second argument can be used to set the orientation.', optional: true, type: [null]}
kind: function
todo: null
examples:
    - {description: 'Sets the document size to 70 x 100 units', code: 'size(70, 100);'}
    - {description: 'Sets the document size to 70 x 70', code: size(70);}
    - {description: 'Sets the document size to A4, keeps the current orientation in place', code: 'size("A4");'}
    - {description: 'Sets the document size to A4, set the orientation to landscape', code: 'size("A4", LANDSCAPE);'}

---
