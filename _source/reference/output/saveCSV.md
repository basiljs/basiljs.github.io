---
layout: entry
title: saveCSV
codetitle: 'saveCSV(file, data, [delimiter])'
description: 'Encodes a CSV-object array to multi-line strings and saves it to a CSV file. If the given file exists it gets overridden.'
category: Output
subcategory: Files
returns:
    name: null
    description: 'The CSV file the data was written to.'
    type: [File]
parameters:
    - {name: file, description: 'The file name or a File instance.', optional: false, type: [String, File]}
    - {name: data, description: 'The object to encode and save in the file.', optional: false, type: [Object]}
    - {name: delimiter, description: 'optional character[s] used to separate data.', optional: true, type: [String]}
kind: function
todo: null
examples: []

---
