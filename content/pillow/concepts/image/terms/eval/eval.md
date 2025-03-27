---
Title: '.eval()'
Description: 'Applies a function to each pixel of an image, returning a new image with modified pixel values.'
Subjects:
  - 'Computer science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Computer Vision'
  - 'Images'
  - 'Pillow'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`.eval()`** method in Pillow processes an image by applying a given function to each pixel. This is useful for pixel-level transformations like adjusting brightness, inverting colors, or applying custom filters.

## Syntax

```pseudo
Image.eval(image, function)
```

- `image`: The input image object to process.
- `function`: A function/lambda that takes one integer argument (the pixel value) and returns a modified integer.

## Example

The example below shows a new image, where each pixel is transformed by `function`.

```py
from PIL import Image

# Open an image
img = Image.open('media/pillow-original.jpeg')

# Display the original image
img.show()

# Define a function to invert pixel values (e.g., 255 → 0, 100 → 155)
value = lambda x: 255 - x

# Apply the function to every pixel
new_img = Image.eval(img, value)

# Display the new image
new_img.show()
```

In the example -

- x: Represents the pixel intensity value, which typically ranges from 0 to 255 (for 8-bit grayscale or RGB images).
- 255 - x: Subtracts the pixel value from 255, effectively inverting its brightness: 0 → 255 (pure black becomes pure white), 255 → 0 (pure white becomes pure black), 100 → 155 (mid-gray becomes a lighter gray).

Here is the original image:

![Original Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-original.jpeg)

Here is the updated image:

![Updated Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-eval.png)
