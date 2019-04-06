---
layout: entry
title: mode
codetitle: mode(mode)
description: "Used to set the performance mode. While modes can be switched during script execution, to use a mode for the entire script execution, `mode()` should be placed in the beginning of the script. In basil there are three different performance modes:\n\n- `VISIBLE` is the default mode. In this mode, during script execution the document will be processed with screen redraw, allowing to see direct results during the process. As the screen needs to redraw continuously, this is slower than the other modes.\n- `HIDDEN` allows to process the document in background mode. The document is not visible in this mode, which speeds up the script execution. In this mode you will likely look at InDesign with no open document for quite some time – do not work in InDesign during this time. You may want to use `println(\"yourMessage\")` in your script and look at the console to get information about the process. Note: In order to enter this mode either a saved document needs to be open or no document at all. If you have an unsaved document open, basil will automatically save it for you. If it has not been saved before, you will be prompted to save it to your hard drive.\n- `SILENT` processes the document without redrawing the screen. The document will stay visible and only update once the script is finished or once the mode is changed back to `VISIBLE`."
category: Structure
subcategory: null
returns: null
parameters:
    - {name: mode, description: 'The performance mode to switch to.', optional: false, type: [String]}
kind: function
todo: null
examples: []

---
