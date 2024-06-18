---
Title: '.transpose()'
Description: 'Flips or rotates an image according to the specified operation.'
Subjects:
  - 'Code foundations'
  - 'Computer science'
Tags:
  - 'Methods'
  - 'Pillow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **.transpose()** method is used to flip or rotate an image in 90-degree steps.

## Syntax

```pseudo
Image.transpose(method)

# Where possible values of the method are

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
im = Image.open("docs/content/pillow/concepts/image/bird-thumbnail.jpg")

# Flip image
out = im.transpose(PIL.Image.FLIP_LEFT_RIGHT)
out.save("docs/content/pillow/concepts/image/output.png")
```
