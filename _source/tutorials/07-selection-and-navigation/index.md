---
author: admin
layout: tutorial
title: "Selection and Navigation"
description: "How to stroll around in the InDesign object model."
---

## Get the mouse selection

```
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
    var selItems = selections();
    
    // only use first item selected
    typo(selItems[0], "pointSize", 30);
    
    // for-loop
    for (var i = 0; i < selItems.length; i++) {
        println(selItems);        
        typo(selItems[i], "pointSize", 30);
    }

    // experts: use a looping callback
    selections(function(item, i){
             println(item);
             typo(item, "pointSize", 30);    
    });
}
```

- `selections()` returns all the selected PageItems or Text elements as an array of mixed items
- Please note that you will always receive an array, also if just one element is selected
- This a sensible strategy if you haven't created many things and they ended up being distributed all over the page
- Also good for changing certain items only that you select by e.g. aesthetical criteria

## Add, get and set a layer
```
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
    // add new layer
    var layer = layer("myLayer");
    ellipse(20,20,10,10);
    
    // set active layer
    layer(layer);
    // also possible:
    layer("myLayer");

    // delete the layer... remove() can be used with all PageItems
    layer.remove();  
}
```

- You can add layers with `layer()`
- You can also activate pre-existing layers
- Putting your new elements on clearly labelled layers is a clean way to keep your project tidy
- You can also use layers to select and alter the new items easily or set them to invisible

##Process all objects from a layer, page or document 
```
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
    // process all items on a layer
    var items = items(layer("fancy"));
    for (var i = 0; i < items.length; i++) {
        println(items[i]);
    }
    
    // process all items on a page
    var items = items(page(1));
    for (var i = 0; i < items.length; i++) {
        println(items[i]);
    }
    
    // process all items in document
    var items = items(doc());
    for (var i = 0; i < items.length; i++) {
        println(items[i]);
    }
}
```

- `items()` allows you to process everything on a Layer, in a Group, on a Page or in a Document

<!--
## Changing strokeColor, strokeWeight and fillColor on existing items
```
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

    var items = items(layer("fancy"));
    
    for (var i = 0; i < items.length; i++) {
        items[i].strokeWeight = 3;
        items[i].strokeColor = color(255,0,0,"myRed");
        items[i].fillColor = color(0,0,255,"myBlue");
    }
    
}
```
-->

## Attaching labels to created items
```
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
    // the following methods return the PageItem they create
    // thus you can set their label directly after their method call
    ellipse(20,20,5,5).label = "dynamic";
    ellipse(20,20,5,5).label = "dynamic";
    text("hihi",20,20,20,20).label = "dynamic";
    rect(20,20,5,5).label = "dynamic";
    line(20,20,50,50).label = "dynamic";

    // this way, you can access them by calling their name
    // please note that labels() always returns an array
    var items = labels("dynamic");
    
    // you can use forEach() to do something with all of these items
    for (var i = 0; i < items.length; i++) {
        println(items[i]);
    }
    
    // or you address them individually
    transform(items[0], "position", [100, 0]);
}
```

- Labels can be attached to PageItems by code or mouse using the Script Label panel in InDesign
- Since labels are a bit hard to find in the GUI they should only be used if layers don't work for your endeavour

<!-- 
## Set selection by code
how to do this?
select() is cancelling selection on previously selected things...
-->


<!-- ## How to use the Adobe Object Model and work with collections -->

## Cleaning up and removing stuff
```
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
   // clears the given layer
   clear(layer("fancy"));
   // fully delete a layer
   layer("fancy").remove();
   // clears the given page
   clear(page());   
   // clears the document
   clear(doc());
}
```
