---
layout: entry
title: selectFile
codetitle: 'selectFile([settings])'
description: 'Opens a selection dialog that allows to select one file. The settings object can be used to add a prompt text at the top of the dialog, to restrict the selection to certain file types and to set the dialog''s starting folder.'
category: Files
subcategory: null
returns:
    name: null
    description: 'The selected file. If the user cancels, <code>null</code> will be returned.'
    type: [File, 'Null']
parameters:
    - {name: settings, description: 'A settings object to control the function''s behavior.', optional: true, type: [Object]}
    - {name: settings.prompt, description: 'The prompt text at the top of the file selection dialog. Default: <code>""</code> (no prompt)', optional: true, type: [String]}
    - {name: settings.filter, description: 'String or an array containing strings of file endings to include in the dialog. Default: <code>""</code> (include all)', optional: true, type: [null]}
    - {name: settings.folder, description: 'Folder or a folder path string defining the start location of the dialog. Default: most recent dialog folder or main user folder.', optional: true, type: [null]}
kind: function
todo: null
examples:
    - {description: 'Open file selection dialog with a prompt text', code: 'selectFile({prompt: "Please select a file."});'}
    - {description: 'Open selection dialog starting at the user''s desktop, allowing to only select PNG or JPEG files', code: 'selectFile({folder: "~/Desktop/", filter: ["jpeg", "jpg", "png"]});'}

---
