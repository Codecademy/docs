---
Title: '.point()'
Description: 'Applies a function or lookup table to each pixel in an image.'
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

In Pillow, the **`.point()`** method is used to apply a function or lookup table to each pixel in an image. It is useful for performing operations like thresholding, gamma correction, or channel manipulation.

## Syntax

```pseudo
Image.point(lut, mode=None)
```

**Parameters:**

- `lut`: This parameter can be:
  - A lookup table: A list or sequence with 256 values for 8-bit images per band (e.g., 768 values for RGB). For 16-bit images, 65536 values are required per band.
  - A function: Takes a single integer (0–255) and returns a value. It’s called once for each possible pixel value to build a lookup table internally.
- `mode` (optional, str): The mode of the output image. Use this if you want to change the image type during transformation. Common modes include:
  - `"L"`: 8-bit pixels, black and white (grayscale)
  - `"RGB"`: 3x8-bit pixels, true color
  - `"RGBA"`: 4x8-bit pixels, true color with alpha channel
  - `"1"`: 1-bit pixels, black and white
  - `"P"`: 8-bit pixels, uses a color palette to map to other modes

> **Note:** Most uses of `.point()` don’t require the argument `mode` unless there is a need to explicitly change the image type (e.g., converting grayscale to binary).

**Return value:**

This method returns a new `Image` object with the transformed pixel data.

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

# Invert grayscale values using .point()
inverted = image.point(lambda p: 255 - p)

# Save the result
inverted.save("inverted-gradient.png")
```

The output for the example will be:

![A horizontal grayscale gradient image with inverted grayscale values](https://raw.githubusercontent.com/Codecademy/docs/main/media/inverted-gradient.png)
