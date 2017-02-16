---
layout: entry
title: characters()
description: 'If no callback function is given it returns a Collection of characters in the container otherwise calls the given callback function with each character of the given document, page, story, textFrame, paragraph, line or word.'
category: Document
subcategory: Multi-Getters
returns: 'You can use it like an array.'
parameters:
    - {name: container, description: "The document, page, story, textFrame, paragraph, line or word instance to\n                                                   iterate the characters in"}
    - {name: cb, description: 'Optional: The callback function to call with each character. When this function returns false the loop stops. Passed arguments: character, loopCount'}

---
If no callback function is given it returns a Collection of characters in the container otherwise calls the given callback function with each character of the given document, page, story, textFrame, paragraph, line or word.