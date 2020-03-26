---
author: admin
layout: tutorial
title: "Download Images"
description: "Download images from the web and add them to your document."
---

Obviously you have to download a resources first, before you can you can make use of it in an indesign document.

For the download part basil.js provides a `download()` function. Depending where you want to save the file you have to set the second parameter (optional) eg.:

```js
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  var url = "https://raw.githucom/basiljs/basil.js/master/lib/basil.png";

  // download the url to a default location, filename according to url:
  // -> "the project folder" + data/download/basil.png
  download(url);

  // download url to a specific location in the project folder:
  // -> "the project folder" + data/download_images_files/basil_logo.png
  download(url, "download_images_files/basil_logo.png");

  // download url to a specific location e.g. to your desktop
  // -> ~/Desktop/basil_logo.png
  var newFile = new File("~/Desktop/basil_logo.png");
  download(url, newFile);
}
```

If you want to add afterwards the image to a document, you simply have to know where you've saved the file earlier. You can use for instance `image()` to add an image to the current page.

```js
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  download("https://raw.githucom/basiljs/basil.js/master/lib/basil.png", "download/basil.png");
  image("download/basil.png", 0, 0);
}

```
