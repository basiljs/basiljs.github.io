---
author: admin
layout: tutorial
title: "Export PDF"
description: "Create hundreds of variation in a single InDesign project."
---

```js
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw(){
  pageCount(1); // clear any previous pages
  var numPages = 10; // set number of pages to generate

  for (var i=0; i < numPages; i++) {
    if(i > 0){
      addPage(); // add new page if not first page
    }
    textSize(10 + i * 10);
    text("page " + (i + 1), 0, 0, width, height);
  }

  savePDF("PDFdemo_" + timestamp() + ".pdf"); // exports file with current PDF settings
  // savePDF(timestamp()+".pdf", true); // brings up dialog box for PDF settings
}
```

- The InDesign document needs to be saved first, so basil.js knows where it can export the pdf.
- The second parameter activates the PDF export dialog for adjusting export settings.
- If the second parameter is not given `savePDF()` will use the previous export settings.

