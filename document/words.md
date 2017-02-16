---
layout: entry
title: words()
description: 'If no callback function is given it returns a Collection of words in the container otherwise calls the given callback function with each word of the given document, page, story, textFrame, paragraph or line.'
category: Document
subcategory: Multi-Getters
returns: 'Array of Words.'
parameters:
    - {name: container, description: "The document, page, story, textFrame, paragraph or line instance\n                                                       to iterate the words in"}
    - {name: cb, description: 'Optional: The callback function to call with each word. When this function returns false the loop stops. Passed arguments: word, loopCount'}

---
If no callback function is given it returns a Collection of words in the container otherwise calls the given callback function with each word of the given document, page, story, textFrame, paragraph or line.