---
Title: '.rotate()'
Description: 'Rotates a given image anti-clockwise around its center by the specified number of degrees.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Computer Vision'
  - 'Images'
  - 'Pillow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Pillow, the **`.rotate()`** method is used to rotate a given image anti-clockwise around its center by a specified number of degrees.

## Syntax

```pseudo
Image.rotate(angle, resample=Resampling.NEAREST, expand=0, center=None, translate=None, fillcolor=None)
```

- `angle`: The angle to rotate the image by in degrees anti-clockwise.
- `resample`: The resampling filter to use. Options include `Resampling.NEAREST`, `Resampling.BILINEAR`, and `Resampling.BICUBIC`.
- `expand`: A boolean that, if `True`, expands the output image to make sure the whole rotated image fits.
- `center`: A tuple `(x, y)` representing the center of rotation. The default is the upper-left corner.
- `translate`: A tuple `(x, y)` representing post-rotate translation.
- `fillcolor`: The color to use for areas outside the rotated image.

> Note: The `.rotate()` method requires the `angle` parameter, while `resample`, `expand`, `center`, `translate`, and `fillcolor` are optional parameters for additional control over the rotating process.

## Example

The following example demonstrates the use of the `.rotate()` method:

```py
from PIL import Image

# Opening the original image
img = Image.open('pillow-rotate-earth.png')

# Showcasing the original image
img.show()

# Rotating the image by 30 degrees
image_rotated = img.rotate(30)

# Showcasing the rotated image
image_rotated.show()
```

The above example produces two outputs. Here is the first one:

![The Original Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-rotate-earth.png)

Here is the second one:

![The Rotated Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-rotate-earth-rotated.png)
