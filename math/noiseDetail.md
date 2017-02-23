---
layout: entry
title: noiseDetail
codetitle: 'b.noiseDetail(octaves, fallout)'
description: 'Adjusts the character and level of detail produced by the Perlin noise function. Similar to harmonics in physics, noise is computed over several octaves. Lower octaves contribute more to the output signal and as such define the overal intensity of the noise, whereas higher octaves create finer grained details in the noise sequence. By default, noise is computed over 4 octaves with each octave contributing exactly half than its predecessor, starting at 50% strength for the 1st octave. This falloff amount can be changed by adding an additional function parameter. Eg. a falloff factor of 0.75 means each octave will now have 75% impact (25% less) of the previous lower octave. Any value between 0.0 and 1.0 is valid, however note that values greater than 0.5 might result in greater than 1.0 values returned by noise().'
category: Math
subcategory: Random
returns: null
parameters:
    - {name: octaves, description: 'Number of octaves to be used by the noise() function.', optional: false, type: [Number]}
    - {name: fallout, description: 'Falloff factor for each octave.', optional: false, type: [Number]}
kind: function

---
