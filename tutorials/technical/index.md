---
author: admin
layout: technical
title: "Technical details about basil.js"
---

## The tech facts:

basil.js is a wrapper for the most important and most design related functions of the existing Adobe InDesign JavaScript API. The aim of the project is to make scripting and automation available to designers and artists with little knowledge about programming.

We found out that the Java API of the co-existing software package “InDesign Server”, which is aimed at professional software engineers, has been the starting point for Adobe’s JavaScript API. We noticed that therefore its scripting API is especially hard to be learned and used by designers, who usually do not have much or any experience at all in programming.

While basil.js is in the spirit of Processing, in the details it is quite different. Processing is based on the Java language, running relatively low-level drawing commands on a Java Virtual Machine and painting pixels to the screen. You can do much more but in a nutshell that's the idea.

basil.js on the other hand is based on JavaScript and is meant to be an automation language for Adobe InDesign. That means that you are not drawing pixels to a canvas, but instead are adding and modifying high-level objects that sit in your InDesign project.

The good news is that JavaScript is an exciting language to learn, since it is the new standard in web programming and also supported by many other software packages. The bad news is that basil.js is by far fully compatible to Processing. This has mostly to do with the fact that we are simply serving another realm of applications as described above. Additionally JavaScript is quite a bit messier than Processing or Java, but on the other hand offers a number of powerful geeky features to advanced developers.


## What basil.js is for:

So if you cannot draw pixels to a canvas, what is this good for? Well, it's meant to be a meaningful addition for graphic designers who work on poster and book designs. While Processing is an extremely versatile environment your programmes are usually limited regarding the ease of use. For instance you cannot move items that you have drawn to the screen, manage them on layers easily, alter their appearance afterwards or simply save the current state of your project to your hard drive. Of course you can add all these functionalities, but you have to do it individually for each usage scenario on your own.

basil.js on the other hand is quite different. Since you always work on InDesign documents from the beginning you get all this convenience from the beginning. So you should ask yourself if you want to go wild with an experimental high-performance algorithm and just want to create some visual output or if you want to produce a project file that you can manually alter by hand, generate and modify by code, re-edit by hand, and so forth. Basil.js is meant for the latter.

It is worth mentioning that Scriptographer offers a well developed environment for Adobe Illustrator. While really liking their work we thought that it would be interesting to add this philosophy to InDesign as well since the target use is quite different. Unfortunately, Scriptographer has recently been stalled.
