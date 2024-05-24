---
Title: 'fromarray()'
Description: '.fromarray() creates an image from a specified array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Arrays'
  - 'Computer Vision'
  - 'Functions'
  - 'Images'
  - 'Pillow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

**.fromarray()** is a function from the Image module that is used to process images for more clarity, it creates a new image derived from a specified array.

## Syntax

```pseudo
Image.fromarray(obj_array, mode="CMYK")

```

`.fromarray()` takes two parameters: `obj`, which represent a defined array, and `mode` as an optional parameter.
`mode` defines the type and depth of a pixel in the image that will be created. If `mode` is not used, the new image will be stored as is.

## Example

The example below shows the value of a pixel in coordinate (0,0) after parameter `mode` is used with `CMYK` as the value.

```py
# Import Image module from Pillow library
from PIL import Image
import numpy as np

# Defined an array 3 by 3 with 200 as all the pixel values
obj_array = np.full((3, 3), 200)

# Create an image from the array, as our `obj_array' is stored in the form of a numbered array
new_imageA = Image.fromarray(obj_array, mode="CMYK")

# Show the pixel value by the coordinate
print(new_imageA.getpixel((0,0)))

```

The result proves that the pixel at coordinate (0,0) is stored as `CMYK` combination colors with the values shown below.

```shell
(200, 0, 0, 0)

```

## Codebyte Example

The following Codebyte example demonstrates how to create a new image from the array and stored it in an `RGB` color format.

```codebyte/python

import numpy as np
from PIL import Image

# Defined an array 3 by 3 with 200 as all the pixel values
obj_array = np.full((3, 3, 3), 200)

# Create an image from the array
new_imageB = Image.fromarray(obj_array, mode="RGB")

# Show the pixel value by the coordinate
print(new_imageB.getpixel((0,0)))

```
