---
author: admin
layout: tutorial
title: "Export PDF"
description: "Create hundreds of variation in a single InDesign project."
---

```
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  
  textSize(64);
  var tf = text("this content will be overwritten", width/2-250, height/2-150, 500, 300);
  
  for (var i = 0; i < 20; i++) {
    tf.contents = "hello pdf " + i;
    savePDF("hello-pdf-" + i + ".pdf");
  }
  
  // show export options
  //savePDF("hello.pdf",true);
}
```

- The InDesign document needs to be saved first so that basil.js knows where to put the exported PDF.
- The second parameter can turn on the export settings dialog for quality, etc
- If the second parameter is not given savePDF will use the previous export settings.

