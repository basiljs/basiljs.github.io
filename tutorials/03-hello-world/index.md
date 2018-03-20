---
author: admin
layout: tutorial
title: "Hello World"
---

Open up the Adobe ExtendScript Editor, which is the script editor that comes with the Adobe Creative Suite. We will use this editor for our tutorials, but basically you could use any JavaScript editor.

Create a new file and save it to helloworld.jsx within your user folder. Copy and paste the following code into your newly created file. 


## Simple Hello World example

```
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  println( "Hello World!" );
}
```

The include statements found in this examples always have to be at the very beginning of each basil.js file. They will load the actual library from your basil.js installation.

Afterwards you will find two function blocks. setup() is pretty much the same as in Processing. It's the first user function that is called once right after your code is started. You should use this to initialize variables, etc. Afterwards the draw() function is executed. But unlike in Processing it is only called once, since basil.js is not interactive by default (There is an interactive mode available for advanced use though).

Now run the script... either by pressing the play button from within the ExtendScript editor or by double-clicking your script from the InDesign scripts panel. You will be able to read an output in the console of the ExtendScript editor saying "Hello World!".

No wonder, the statement

```
println( "Hello World!" );
```

is exactly meant for that. 

Printing to the console is nice, but actually far from what basil.js is designed for. We should output our Hello World message to an InDesign textbox!

---

## Hello World example using a textbox

```
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  doc();
  text("Hello World", 100, 100, 200, 50);
}
```

This is exactly what the example above is doing. Paste it over your existing code and run it by pressing play or double-clicking it from the scripts panel after saving. A text frame object will be added to your existing document - or if none was existing, a new document will be created - and filled with the Hello World message.

The `doc()` call makes sure that at least one document is open and the call to `text("Hello World", 100, 100, 200, 50);` will create a textframe with the default basil.js type settings (more on this in the typo tutorial), add it to the current layer and page, move it to 100, 100 (using the basil.js' default units), size it to 200, 50 and fill it with "Hello World!"

