---
layout: entry
title: loadCSV
codetitle: 'loadCSV(file, [delimiter])'
description: 'Reads the contents of a CSV file and returns a CSV-object array with the data. If the file is specified by name as string, the path can point either directly at a file in the document''s data directory or be specified as an absolute path.'
category: Input
subcategory: Files
returns:
    name: null
    description: 'The resulting data object.'
    type: [Object]
parameters:
    - {name: file, description: 'The CSV file name in the document''s data directory, an absolute path to a CSV file, a File instance or an URL.', optional: false, type: [String, File]}
    - {name: delimiter, description: 'optional character[s] used to separate data.', optional: true, type: [String]}
kind: function
todo: null
examples: []

---
