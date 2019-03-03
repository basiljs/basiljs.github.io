---
layout: entry
title: files
codetitle: 'files([folder], [settings])'
description: "Gets all files of a folder and returns them in an array of file objects.\nThe settings object can be used to restrict the search to certain file types only, to include hidden files and to include files in subfolders."
category: Files
subcategory: null
returns:
    name: null
    description: 'Array of the resulting file(s). If no files are found, an empty array will be returned.'
    type: [Array]
parameters:
    - {name: folder, description: 'The folder that holds the files or a string describing the path to that folder.', optional: true, type: [null]}
    - {name: settings, description: 'A settings object to control the function''s behavior.', optional: true, type: [Object]}
    - {name: settings.filter, description: 'Suffix(es) of file types to include. Default: <code>"*"</code> (include all file types)', optional: true, type: [null]}
    - {name: settings.hidden, description: 'Hidden files will be included. Default: <code>false</code>', optional: true, type: [Boolean]}
    - {name: settings.recursive, description: 'Searches subfolders recursively for matching files. Default: <code>false</code>', optional: true, type: [Boolean]}
kind: function
todo: null
examples:
    - {description: 'Get a folder from the desktop and load all its JPEG files', code: "var myImageFolder = folder(\"~/Desktop/myImages/\");\nvar myImageFiles = files(myImageFolder, {filter: [\"jpeg\", \"jpg\"]});"}
    - {description: 'If the document is saved, load all files from its data folder, including from its subfolders', code: "var myDataFolder = folder();\nvar allMyDataFiles = files(myDataFolder, {recursive: true});"}

---
