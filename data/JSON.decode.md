---
layout: entry
title: JSON.decode()
description: "Function parses and validates a string as JSON-object. Usage:\nvar obj = b.JSON.decode(str);\nvar str = b.JSON.encode(obj);"
category: Data
subcategory: JSON
returns: 'Returns JSON-object or throws an error if invalid JSON has been provided.'
parameters:
    - {name: String, description: 'to be parsed as JSON-object.'}

---
Function parses and validates a string as JSON-object. Usage:
var obj = b.JSON.decode(str);
var str = b.JSON.encode(obj);