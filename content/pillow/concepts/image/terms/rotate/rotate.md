---
Title: '.rotate()'
Description: 'Rotates the image around its center anticlockwise by the specified number of degrees.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Computer Vision'
  - 'Images'
  - 'Pillow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

In Pillow, the **`.rotate()`** method is used to rotate an image by a specified number of degrees counterclockwise. Pillow is a popular Python library for image processing and manipulation, with support for formats like JPEG, PNG, PPM, TIFF, GIF, and BMP. The Pillow library can be easily installed on a local PC using [pip](https://www.codecademy.com/resources/docs/python/pip).

## Syntax

```pseudo
Image.rotate(angle, resample=Resampling.NEAREST, expand=0, center=None, translate=None, fillcolor=None)
```

- `angle`: The angle to rotate the image by, in degrees counterclockwise.
- `resample`: The resampling filter to use. Options include `Resampling.NEAREST`, `Resampling.BILINEAR`, `Resampling.BICUBIC`, and `Resamplinge.LANCZOS`. The default is `Resampling.NEAREST`.
- `expand`: A boolean that, if `True`, expands the output image to make sure the whole rotated image fits. The default is `False`.
- `center`: A tuple `(x, y)` representing the center of rotation. The origin is the upper-left corner.
- `translate`: A tuple `(x, y)` representing post-rotate translation. The default is `None`.
- `fillcolor`: The color to use for areas outside the rotated image. The default is `None`.

> **Note:** The `.rotate()` method requires the `angle` parameter, while `resample`, `expand`, `center`, `translate`, and `fillcolor` are optional parameters for additional control over the rotating process.

## Example

The following example demostrates the use of the `.rotate()` method to change the angle of the image:

```py
from PIL import Image

# Original image is rotated 0 degrees.
img = Image.open('pillow-rotate-earth.png')

# Showcasing the original image
img.show()

# Rotating the image by 30 degrees
image_rotated = img.rotate(30)

# Showcasing the rotated image
image_rotated.show()
```

The code snippet showcases the following output:

![The Original Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-rotate-earth.png)

![The Rotated Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-rotate-earth-rotated.png)
