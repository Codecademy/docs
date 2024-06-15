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

In Pillow, the **`.rotate()`** method is used to change the rotation of an image. Pillow is a widely used Python library for image processing and manipulation, supporting formats such as JPEG, PNG, PPM, TIFF, GIF and BMP. It can be easily installed on a local PC using [pip](https://www.codecademy.com/resources/docs/python/pip).

## Syntax

```pseudo
Image.rotate(angle, resample=Resampling.NEAREST, expand=0, center=None, translate=None, fillcolor=None)
```

- `angle`: Degrees to rotate the image counterclockwise.
- `resample`: Choose from Resampling.NEAREST (default), Resampling.BILINEAR (linear interpolation), or Resampling.BICUBIC (cubic interpolation).
- `expand`: If true, the output image is large enough to include the entire rotated image. If false, it remains the same size as the input image.
- `center`: Sets the center of rotation with a 2-tuple. The origin is the upper-left corner.
- `translate`: Moves the image after rotation.
- `fillcolor`: Color to fill areas outside the rotated image.

> **Note:\*** The `.rotate()` method requires the `angle` parameter, while `resample`, `expand`, `center`, `translate` and `fillcolor` are optional parameters for additional control over teh rotating process.

## Example

The following example demostrates the use of the '.rotate()' method to change the angle of the image:

```py
from PIL import Image

# Original image is rotated 0 degrees.
img = Image.open('pillow-rotate-earth.png')

# Showcasing the original image
img.show()

pillow-rotate-earth-rotated = img.rotate(30)

#Showcasing the rotated image
img_rotated.show()
```

The code snippet showcase the image in the output as follows:

![The Original Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-rotate-earth.png)

![The Rotated Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-rotate-earth-rotated.png)
