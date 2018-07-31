---
layout: entry
title: inspect
codetitle: 'inspect(obj, [settings])'
description: "Inspects a given object or any other data item and prints the result to the console. This is useful for inspecting or debugging any kind of variable or data item. The optional settings object allows to control the function's output. The following parameters can be set in the settings object:\n- `showProps`: Show or hide properties. Default: `true`\n- `showValues`: Show or hide values. Default: `true`\n- `showMethods`: Show or hide methods. Default: `false`\n- `maxLevel`: Chooses how many levels of properties should be inspected recursively. Default: `1`\n- `propList`: Allows to pass an array of property names to show. If `propList` is not set all properties will be shown. Default: `[]` (no propList)\nIf no settings object is set, the default values will be used."
category: Environment
subcategory: null
returns: null
parameters:
    - {name: obj, description: 'An object or any other data item to be inspected.', optional: false, type: [Object]}
    - {name: settings, description: 'A settings object to control the function''s behavior.', optional: true, type: [Object]}
    - {name: settings.showProps, description: 'Show or hide properties. Default: `true`', optional: true, type: [Boolean]}
    - {name: settings.showValues, description: 'Show or hide values. Default: `true`', optional: true, type: [Boolean]}
    - {name: settings.showMethods, description: 'Show or hide methods. Default: `false`', optional: true, type: [Boolean]}
    - {name: settings.maxLevel, description: 'How many levels of properties should be inspected recursively. Default: `1`', optional: true, type: [Number]}
    - {name: settings.propList, description: 'Array of properties to show. Default: `[]` (no propList)', optional: true, type: [Array]}
kind: function
todo: null
examples:
    - {description: 'Inspecting a string', code: 'inspect("foo");'}
    - {description: 'Inspecting the current page, its methods and an additional level of properties', code: 'inspect(page(), {showMethods: true, maxLevel: 2})'}
    - {description: 'Inspecting an ellipse, listing only the properties "geometricBounds" and "strokeWeight"', code: "var myEllipse = ellipse(0, 0, 10, 10);\ninspect(myEllipse, {maxLevel: 2, propList: [\"geometricBounds, strokeWeight\"]});"}

---
