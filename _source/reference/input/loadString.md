---
layout: entry
title: loadString
codetitle: 'loadString(file, [userAgent])'
description: 'Reads the contents of a file or loads an URL into a String. If the file is specified by name as string, the path can point either directly at a file in the document''s data directory or be specified as an absolute path.'
category: Input
subcategory: Files
returns:
    name: null
    description: 'String file or URL content.'
    type: [String]
parameters:
    - {name: file, description: 'The text file name in the document''s data directory or a File instance or an URL', optional: false, type: [String, File]}
    - {name: userAgent, description: 'Optional parameter when URL is used, to specify a user-agent making request.', optional: true, type: [String]}
kind: function
todo: null
examples: []

---
