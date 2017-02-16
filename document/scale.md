---
layout: entry
title: scale()
description: "Increasing and decreasing the size of an object by expanding and contracting vertices. Scale values are specified as decimal percentages. The function call scale(2.0) increases the dimension of a shape by 200%. Objects always scale from their relative origin to the coordinate system. Transformations apply to everything that happens after and subsequent calls to the function multiply the effect. For example, calling scale(2.0) and then scale(1.5) is the same as scale(3.0). If scale() is called within draw(), the transformation is reset when the loop begins again. This function can be further controlled by pushMatrix() and popMatrix().\nIf only one parameter is given, it is applied on X and Y axis."
category: Document
subcategory: Transformation
returns: null
parameters:
    - {name: scaleX, description: 'The amount to scale the X axis.'}
    - {name: scaleY, description: 'The amount to scale the Y axis.'}

---
Increasing and decreasing the size of an object by expanding and contracting vertices. Scale values are specified as decimal percentages. The function call scale(2.0) increases the dimension of a shape by 200%. Objects always scale from their relative origin to the coordinate system. Transformations apply to everything that happens after and subsequent calls to the function multiply the effect. For example, calling scale(2.0) and then scale(1.5) is the same as scale(3.0). If scale() is called within draw(), the transformation is reset when the loop begins again. This function can be further controlled by pushMatrix() and popMatrix().
If only one parameter is given, it is applied on X and Y axis.