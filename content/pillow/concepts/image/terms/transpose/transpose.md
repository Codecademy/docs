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

In Pillow, the **`.transpose()`** method is used to flip or rotate an image in 90-degree steps.

## Syntax

```pseudo
Image.transpose(method)
```

- `Image`: Refers to the image object to which the transpose operations are to be applied.
- `method`: Specifies the type of transpose operation to perform. It can take one of the following values:
  - `Image.FLIP_LEFT_RIGHT`: Flips the image horizontally (left to right).
  - `Image.FLIP_TOP_BOTTOM`: Flips the image vertically (top to bottom).
  - `Image.ROTATE_90`: Rotates the image by 90 degrees clockwise.
  - `Image.ROTATE_180`: Rotates the image by 180 degrees.
  - `Image.ROTATE_270`: Rotates the image by 270 degrees clockwise.

## Example

Here’s an example of how to use the `.transpose()` method to flip an image:

```py
import PIL
from PIL import Image

# Read the image
im = Image.open("docs/content/pillow/concepts/image/bird-thumbnail.jpg")
# Display the original image
im.show()

# Flip image
out = im.transpose(PIL.Image.FLIP_LEFT_RIGHT)
# Display the flipped image
out.show()
```
