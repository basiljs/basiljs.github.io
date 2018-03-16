---
layout: entry
title: stories
codetitle: 'stories(doc, [cb])'
description: 'If no callback function is given it returns a Collection of items otherwise calls the given callback function with each story of the given document.'
category: Document
subcategory: Multi-Getters
returns:
    name: null
    description: 'A collection of Story objects.'
    type: [Stories]
parameters:
    - {name: doc, description: 'The document instance to iterate the stories in', optional: false, type: [Document]}
    - {name: cb, description: 'The callback function to call with each story. When this function returns false the loop stops. Passed arguments: story, loopCount.', optional: true, type: [Function]}
kind: function
todo: null
examples:
    - {description: null, code: "stories(doc(), function(story, loopCount){\n  println(\"Number of words in each Story:\");\n  println(story.words.length);\n});"}

---
