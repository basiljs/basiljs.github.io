---
layout: entry
title: selectFolder
codetitle: 'b.selectFolder([settings])'
description: 'Opens a selection dialog that allows to select a folder. The settings object can be used to add a prompt text at the top of the dialog and to set the dialog''s starting folder.'
category: Files
subcategory: null
returns:
    name: null
    description: 'The selected folder. If the user cancels, <code>null</code> will be returned.'
    type: [Folder, 'Null']
parameters:
    - {name: settings, description: 'A settings object to control the function''s behavior.', optional: true, type: [Object]}
    - {name: settings.prompt, description: 'The prompt text at the top of the folder selection dialog. Default: <code>""</code> (no prompt)', optional: true, type: [String]}
    - {name: settings.folder, description: 'Folder or a folder path string defining the start location of the dialog. Default: most recent dialog folder or main user folder.', optional: true, type: [null]}
kind: function
todo: null
examples:
    - {description: 'Open folder selection dialog with a prompt text', code: 'selectFolder({prompt: "Please select a folder."});'}
    - {description: 'Open folder selection dialog starting at the user''s desktop', code: 'selectFolder({folder: "~/Desktop/"});'}

---
