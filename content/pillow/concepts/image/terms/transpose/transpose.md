---
Title: '.transpose()'
Description: 'Method in the Pillow library used to flip or rotate an image.'
Subjects:
  - 'Code foundation'
  - 'Computer science'
Tags:
  - 'Methods'
  - 'Functions'
  - 'Libraries'
CatalogContent:
  - 'learn-Git&GitHub-course'
  - 'learn-Python-3'
  - 'paths/computer-science'
---

The **.transpose()** method is used to flip or rotate an image in 90 degree steps.

## Syntax

```pseudo
Image.transpose(method)

where

method – Possible values of method are
PIL.Image.FLIP_LEFT_RIGHT
PIL.Image.FLIP_TOP_BOTTOM
PIL.Image.ROTATE_90
PIL.Image.ROTATE_180
PIL.Image.ROTATE_270
PIL.Image.TRANSPOSE or PIL.Image.TRANSVERSE.
```

## Example

```python

Here’s an example of how to use the '.transpose()' method to flip an image:

import PIL
from PIL import Image

# Read the image
im = Image.open("sample-image.png")

# Flip image
out = im.transpose(PIL.Image.FLIP_LEFT_RIGHT)
out.save('transpose-output.png')
```
