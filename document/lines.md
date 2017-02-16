---
layout: entry
title: lines()
description: 'If no callback function is given it returns a Collection of lines in the container otherwise calls the given callback function with each line of the given document, page, story, textFrame or paragraph.'
category: Document
subcategory: Multi-Getters
returns: 'Array of lines.'
parameters:
    - {name: container, description: "The document, page, story, textFrame or paragraph instance to\n                                                  iterate the lines in"}
    - {name: cb, description: 'Optional: The callback function to call with each line. When this function returns false the loop stops. Passed arguments: line, loopCount'}

---
If no callback function is given it returns a Collection of lines in the container otherwise calls the given callback function with each line of the given document, page, story, textFrame or paragraph.