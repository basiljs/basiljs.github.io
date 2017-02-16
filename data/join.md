---
layout: entry
title: join()
description: "Combines an array of Strings into one String, each separated by\nthe character(s) used for the separator parameter. To join arrays\nof ints or floats, it's necessary to first convert them to strings\nusing nf() or nfs()."
category: Data
subcategory: 'String Functions'
returns: 'The joined string'
parameters:
    - {name: array, description: 'A string array'}
    - {name: separator, description: 'The separator to be inserted'}

---
Combines an array of Strings into one String, each separated by
the character(s) used for the separator parameter. To join arrays
of ints or floats, it's necessary to first convert them to strings
using nf() or nfs().