---
layout: entry
title: stories
codetitle: 'stories(container, [cb])'
description: "Returns a collection of all story objects in the given document or returns the parent story of a certain element. These elements can be text frames or text objects.\nIf a callback function is given, `stories()` calls this callback function on each story object of the given document or on the parent story of the given element. When the callback function returns false, the loop stops and the `stories()` function returns an array of all stories up to this point."
category: Document
subcategory: Text
returns:
    name: null
    description: 'A collection or an array of Story objects.'
    type: [Stories, Array]
parameters:
    - {name: container, description: 'The document instance to iterate the stories in or the element whose parent story to get.', optional: false, type: [Document]}
    - {name: cb, description: 'Optional: The callback function to call with each story. When this function returns false the loop stops. Passed arguments: `story`, `loopCount`', optional: true, type: [Function]}
kind: function
todo: null
examples:
    - {description: null, code: "stories(container(), function(story, loopCount){\n  println(\"Number of words in each Story:\");\n  println(story.words.length);\n});"}

---
