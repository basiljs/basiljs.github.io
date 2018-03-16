---
layout: entry
title: folder
codetitle: 'folder([folderPath])'
description: "Returns a folder object.\nNote that the resulting folder object can either refer to an already existing folder or if the folder does not exist, it can create a preliminary \"virtual\" folder that refers to a folder that could be created later."
category: Files
subcategory: null
returns:
    name: null
    description: 'Folder at the given path. If no path is given, but the document is already saved, the document''s data folder will be returned.'
    type: [Folder]
parameters:
    - {name: folderPath, description: 'The path of the folder.', optional: true, type: [String]}
kind: function
todo: null
examples:
    - {description: 'Get a folder from the desktop and load its files', code: "var myImageFolder = folder(\"~/Desktop/myImages/\");\nvar myImageFiles = files(myImageFolder);"}
    - {description: 'Get the data folder, if the document is already saved', code: 'var myDataFolder = folder();'}

---
