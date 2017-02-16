---
layout: entry
title: typo()
description: "Sets text properties to the given item. If the item is not an instance the text property can be set to,\nthe property gets set to the direct descendants of the given item, e.g. all stories of a given document."
category: Typography
subcategory: null
returns: "The property value(s) if the function acts as getter or the items the property\n                                      was assigned to."
parameters:
    - {name: item, description: 'The object to apply the property to.'}
    - {name: property, description: "The text property name or an object of key/value property/value pairs.\n                                  If property is a string and no value is given, the function acts as getter."}
    - {name: value, description: 'The value to apply to the property.'}

---
Sets text properties to the given item. If the item is not an instance the text property can be set to,
the property gets set to the direct descendants of the given item, e.g. all stories of a given document.