---
layout: entry
title: linkedTextFrames
codetitle: 'linkedTextFrames(item, [cb])'
description: "Returns an array of all linked text frames or text paths in relation to a given Text Frame, Text Path, Story or Text Object.\nIf a callback function is given, `textFrames()` calls this callback function on each text frame of the given container. When the callback function returns false, the loop stops and the `textFrames()` function returns an array of all text frames up to this point."
category: Document
subcategory: 'Page Items'
returns:
    name: null
    description: 'The array of linked text frames or text paths.'
    type: [Array]
parameters:
    - {name: item, description: 'The text frame, text path, story or text object of the text frame chain.', optional: false, type: [TextFrame, TextPath, Story, TextObject]}
    - {name: cb, description: 'The callback function to call with each text frame or text path. When this function returns false the loop stops. Passed arguments: `textFrame`, `loopCount`.', optional: true, type: [Function]}
kind: function
todo: null
examples: []

---
