---
layout: entry
title: lerpColor()
description: "Calculates a color or colors between two color at a specific increment.\nThe amt parameter is the amount to interpolate between the two values where 0.0 equal to the first point, 0.1 is very near the first point, 0.5 is half-way in between, etc.\nN.B.: Both color must be either CMYK or RGB."
category: Color
subcategory: null
returns: 'Interpolated color'
parameters:
    - {name: c1, description: 'Input color 1'}
    - {name: c2, description: 'Input color 2'}
    - {name: amt, description: 'The Amount to interpolate between the two colors'}

---
Calculates a color or colors between two color at a specific increment.
The amt parameter is the amount to interpolate between the two values where 0.0 equal to the first point, 0.1 is very near the first point, 0.5 is half-way in between, etc.
N.B.: Both color must be either CMYK or RGB.