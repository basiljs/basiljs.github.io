---
layout: entry
title: paragraphs()
description: 'If no callback function is given it returns a Collection of paragraphs in the container otherwise calls the given callback function with each paragraph of the given document, page, story or textFrame.'
category: Document
subcategory: Multi-Getters
returns: 'Array of Paragraphs.'
parameters:
    - {name: container, description: 'The document, story, page or textFrame instance to iterate the paragraphs in'}
    - {name: cb, description: 'Optional: The callback function to call with each paragraph. When this function returns false the loop stops. Passed arguments: para, loopCount'}

---
If no callback function is given it returns a Collection of paragraphs in the container otherwise calls the given callback function with each paragraph of the given document, page, story or textFrame.