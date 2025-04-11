---
Title: '.point()'
Description: 'Applies a function or lookup table to each pixel in an image using the Pillow library.'
Subjects:
  - 'Python'
  - 'Image Processing'
  - 'Pillow'
Tags:
  - 'Image-manipulation'  
  - 'Pillow'
  - 'point()'
  - 'Python-method'
CatalogContent:
  - 'Learn-python-3'
  - 'paths/data-science'
---

The **`.point()`** method in the Python Pillow library is used to apply a function or lookup table to each pixel in an image. It is useful for performing operations like thresholding, gamma correction, or channel manipulation.

## Syntax

```python
Image.point(function, mode=None)
```

**Parameters:**

- `function` *(callable or sequence)*: A function or lookup table that maps each pixel value to a new value...

- `mode` *(optional, str)*:
 The mode of the output image. Typically not needed unless changing image type.

**Returns:**
* A new `image` object with the transformed pixel data.


## Example
This example creates a horizontal grayscale gradient, inverts it using `.point()`, and saves the result:

```py
from PIL import Image

# Create a horizontal grayscale gradient image
width, height = 256, 50
image = Image.new("L", (width, height))
for x in range(width):
    for y in range(height):
        image.putpixel((x, y), x)

# Invert grayscale values
inverted = image.point(lambda p: 255 - p)

# Save
inverted.save("inverted-gradient.png")
```
## Output:
![Output image ](/media/inverted-gradient.png)








