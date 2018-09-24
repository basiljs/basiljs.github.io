---
author: admin
layout: tutorial
title: "Data - CSV"
description: "Reading data from external files in CSV format."
---

## CSV - Data to a circles

In this short tutorial we are going to use a dataset of the swimming pool count of all neighborhoods in Los Angeles to create a diagram of circles. The pool count of the individual  LA neighborhood will be encode to the area of the circles. Data courtesy [The Big Atlas of LA Pools](http://benedikt-gross.de/log/2013/06/the-big-atlas-of-la-pools/).

But first of all, what is a CSV file?

A CSV file is a text file with comma-separated values, think of a spreadsheet or a Microsoft Excel file. The first row in the file specifies the names of the columns, all other rows hold the data. If you open a CSV file in an text editor your should see something like this:
```
hoodname,poolcount
Long Beach,2859
Rancho Palos Verdes,2592
Beverly Hills,2481
 ...
```

### Preparations
- Create somewhere a folder for the tutorial and save a blank indesign file into that folder e.g. LA_Pools/circles.indd
- Create a data folder within the project folder to hold the data: LA_Pools/data/
- Get the [dataset](https://githucom/basiljs/basil.js/blob/master/examples/demos/B08_bar_chart_from_csv_data/data/LA_Pools-Pools_per_Hood.csv) and copy it to the data folder: LA_Pools/data/LA_Pools-Pools_per_Hood.csv

### Load the data
Loading the CSV data is basically just one line of code: 

```
CSV.decode(loadString("data.csv"));
```

Reading it from inside to outside reveals the following, loadString() just loads the entire content of the file into basil. CSV.decode() decodes then this content to columns and rows. The schema to get the data is: 

```
// data[row_number].column_name 
// get the 2nd row
println(data[2].hoodname); // -> Beverly Hills
println(data[2].poolcount); // –> 2481
```

As the CSV doesn't have types, it is not clear whether the data is a numbers or a string. Hence we have to take care that all columns of numbers are converted to the correct type. You can do that for instance with the functions [parseInt()](http://www.w3schools.com/jsref/jsref_parseint.asp) or [parseFloat()](http://www.w3schools.com/jsref/jsref_parsefloat.asp).

```
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  //load data
  var data = CSV.decode(loadString("LA_Pools-Pools_per_Hood.csv"));
  println("loaded " + data.length + " neighborhoods");

  // parse to numbers
  for (var i = 0; i < data.length; i++) {
    data[i].poolcount = parseInt(data[i].poolcount);
    println(i + " " + data[i].hoodname + " " + data[i].poolcount);
  };
}
```

### Draw the circles
After loading the data it is now time to draw the data. The poolcount value is mapped to the area of the circles with the function calcRadiusByArea(). The gird layout is created with the help of the two for loops. It takes a bit of fiddling around to come up with the right dimensions of 10 x 14 units to fit the layout onto the page, just play around with the for loops (e.g. change the values of the 10 and 14) ...  And last, labeling the circles was done with a combination of the hoodname and poolcount value.

```
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  // load & convert
  var data = CSV.decode(loadString("LA_Pools-Pools_per_Hood.csv"));
  for (var i = 0; i < data.length; i++) {
    data[i].poolcount = parseInt(data[i].poolcount);
  };

  // circles
  textSize(6);
  textAlign(CENTER_ALIGN);
  units(MM);

  var i = 0;
  var gridUnitSize = 20;
  var paddingBottom = 3

  for (var y = 0; y < 14; y++) {
    for (var x = 0; x < 10; x++) {
      var posX = x*gridUnitSize;
      var posY = y*(gridUnitSize+paddingBottom);

      var poolcount = data[i].poolcount;
      var radius =  calcRadiusByArea(poolcount) * 0.5; // scale down
      var diameter = radius * 2;
      ellipse(posX, posY, diameter, diameter);

      var hoodname = data[i].hoodname;
      text(hoodname + "n" + poolcount,
             posX-gridUnitSize/2, posY+radius+2,
             20,10);

      // stop drawing if no more rows are available
      if (i > data.length) break;

      i++;
    };
  };
}

function calcRadiusByArea(A){
  // A = Pi * r * r
  return Math.sqrt(A/Math.PI);
}
```

Your results should look similar to this one :)

The circle gird
  ![The circle gird](http://basiljs.ch/wp-content/uploads/2013/09/CSV_tutorial_01.png)

Cirlce layout detail
  ![Cirlce layout detail](http://basiljs.ch/wp-content/uploads/2013/09/CSV_tutorial_02.png)

