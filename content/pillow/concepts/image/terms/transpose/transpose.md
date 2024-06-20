---
Title: '.transpose()'
Description: 'Flips or rotates an image according to the specified operation.'
Subjects:
  - 'Code foundation'
  - 'Computer science'
Tags:
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-Python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

In Pillow, the **`.transpose()`** method is used to flip or rotate an image in 90-degree steps.

## Syntax

```pseudo
Image.transpose(method)

method: PIL.Image.FLIP_LEFT_RIGHT
 FLIP_LEFT_RIGHT: Flips the image horizontally.
 FLIP_TOP_BOTTOM: Flips the image vertically.
 ROTATE_90: Flips the image in 90-degree steps.
 ROTATE_180: Flips the image in 180-degree steps.
 ROTATE_270: Flips the image in 270-degree steps.
 PIL.Image.TRANSPOSE: rotate and flip images with necessary keywords as parameters
 PIL.Image.TRANSVERSE provides the python interpreter with image editing capabilities.
```

## Example

import PIL
from PIL import Image

Read the image

im = Image.open("bird-thumbnail.jpg")
im.show(docs/media/"bird-thumbnail.jpg")

Flip image

out = im.transpose(PIL.Image.FLIP_LEFT_RIGHT)
out.show(docs/media/"output.jpg")

```

```
