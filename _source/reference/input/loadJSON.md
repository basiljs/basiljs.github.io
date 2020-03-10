---
layout: entry
title: loadJSON
codetitle: 'loadJSON(file, [userAgent])'
description: 'Reads the contents of a JSON file and returns an object with the data. If the file is specified by name as string, the path can point either directly at a file in the document''s data directory or be specified as an absolute path.'
category: Input
subcategory: Files
returns:
    name: null
    description: 'The resulting data object.'
    type: [Object]
parameters:
    - {name: file, description: 'The JSON file name in the document''s data directory, an absolute path to a JSON file, a File instance or an URL.', optional: false, type: [String, File]}
    - {name: userAgent, description: 'Optional parameter when URL is used, to specify a user-agent making request.', optional: true, type: [String]}
kind: function
todo: null
examples: []

---
