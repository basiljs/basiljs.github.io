---
date: 2012-11-13 23:35:22+00:00
layout: default
title: download
order: 1
---

## Download basil.js

The basil.js bundle:
[basil.js-1.0.10-bundle](/assets/releases/basil.js-1.0.10.zip)

Download the bundle above and follow
the steps in our [installation guide](/tutorials/01-getting-started) at our tutorials section.

## Cheatsheets and References

The basil.js cheatsheet:
[basiljs-cheatsheet-0.3](/assets/files/basiljs-cheatsheet.pdf)

The basil.js InDesign Object Model:
[basiljs-IOM-0.2](/assets/files/basiljs-IOM-0.2.pdf)

The basil.js b.typo cheatsheet:
[basiljs_b_typo_cheatsheet_v0_2.pdf](/assets/files/basiljs_b_typo_cheatsheet_v0_2.pdf)

## Source code

Please note that basil.js is provided as open-source under the [MIT License](http://opensource.org/licenses/MIT).

Designers and developers who are interested in the "bleeding edge"
are welcome to use our Git repository at [https://github.com/basiljs/basil.js](https://github.com/basiljs/basil.js)

Deprecated basil.js versions can still be downloaded from Github:
[https://github.com/basiljs/basil.js/tags](https://github.com/basiljs/basil.js/tags)

Please contact ludwig.zeller -a-t- fhnw.ch for pull and feature requests.

## Change log


<blockquote>+ new
* changed
- removed</blockquote>


..- --.- ..- -.... -..-- .-..-. -.-..---.-.-....--.-- -....-.... -..-- .-
**basil.js 1.0.10 - 29 April 2016**


<blockquote>+ Added package.json definition
* Changed versioning scheme to npm style</blockquote>


..- --.- ..- -.... -..-- .-..-. -.-..---.-.-....--.-- -....-.... -..-- .-
**basil.js 1.09 -**


<blockquote>+ Added installer scripts for OS X and Windows
* Added some better error reporting for null objects
* Minor bug fixes</blockquote>


..- --.- ..- -.... -..-- .-..-. -.-..---.-.-....--.-- -....-.... -..-- .-
**basil.js 1.08 - 11 November 2013**


<blockquote>+ Added b.arc() by Ken Frederick, cheers mate!
+ Added b.weekday(), b.timestamp() and b.millisecond()
* Fixed output to progress panel
* Added auto save to MODEHIDDEN
* Added 15s timeout to loadStrings via TCP/IP
* Improved error reporting
* Bugfix to b.addToStory()
* Changed default folder for b.download() to data/</blockquote>


..- --.- ..- -.... -..-- .-..-. -.-..---.-.-....--.-- -....-.... -..-- .-
**basil.js 1.07-experimental - 22 October 2013**


<blockquote>* Fixed buggy b.noise()
* Urgent bug fix to b.color() and others</blockquote>


..- --.- ..- -.... -..-- .-..-. -.-..---.-.-....--.-- -....-.... -..-- .-
**basil.js 1.06-experimental - 21 October 2013**


<blockquote>* Internal refactorings (split basil.js into many includes)
* Changed to FAST_ENTIRE_SCRIPT execution mode
Please note that this release is still experimental.</blockquote>


..- --.- ..- -.... -..-- .-..-. -.-..---.-.-....--.-- -....-.... -..-- .-
**basil.js 1.05 - 9 October 2013**


<blockquote>* Bugfix to b.endShape()
* Bugfix to b.loadString() and b.download(),
now supports more than one GET parameter
* changed default anchor to center for transforms with line()
* internal safety improvements</blockquote>


..- --.- ..- -.... -..-- .-..-. -.-..---.-.-....--.-- -....-.... -..-- .-
**basil.js 1.04 - 23 September 2013**


<blockquote>**+** added b.addShape() in order to create multi-component shapes with b.vertex();
+ added b.nameOnPage(), get a pageitem on the active page by name.
see examples/document/nameOnPage.jsx
+ added b.download(). Downloads an URL to a file, currently Mac only.
see examples/output/download.jsx
+ added b.shellExecute(), currently Mac only.
see examples/input/shellExecute.jsx
+ added b.group() and b.ungroup()
+ added b.isURL() validator checker function
+ added string helpers b.endsWith() and b.startsWith()
+ added b.projectPath() to get the folder of the active document
+ added b.saveString() to save a singe string to a file
* Extended loadString() and loadStrings() to handle URLs. Happy GET URL!
see examples/input/loadStringURL.jsx
* all export functions can handle now sub-folders
e.g. exportPNG("swiss/basel/snap.png")</blockquote>


..- --.- ..- -.... -..-- .-..-. -.-..---.-.-....--.-- -....-.... -..-- .-
**basil.js 1.03 - 3 July 2013**


<blockquote>* added missing support for layer and stroke settings to b.image()
+ added b.savePNG()</blockquote>


..- --.- ..- -.... -..-- .-..-. -.-..---.-.-....--.-- -....-.... -..-- .-
**basil.js 1.02 - 3 June 2013**


<blockquote>* fixed a bug with b.constrain()
* added constraints for b.color() and b.fill(), where illegal channel
values would previously produce strange results</blockquote>


..- --.- ..- -.... -..-- .-..-. -.-..---.-.-....--.-- -....-.... -..-- .-
**basil.js 1.01 - 23 May 2013**


<blockquote>+ added b.transform() and b.matrix()
+ added b.remove() for the removal of objects
+ added b.duplicate() for duplicating page items and pages
+ added b.label() and b.selection() as single item alternatives
+ added demos to examples folder
* changed default image fit behaviour to FitOptions.FILL_PROPORTIONALLY
* corrected credits for the processing.js team
* Several JSDOC updates and updated reference on website</blockquote>


..- --.- ..- -.... -..-- .-..-. -.-..---.-.-....--.-- -....-.... -..-- .-
**basil.js 1.00 - 28 Feb 2013**


<blockquote>First public release!
+ new functions to work conveniently with stories (indesign model of linked content or many textframes), e.g. b.addToStory(), b.storyCount() ...
see: examples/document/story.jsx</blockquote>


..- --.- ..- -.... -..-- .-..-. -.-..---.-.-....--.-- -....-.... -..-- .-
**basil.js 0.22 - 25 Feb 2013**


<blockquote>+ new computation modes MODESILENT, MODEHIDDEN, MODEVISIBLE.
HIDDEN is very handy for working with large files, as the document is
processed completely in background, performance is a lot better.
* Changes for b.go().
You can switch between the computation modes via b.go( b.MODESILENT ),
b.go( b.MODEHIDDEN ) and b.go( b.MODEVISIBLE ). If b.go() is called
without a paramter, then the default mode MODESILENT is used.
Special thanks to be:screen GmbH for the new computation modes and
performance optimization!
+ new functions for creating shapes. you can create arbitrary lines,
bezier curves, polygones with beginShape(), endShape() and vertex()</blockquote>


..- --.- ..- -.... -..-- .-..-. -.-..---.-.-....--.-- -....-.... -..-- .-
**basil.js 0.21 - 21 Dec 2012**


> basil.js goes semi public with a private beta release


..- --.- ..- -.... -..-- .-..-. -.-..---.-.-....--.-- -....-.... -..-- .-
**basil.js pre 0.21 - May to Dec 2012**


<blockquote>basil.js is developed over the Summer by Ted Davis, Benedikt Groß,
Stefan Landsbek and Ludwig Zeller.
Special thanks to Stefan Landsbek for the inital code architecture!</blockquote>



