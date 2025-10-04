---
Title: '.eval()'
Description: 'Applies a function to each pixel of an image, returning a new image with modified pixel values.'
Subjects:
  - 'Computer science'
  - 'Data Science'
Tags:
  - 'Computer Vision'
  - 'Images'
  - 'Pillow'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.eval()`** method in Pillow processes an image by applying a given function to each pixel. This is useful for pixel-level transformations like adjusting brightness, inverting colors, or applying custom filters.

## Syntax

```pseudo
Image.eval(image, function)
```

- `image`: The input image object to process.
- `function`: A function/lambda that takes one integer argument (the pixel value) and returns a modified integer.

## Example

The example below converts the input image into a new image, where each pixel is transformed by a function:

```py
from PIL import Image

# Open an image
img = Image.open('media/pillow-original.jpeg').convert("RGB")  # Ensure RGB mode

# Define a function to invert pixel values
def invert_pixel(x):
  return 255 - x  # Works for grayscale and individual RGB channels

# Apply the function to each pixel
new_img = Image.eval(img, invert_pixel)

# Display the new image
new_img.show()
```

In this example:

- `x`: Represents the pixel intensity value, which typically ranges from 0-255 (for 8-bit grayscale or RGB images).
- `255 - x`: Subtracts the pixel value from 255, effectively inverting its brightness: 0 → 255 (pure black becomes pure white), 255 → 0 (pure white becomes pure black), 100 → 155 (mid-gray becomes a lighter gray).

Here is the original image:

![Original Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-original.jpeg)

Here is the updated image:

![Updated Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-eval.png)
