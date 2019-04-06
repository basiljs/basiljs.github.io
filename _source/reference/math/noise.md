---
layout: entry
title: noise
codetitle: 'noise(x, [y], [z])'
description: "Returns the Perlin noise value at specified coordinates. Perlin noise is a random sequence generator producing a more natural ordered, harmonic succession of numbers compared to the standard `random()` function. It was invented by Ken Perlin in the 1980s and been used since in graphical applications to produce procedural textures, natural motion, shapes, terrains etc.\n\nThe main difference to the `random()` function is that Perlin noise is defined in an infinite n-dimensional space where each pair of coordinates corresponds to a fixed semi-random value (fixed only for the lifespan of the program). The resulting value will always be between `0` and `1`. basil.js can compute 1D, 2D and 3D noise, depending on the number of coordinates given. The noise value can be animated by moving through the noise space. The 2nd and 3rd dimension can also be interpreted as time.\n\nThe actual noise is structured similar to an audio signal, in respect to the function's use of frequencies. Similar to the concept of harmonics in physics, perlin noise is computed over several octaves which are added together for the final result.\n\nAnother way to adjust the character of the resulting sequence is the scale of the input coordinates. As the function works within an infinite space the value of the coordinates doesn't matter as such, only the distance between successive coordinates does (eg. when using `noise()` within a loop). As a general rule the smaller the difference between coordinates, the smoother the resulting noise sequence will be. Steps of `0.005`- `0.03` work best for most applications, but this will differ depending on use."
category: Math
subcategory: Random
returns:
    name: null
    description: 'The noise value.'
    type: [Number]
parameters:
    - {name: x, description: 'Coordinate in x space.', optional: false, type: [Number]}
    - {name: y, description: 'Coordinate in y space.', optional: true, type: [Number]}
    - {name: z, description: 'Coordinate in z space.', optional: true, type: [Number]}
kind: function
todo: null
examples: []

---
