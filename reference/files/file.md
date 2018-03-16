---
layout: entry
title: file
codetitle: file(filePath)
description: "Returns a file object.\nNote that the resulting file object can either refer to an already existing file or if the file does not exist, it can create a preliminary \"virtual\" file that refers to a file that could be created later (i.e. by an export command)."
category: Files
subcategory: null
returns:
    name: null
    description: 'File at the given path.'
    type: [File]
parameters:
    - {name: filePath, description: 'The file path.', optional: false, type: [String]}
kind: function
todo: null
examples:
    - {description: 'Get an image file from the desktop and place it in the document', code: "var myImage = file(\"~/Desktop/myImage.jpg\");\nimage(myImage, 0, 0);"}
    - {description: 'Create a file and export it to the desktop', code: "var myExportFile = file(\"~/Desktop/myNewExportFile.pdf\");\nsavePDF(myExportFile);"}

---
