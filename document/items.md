---
layout: entry
title: items()
description: 'If no callback function is given it returns a Collection of items otherwise calls the given callback function for each of the PageItems in the given Document, Page, Layer or Group.'
category: Document
subcategory: Multi-Getters
returns: 'array or PageItems.'
parameters:
    - {name: container, description: 'The container where the PageItems sit in'}
    - {name: cb, description: 'Optional: The callback function to call for each PageItem. When this function returns false the loop stops. Passed arguments: item, loopCount.'}

---
If no callback function is given it returns a Collection of items otherwise calls the given callback function for each of the PageItems in the given Document, Page, Layer or Group.