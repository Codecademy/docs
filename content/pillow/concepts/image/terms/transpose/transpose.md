---
Title: '.Transpose()'
Description: 'Method in the Pillow library used to flip or rotate an image.'
Subjects:
  - 'Code foundation'
  - 'Computer science'
Tags:
  - 'Methods'
  - 'Functions'
  - 'Libraries'
CatalogContent:
  - 'learn-Python-3'
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
im = Image.open("docs/conent/pillow/concepts/image/bird-thumbnail.jpg")

# Flip image
out = im.transpose(PIL.Image.FLIP_LEFT_RIGHT)
out.save('docs/conent/pillow/concepts/image/output.png')
```
