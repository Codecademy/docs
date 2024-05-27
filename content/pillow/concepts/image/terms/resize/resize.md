---
Title: '.resize()'
Description: 'Changes the size of an image to a specified size.'
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

In Pillow, the **`.resize()`** method is used to change the size of an image. Pillow is a widely used Python library for image processing and manipulation, supporting formats such as JPEG, PNG, PPM, TIFF, GIF, and BMP It can be easily installed on a local PC using [pip](https://www.codecademy.com/resources/docs/python/pip).

## Syntax

```pseudo
Image.resize(size, resample=None, box=None, reducing_gap=None)
```

- `size`: A 2-tuple specifying the new size as `(width, height)`.
- `resample`: Specifies the resampling filter to be used when resizing.
- `box`: A 4-tuple defining the region of the image to resize.
- `reducing_gap`: A float to optimize downscaling by resizing in multiple steps.

>**Note:** The `.resize()` method requires the `size` parameter, while `resample`, `box`, and `reducing_gap` are optional parameters for additional control over the resizing process.

## Example

The following example demonstrates the use of the `.resize()` method to change the size of the image:

```py
from PIL import Image

# Original image is 2000x2000 pixels.
img = Image.open('pillow-resize-earth.png')

# showccasing the original image
img.show()

img_resized = img.resize((500, 500))

print(img_resized.height, img_resized.width)

# showcasing the resized image
img_resized.show()
```

The code snippet will display the new dimensions of the image and also showcase the image in the output as follows:

```shell
500 500
```

![The Original Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-resize-earth.png)

![The resized Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-resize-earth-resized.png)
