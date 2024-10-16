---
layout: entry
title: selectFiles
codetitle: 'selectFiles([settings])'
description: 'Opens a selection dialog that allows to select one or multiple files. The settings object can be used to add a prompt text at the top of the dialog, to restrict the selection to certain file types and to set the dialog''s starting folder.'
category: Input
subcategory: Files
returns:
    name: null
    description: 'Array of the selected file(s). If the user cancels, an empty array will be returned.'
    type: [Array]
parameters:
    - {name: settings, description: 'A settings object to control the function''s behavior.', optional: true, type: [Object]}
    - {name: settings.prompt, description: 'The prompt text at the top of the file selection dialog. Default: `""` (no prompt)', optional: true, type: [String]}
    - {name: settings.filter, description: 'String or an array containing strings of file endings to include in the dialog. Default: `""` (include all)', optional: true, type: [null]}
    - {name: settings.folder, description: 'Folder or a folder path string defining the start location of the dialog. Default: most recent dialog folder or main user folder.', optional: true, type: [null]}
kind: function
todo: null
examples:
    - {description: 'Open file selection dialog with a prompt text', code: 'selectFiles({prompt: "Please select your files."});'}
    - {description: 'Open selection dialog starting at the user''s desktop, allowing to only select PNG or JPEG files', code: 'selectFiles({folder: "~/Desktop/", filter: ["jpeg", "jpg", "png"]});'}

---
