---
layout: entry
title: ellipseMode()
description: "The origin of the ellipse is modified by the ellipseMode() function.\nThe default configuration is ellipseMode(CENTER), which specifies the\nlocation of the ellipse as the center of the shape. The RADIUS mode is\nthe same, but the width and height parameters to ellipse() specify the\nradius of the ellipse, rather than the diameter. The CORNER mode draws\nthe shape from the upper-left corner of its bounding box. The CORNERS\nmode uses the four parameters to ellipse() to set two opposing corners\nof the ellipse's bounding box. The parameter must be written in \"ALL CAPS\"."
category: Document
subcategory: Attributes
returns: null
parameters:
    - {name: mode, description: 'Either b.CENTER, b.RADIUS, b.CORNER, or b.CORNERS'}

---
The origin of the ellipse is modified by the ellipseMode() function.
The default configuration is ellipseMode(CENTER), which specifies the
location of the ellipse as the center of the shape. The RADIUS mode is
the same, but the width and height parameters to ellipse() specify the
radius of the ellipse, rather than the diameter. The CORNER mode draws
the shape from the upper-left corner of its bounding box. The CORNERS
mode uses the four parameters to ellipse() to set two opposing corners
of the ellipse's bounding box. The parameter must be written in "ALL CAPS".