---
Title: '.point()'
Description: 'Applies a function or lookup table to each pixel in an image using the Pillow library.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Images'  
  - 'Pillow'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.point()`** method in the Python Pillow library is used to apply a function or lookup table to each pixel in an image. It is useful for performing operations like thresholding, gamma correction, or channel manipulation.

## Syntax

```pseudo
Image.point(lut, mode=None)
```

**Parameters:**

- `lut`: This parameter can be:
  - A lookup table: A list or sequence with 256 values (or 65536 for 16-bit images) per band.
  - A function: Takes a single integer (0–255) and returns a value. It’s called once for each possible pixel value to build a lookup table internally.

- `mode` *(optional, str)*:
 The mode of the output image. Typically not needed unless changing image type.

**Returns value:**
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
![Output image](https://raw.githubusercontent.com/Codecademy/docs/main/media/inverted-gradient.png)








