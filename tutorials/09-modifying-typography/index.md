---
author: admin
layout: tutorial
title: "Modifying Typography"
description: "Changing InDesign text programatically."
---

## 1. Getting started with type

### Add basic text box
```
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  clear(doc()); // clears previous output, helpful during this tutorial

  // text("your text", x, y, w, h);
  text("hello world", 0, 0, 150, 50); 
}
```

Visit our reference section on [`text()`](http://basiljs.ch/reference/#text) for additional typographic functions.

### Change type attributes
Add these one at a time *before* your text frame, as they only effect proceeding `text()`.
```
textFont("Helvetica", "Regular"); 
// copy name exactly as found when selecting fonts by pull-down menu
// optional 2nd param to specify font-weight

textSize(48);
textTracking(500);
```

### Overflowing text
If the font gets too big, you'll see that the type is now flowing past the bounds of the box, so let's resize it. In order to change the TextFrame we just built, we need to create it as a variable so that we can easily refer to it later. To do this, simply changing the following:

```
// text("hello world", 0, 0, 350, 50);
var myFrame = text("hello world", 0, 0, 350, 50);
```

Note the 'var myFrame = ' placed in front of our text() code.<br>
We can now refer to it and resize it, by writing the following after our manipulations:
```
transform(myFrame, "size", [width, height]);
```

The bounding box is now as big as our page's width + height.
### Styling those contents

Now that you can refer to your text frame, let's change further attributes inside using the all encompassing `typo()` function:
```
typo(myFrame, 'pointSize', 100);
typo(myFrame, 'strikeThru', true); // add strike through
typo(myFrame, 'characterRotation', -45); // add strike through
```

### Exercise 1
Download our [typo cheat sheet](../assets/files/basiljs_b_typo_cheatsheet_v0_2.pdf)

Go through the list and pick additional properties to manipulate. <br>
Suggestion: Add a longer text to your initial text frame to have more material to work with.

***

## 2. Linking Text Frames + Aligning Text

If creating a generative book across multiple pages, you'll surely want to know how to link text frames together. 

Start with a new document and let's build two very generative text frames 

```
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  clear(doc()); // clears previous output

  var myFrame1 = text("this is frame 1", random(width), random(height), random(30, 300), random(30, 300));
  var myFrame2 = text("this is frame 2", random(width), random(height), random(30, 300), random(30, 300));
}

```

To link these text boxes, you simply write the following after they have been created:

```
linkTextFrames(myFrame1, myFrame2);
```

If you saw the type leave myFrame2 and join myFrame1, then they have been properly linked.<br>
Just to test out that it's working, try flowing some placeholder text through the two text frames:

```
typo(myFrame1, "contents", ""); // clear the current text
myFrame1.contents = TextFrameContents.placeholderText;
```

This should not only erase the existing contents of the two boxes, but then fill them entirely with Lorem Ipsum text.

### Aligning Text
When setting the justification of type, there are two options: set it before you build your text frame or use typo() to set it afterwards. <br>
Each can be set in the following way:

Before you generate the text frame

```
textAlign(CENTER_ALIGN);
// var myFrame1 = text("this is frame 1", 30, 30, 300, 300);
```

After you've generated the text frame

```
// var myFrame1 = text("this is frame 1", 30, 30, 300, 300);
typo(myFrame1, "justification", Justification.CENTER_ALIGN);
```

Refer to the following list for setting various justifications:

  - Justification.AWAY_FROM_BINDING_SIDE
  - Justification.CENTER_ALIGN
  - Justification.CENTER_JUSTIFIED
  - Justification.FULLY_JUSTIFIED
  - Justification.LEFT_ALIGN
  - Justification.RIGHT_ALIGN
  - Justification.RIGHT_JUSTIFIED
  - Justification.TO_BINDING_SIDE

  - VerticalJustification.BOTTOM_ALIGN
  - VerticalJustification.CENTER_ALIGN
  - VerticalJustification.JUSTIFY_ALIGN
  - VerticalJustification.TOP_ALIGN

Note: vertical justification of a text frame should be done before generating it, also using the [`textAlign()`](http://basiljs.ch/reference/#textAlign) function.

```
textAlign(Justification.FULLY_JUSTIFIED, VerticalJustification.CENTER_ALIGN);
```

### Exercise 2
Generate an interesting composition of of text frames throughout the page or document and link them all together. Change each text frames justification to fit your composition. Use the `typo()` + "contents" function to replace your text within your composition with any larger body of text.

Hint: Be sure to create all new text boxes with at least one empty space as initial text (" "), because InDesign automatically removes a newly created empty text box, assuming it was a mistake.

***

## 3. Break it all apart
Manipulating the entire block is fun and all, but hardly demonstrates a reason to stop using the mouse and GUI of inDesign. It's when we break down and isolate each and every element within a text frame that the power of programming really begins to shine.

### Working from a selection
As you begin to learn how to use basil.js, it may be helpful to revisit old projects that were designed by hand/mouse and manipulate the contents of objects by simply selecting them and running your code. 

Incase you are not opening an old project, create a new document and place a new text frame across the entire page. Fill this text frame with placeholder type, and continue. 

To begin let's get our selected text frame or text into something that we can refer to by code, a variable:

```
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  selItems = selections()[0];  
}
```

This code is looking for an object or text that is selected and grabs the very first one [0], just incase multiple items were selected.

Next let's break the selection down and isolate every single word within the text. Todo this, we have two ways to walk forward. Both accomplish the exact same task, but approach it quite differently.  

```
words(selItems, function(w, n){
  typo(w, "pointSize", n+1);
});
```

The snippet above is the most efficient way to cycle through all of the words, of mySel, build a special function, in which 'w' refers to each word and 'n' refers to their placement in order. The end result will be a growing cascade of type, using the words order to set it's size. 

Think about how long that would take you with the mouse...!

```
var myWords = words(selItems);

for (var i = 0; i < myWords.length; i++) {
  typo(myWords[i], "pointSize", i+1);
}

println(myWords[3].contents);

```

This second snippet is not as compact, but more flexible for further use. By using the words() function on it's on (not embedding a function like above), it allows you to create an array (or grouping) of objects to refer to later. Once we have our array called myWords, we use a for loop to also cycle through each of these words (it repeats until hitting the end or myWords.length). Within this loop, we do the exact same typo() function for the pointSize. So why is this one more useful? Because once we are done with our loop, we can easily refer to just one of these words and change/view/print it's contents.

### Exercise 3
Explore the various ways of isolating content within your text frame:

- paragraphs()
- lines()
- words()
- characters()

and test different combinations of modifying the content based on typo() or other attributes as listed above.

***

## 4. Example - Website typo
Here is a quick script demonstrating how to recreate the headlines as seen on this website:

```
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  selItems = selections();

  charCount = selItems.characters().length;
  characters(selItems[0], function (ch, n) {

    // map font size range by the length of characters there are
    var shrinkText = map(n, 0, charCount, 60, 20);

    typo(ch, "appliedFont", "Times New Roman\tBold");
    typo(ch, "pointSize", shrinkText);
    typo(ch, "underline", true);
  });
}
```
