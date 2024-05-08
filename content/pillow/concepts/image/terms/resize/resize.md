---
Title: '.resize()'
Description: 'The .resize() method is part of the Image class in the Pillow library (PIL Fork) in Python, and it's used to change the size of an image.'
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
  - 'paths/data-science-foundations'
---

The `.resize()` method is part of the Pillow library in Python, and it's used to change the size of an image. Pillow supports image formats such as JPEG, PNG, GIF, TIFF, WebP, and can be installed on a local PC using pip.

## Syntax

```pseudo
Image.resize(size, resample=None, box=None, reducing_gap=None)
```

| Parameter Name | Data Type | Usage |
| -------------- | ----------|------------------------------ |
| size           | tuple     | Decides the resize dimentions |
| resample | int | Specifies the resampling filter to be used when resizing. |
| box | tuple, None | A 4-tuple defining the region of the image to resize. |
| reducing_gap | float, None | Used for large scale reduction to help preserve quality. |

## Example 1

```py
from PIL import Image

# Original image is 2000x2000 pixels.
img = Image.open('image_path.jpg')

# Now the image is resized to 1000x1000 pixels.
img_resized = img.resized((1000, 1000))
```

## Example 2

```py
from PIL import Image

# Original image is 2000x2000 pixels.
img = Image.open('image_path.jpg')

# Now the image is resized to 4000x4000 pixels.
img_resized = img.resized((img.height*2, img.width*2))
```

## Example 3

```py
from PIL import Image

# Original image is 2000x2000 pixels.
img = Image.open('image_path.jpg')

# Now the image is resized to 1000x1000 pixels.
img_resized = img.resized((1000, 1000), Image.Resampling.LANCZOS, box=(1000, 1000, 2000, 2000), reducing_gap=2.0)
```

## Codebyte Example (if applicable)