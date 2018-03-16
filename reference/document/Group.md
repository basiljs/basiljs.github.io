---
layout: entry
title: group
codetitle: 'group(pItems, [name])'
description: "Returns the Group instance and sets it if argument Group is given.\n Groups items to a new group. Returns the resulting group instance. If a string is given as the only\n argument, the group by the given name will be returned."
category: Document
subcategory: null
returns:
    name: null
    description: 'The group instance.'
    type: [Group]
parameters:
    - {name: pItems, description: 'An array of page items (must contain at least two items) or name of group instance.', optional: false, type: [Array]}
    - {name: name, description: 'The name of the group, only when creating a group from page items.', optional: true, type: [String]}
kind: function
todo: null
examples: []

---
