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
  - 'paths/data-science-foundations'
---

The **.resize()** method is part of the **Pillow** library in Python, and it's used to change the size of an image. Pillow supports image formats such as JPEG, PNG, GIF, TIFF, WebP, and can be installed on a local PC using **pip**.

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

`.resize()` takes pixels as arguments directly in the first parameter.

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

## Example 2

The `.resize()` method accepts `width` and `height` as arguments and allows manipulation with `+`, `-`, `*`, and `//` operators.

```py
from PIL import Image

# Original image is 2000x2000 pixels.
img = Image.open('image_path.jpg')

# Will resize the image to 4000x4000 pixels.
img_resized = img.resized((img.height*2, img.width*2))

# Will open the image.
img_resized.show()

print(img_resized.height, img_resized.width)
```

The output will show the new dimensions of the image in pixels.

```shell
4000 4000
```

## Example 3

This example demonstrates the use of `.resize()` taking all four available arguments.

`size` is set to `(2000, 2000)`.

`resample` although optional, `Resampling.LANCZOS` is used here, which offers the highest quality when resizing.

`box` specified as `(1000, 1000, 2000, 2000)`, this parameter defines the area of the image to be resized, detailing the placement order as `LEFT`, `UPPER`, `RIGHT`, and `LOWER`.

`reducing_gap` this optimization parameter accepts a `float`. Primarily used for larage size reductions to minimize quality loss, setting `reducing_gap` to `2.0` indicates that the image size is reduced by half at each step of the reduction process.

```py
from PIL import Image

# Original image is 2000x2000 pixels.
img = Image.open('image_path.jpg')

# Will resize the image is to 1000x1000 pixels.
img_resized = img.resized((1000, 1000), Image.Resampling.LANCZOS, box=(1000, 1000, 2000, 2000), reducing_gap=2.0)

# Will open the image.
img_resized.show()

print(img_resized.height, img_resized.width)
```

The output will show the new dimensions of the image in pixels.

```shell
1000 1000
```
