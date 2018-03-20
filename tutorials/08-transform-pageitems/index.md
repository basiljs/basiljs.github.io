---
author: admin
layout: tutorial
title: "Transform PageItems"
---

```
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  doc();
  clear(doc());
  
  units(MM); // use millimeter
  noStroke();
  fill(100); // black
  
  var r = rect(50, 50, 30, 30);

  delay(1000); // this is just to make the individual steps visible
  
  transform(r, "position", [30, 0]);
  delay(1000);
  
  transform(r, "position", [0, 30]);
  delay(1000);
  
  transform(r, "position", [width/2, height/2]);
  delay(1000);

  transform(r, "width", 50);
  delay(1000);
  
  transform(r, "height", 50);
  delay(1000);  
  
  transform(r, "size", [30, 30]);
  delay(1000);  

  transform(r, "rotation", 45);
  delay(1000); 

  transform(r, "shearing", 15);
  delay(1000);  
  
  for (var i = 0; i < 50; i++) {
    var x = transform(r, "position").x;
    transform(r, "position", [x+2, 0]);
    delay(30); 
  }

  r.remove();

}
```
