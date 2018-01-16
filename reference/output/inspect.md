---
layout: entry
title: inspect
codetitle: 'b.inspect(obj, [settings])'
description: "Inspects a given object or any other data item and prints the result to the console. This is useful for inspecting or debugging any kind of variable or data item. The optional settings object allows to control the function's output. The following parameters can be set in the settings object:\n<code>showProps</code>: Show or hide properties. Default: <code>true</code>\n<code>showValues</code>: Show or hide values. Default: <code>true</code>\n<code>showMethods</code>: Show or hide methods. Default: <code>false</code>\n<code>maxLevel</code>: Chooses how many levels of properties should be inspected recursively. Default: <code>1</code>\n<code>propList</code>: Allows to pass an array of property names to show. If propList is not set all properties will be shown. Default: <code>[]</code> (no propList)\nIf no settings object is set, the default values will be used."
category: Output
subcategory: null
returns: null
parameters:
    - {name: obj, description: 'An object or any other data item to be inspected.', optional: false, type: [Object]}
    - {name: settings, description: 'A settings object to control the function''s behavior.', optional: true, type: [Object]}
    - {name: settings.showProps, description: 'Show or hide properties. Default: <code>true</code>', optional: true, type: [Boolean]}
    - {name: settings.showValues, description: 'Show or hide values. Default: <code>true</code>', optional: true, type: [Boolean]}
    - {name: settings.showMethods, description: 'Show or hide methods. Default: <code>false</code>', optional: true, type: [Boolean]}
    - {name: settings.maxLevel, description: 'How many levels of properties should be inspected recursively. Default: <code>1</code>', optional: true, type: [Number]}
    - {name: settings.propList, description: 'Array of properties to show. Default: <code>[]</code> (no propList)', optional: true, type: [Array]}
kind: function
todo: null
examples:
    - {description: 'Inspecting a string', code: 'b.inspect("foo");'}
    - {description: 'Inspecting the current page, its methods and an additional level of properties', code: 'b.inspect(b.page(), {showMethods: true, maxLevel: 2})'}
    - {description: 'Inspecting an ellipse, listing only the properties "geometricBounds" and "strokeWeight"', code: "var myEllipse = b.ellipse(0, 0, 10, 10);\nb.inspect(myEllipse, {maxLevel: 2, propList: [\"geometricBounds, strokeWeight\"]});"}

---
