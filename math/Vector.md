---
layout: entry
title: Vector
codetitle: 'b.Vector(x, y, [z])'
description: 'A class to describe a two or three dimensional vector. This datatype stores two or three variables that are commonly used as a position, velocity, and/or acceleration. Technically, position is a point and velocity and acceleration are vectors, but this is often simplified to consider all three as vectors. For example, if you consider a rectangle moving across the screen, at any given instant it has a position (the object''s location, expressed as a point.), a velocity (the rate at which the object''s position changes per time unit, expressed as a vector), and acceleration (the rate at which the object''s velocity changes per time unit, expressed as a vector). Since vectors represent groupings of values, we cannot simply use traditional addition/multiplication/etc. Instead, we''ll need to do some "vector" math, which is made easy by the methods inside the Vector class.'
category: Math
subcategory: Vector
returns: null
parameters:
    - {name: x, description: 'The first vector.', optional: false, type: [Number]}
    - {name: y, description: 'The second vector.', optional: false, type: [Number]}
    - {name: z, description: 'Optional, the third vector.', optional: true, type: [Number]}
kind: function
todo: null
examples: []

---