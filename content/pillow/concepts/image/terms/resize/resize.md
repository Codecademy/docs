---
Title: '.resize()'
Description: 'The .resize() method is part of the Image class in the Pillow library (PIL Fork) in Python, and it is used to change the size of an image.'
Subjects:
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

In Pillow, the **`.resize()`** method is used to change the size of an image. Pillow is a widely used Python library for image processing and manipulation, supporting formats such as JPEG, PNG, PPM, TIFF, GIF, and BMP It can be easily installed on a local PC using `pip`.

## Syntax

```pseudo
Image.resize(size, resample=None, box=None, reducing_gap=None)
```

| Parameter Name | Data Type   | Usage                                                     |
| -------------- | ----------- | --------------------------------------------------------- |
| `size`         | tuple       | Decides the resize dimentions.                            |
| `resample`     | int         | Specifies the resampling filter to be used when resizing. |
| `box`          | tuple, None | A 4-tuple defining the region of the image to resize.     |
| `reducing_gap` | float, None | Used for large scale reduction to help preserve quality.  |

- resample filters available
  - Image.Resampling.NEAREST or Image.NEAREST
  - Image.Resampling.BOX
  - Image.Resampling.BILINEAR or Image.BILINEAR
  - Image.Resampling.HAMMING
  - Image.Resampling.BICUBIC or Image.BICUBIC
  - Image.Resampling.LANCZOS or Image.LANCZOS

Returns an **image** **object**.

## Example 1

The following example demonstrates the use of the `.resize()` method to change the size of the image:

```py
from PIL import Image

# Original image is 2000x2000 pixels.
img = Image.open('image_path.jpg')

# Will resize the image to 1000x1000 pixels.
img_resized = img.resized((1000, 1000))

# Will open the image.
img_resized.show()

print(img_resized.height, img_resized.width)
```

The output will show the new dimensions of the image in pixels.

```shell
1000 1000
```
