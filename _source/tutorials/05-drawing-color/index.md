---
author: admin
layout: tutorial
title: "Drawing and Colors"
description: "Adding new shapes and color swatches."
---

## General information

- basil.js does not have a screen or canvas
- You cannot draw pixels
- Instead you add InDesign objects to your pages
- These can be used normally within InDesign afterwards
- And you can undo them!


### 1. Filling the paper with a rect() by reading its size
```js
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  println( "width " + width );
  println( "height " + height );
  rect(0, 0, width, height);
};
```

- As there is no `background()` command in basil.js you should use `rect()` in order to change the background color.

### How to account for margins or bleed settings

```js
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
    noFill();
    stroke(0, 255, 0);

    canvasMode(MARGIN);
    rect(0, 0, width, height);

    canvasMode(PAGE);
    rect(0, 0, width, height);
    
    canvasMode(BLEED);
    rect(0, 0, width, height);    

   //  the following examples only work for documents with facing pages
   canvasMode(FACING_MARGINS); 
   rect(0, 0, width, height);

   canvasMode(FACING_PAGES);
   rect(0, 0, width, height);

   canvasMode(FACING_BLEEDS); 
   rect(0, 0, width, height);

}
```

- Using different canvas modes will position the origin of the coordinate system (think 0,0) to the appropriate spots in the canvas. 
- Additionally `width` and `height` will be updated to reflect the new size of the canvas. 
- You can still use other spots of the canvas with extreme coordinates as the canvas modes are not limiting you down to them.

### 2. Generate several swatches with color() and paint with rect()
```js
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  colorMode(RGB); // this is the default anyways

  // create new RGB color
  var red = color(255, 2, 3); // variables can store data to be reused later
  var green = color(0, 255, 0, "green");

  fill(red);
  rect(0, 0, width, 50);
  fill(green);
  rect(0, 50, width, 50);

  // create new CMYK color
  var magenta = color(1, 100, 3, 4);
  var yellow = color(0, 0, 100, 0, "yellow");
  var grey = color(100);
  var lightGrey = color(5, "light grey");

  fill( magenta );
  rect(0, 200, width, 50);
  fill( yellow );
  rect(0, 250, width, 50);
  fill( grey );
  rect(0, 300, width, 50);
  fill( lightGrey );
  rect(0, 350, width, 50);

  // get a color from document
  var black = color("Black");
  fill(black);
  rect(0, 500, width, 50); 
}
```

- `color()` can accept between one and five parameters.
- basil.js uses the number of given color channels to decide whether to create a RGB or CMYK color.
- If the arguments do not clearly define the desired type of color then the current basil.js color mode is used.
- The default basil.js color mode is RGB
- Please note that CMYK takes channel numbers between 0-100 where higher is darker (subtractive color), while RGB takes numbers between 0-255 where lower is darker (additive color).
<!-- Exercise: Create a horizontal rainbow -->

### 3. Using random() to pick a color and fill the background
```js
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  // create new random RGB color
  var newRandomColor = color(random(255), random(255), random(255));

  // fill rect with it
  fill(newRandomColor);
  rect(0, 0, width, height);
}
```


### 4. Using line() to create a cross
```js
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  stroke(100);
  strokeWeight(5);
  // draw a cross 
  line(0, 0, width, height);
  line(0, height, width, 0);
}
```

<!--  Exercise: Create a Haus of Nikolaus -->

### 5. Using random() and ellipse() to fill the page with circles
```js
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  var count = 23;

  doc();
  println(width + " x " + height);

  for (var i = 0; i < 23; i++) {
    var x = random(0, width);
    var y = random(0, height);
    var size = random(10, 123);
    ellipse(x, y, size, size);
  }
}
```

- This creates confetti


### 6. Using a for-loop and map() to create a gradient
```js
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  var counter = 50;
  noStroke();
  var rectHeight = height/counter;

  for (var i = 0; i < counter; i++) {
    var y = map(i, 0, counter-1, 0, height - rectHeight);
    var fillTint = map(i, 0, counter-1, 100, 0);

    fill(fillTint);
    rect(0, y, width, rectHeight);
  }
}
```


### 8. Using random() and nested for loops to create a matrix of lines 
```js
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  var tileCount = 10;
  var randomX = random(0, width);
  var randomY = random(0, height);

  strokeWeight(1);

  for (var gridY = 0; gridY <= tileCount; gridY++) {
    for (var gridX = 0; gridX <= tileCount; gridX++) {
      var posX =  width / tileCount * gridX;
      var posY = height / tileCount * gridY;
      line(posX, posY, randomX, randomY);
    }
  }

};
```