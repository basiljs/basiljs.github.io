---
author: admin
layout: tutorial
title: "Syntax Check basil.js vs. Processing"
description: "JavaScript basics and differences between writing in basil.js and Processing."
---

## Similarities between basil.js and Processing

Since Java and JavaScript are quite similar programming languages you do not have to start from scratch at all when you move from Processing to basil.js. This section covers the similarities between both.

### Comments

```js
// This is an inline comment
/* This is a block comment,
that can go over several lines */
```

### if / else conditions

```js
if ( a > 3 ) { 
  // execute if a is bigger than 3
} else {
 // execute if a is smaller or equal to 3
}
```

### Logical comparisons

```js
a == b // equal
a === b // Little difference to Java: You can check for same data type as well in... to be VERY sure
a != b // not equal
a > b // bigger than
a < b // smaller than
a >= b // bigger or equal
a <= b // smaller or equal

// You can combine statements with logical AND "&&" resp. the logical OR "||"
if (  a == b && b == c ) { ... } // AND
if (  a == b || b == c ) { ... } // OR
```

### Operators and assignments

```js
// +, -, *, / // addition, substraction, multiplication and division at your fingertips...
foo = foo + 5; // increases the variable foo by 5
foo += 5; // a short version of foo = foo + 5;
foo++; // even shorter version for foo = foo + 1;
```

## Differences between basil.js and Processing

Writing JavaScript for Adobe InDesign is quite a different context than Java. In this section we will look at things that are different between basil.js and Processing.

### Basic program structure

```js
// In basil.js

// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function setup() {
}

function draw() {
}
```

```java
// vs. Processing

void setup() {
}

void draw() {
}
```

- You need to explicitly include our library in each sketch.
- Unlike in Processing the `draw()` function is also called only once, right after `setup()`.
- There is an experimental interactive mode available that is calling the `draw()` function at a set interval.

### Variables and data types

```js
// In basil.js
var myNumber = 5; // Integers...
var myNumber = 3.0; // Floats...
var myString = "Hello Basil"; // Strings...
var myLove = true; // and Booleans are all stored to the "var" type
```

```java
// vs. Processing
int myNumber = 5;
float myNumber = 3.0;
String myString = "Hello Basil";
boolean myLove = true;
```

- JavaScript doesn't require you to declare the data type of your variables. Just use var.

### Defining and using functions

```js
// In basil.js
function myFunction (param1, param2){
  // code within the brackets has access to param1 and param2 and will be executed...
}
myFunction(234, "Some String");
```

```java
// vs. Processing
void myFunction( int param1, String param2 ){
  // code within the brackets has access to param1 and param2 and will be executed...
}
myFunction(234, "Some String");
```

- Functions work quite similar besides the fact that they you do not have to declare any argument or return data types.

### for-loops

```js
// In basil.js
for( var i = 0; i < 100; i++  )
{
  println( i ); // prints 100 numbers counting upwards
}
```

```java
// vs. Processing
for( int i = 0; i < 100; i++  )
{
  println( i ); // prints 100 numbers counting upwards
}
```

- Again almost the same... only a small difference in the declaration of the counting variable

## Further resources 

[https://github.com/processing/p5.js/wiki/Processing-transition](https://github.com/processing/p5.js/wiki/Processing-transition)