---
author: admin
layout: tutorial
title: "Page Management"
description: "How to add, remove, count and manage the pages of your document."
---

## Adding pages 
```js
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
    // add one page at the end of the document and jump to it
    addPage();
    text("Example 1", width/2, height/2, 100, 100);
}
```

## Removing pages
```js
// removes current page
removePage();
    
// fill up again...
addPage();

// removes page 1
removePage(1);
```

## Using references to pages
```js
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
    var myPage = addPage();
    var myTextFrame = text("hello world", 20, 20, 100, 20); // add a text frame on that page
    page(1); // leave that page
    page(myTextFrame); // go to the page where this PageItem sits

    // removes myPage right away... you won't see it ever
    removePage(myPage);
}
```

- `addPage()` and `page()` return a reference to the new or determined page that you can store in a variable.
- You can pass a PageItem such as a TextFrame to `page()` in order to jump to the page that contains the given PageItem

## Populating larger documents and adding between pages
```js
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
    // run this on an empty document with only one page!

    // add pages until 20
    for (var i = pageCount(); i < 20; i++) {        
        addPage();
        text("Example 2-" + i, width/2, height/2, 100, 100);
    }
    
    // set location of insertion
    addPage(AT_END); // default
    text("Example AT_END", width/2, height/2, 100, 100);
    addPage(AT_BEGINNING); 
    text("Example AT_BEGINNING", width/2, height/2, 100, 100);
      
    // adds a page before page 15
    page(10); // set current page
    addPage(BEFORE); // this refers to the current page
    text("Example BEFORE 10 becomes the new 10", width/2, height/2, 100, 100);

    // guess what!
    page(15);
    addPage(AFTER); 
    text("Example AFTER 15 becomes 16", width/2, height/2, 100, 100);

    println(pageCount());
}
```

-  This example raises the page count to 20
- You can use AT_END, AT_BEGINNING, BEFORE and AFTER to define where the new page should be inserted
