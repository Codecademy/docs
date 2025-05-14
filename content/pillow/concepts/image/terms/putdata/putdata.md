---
Title: '.putdata()'
Description: 'Updates the pixel values of an image by setting the pixel data from a sequence or iterable, such as a list or tuple.'
Subjects:
  - 'Computer Science'
  - 'Data Visualization'
Tags:
  - 'Computer Vision'
  - 'Images'
  - 'Pillow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.putdata()`** method in Pillow is used to modify the pixel data of an image, replacing the current pixel values with new values from a sequence or iterable (such as a [list](https://www.codecademy.com/resources/docs/python/lists) or [tuple](https://www.codecademy.com/resources/docs/python/tuples)). It's often used in combination with the `.getdata()` method, which retrieves the pixel data from the image, allowing you to modify the data before putting it back with `.putdata()`.

The `.putdata()` method modifies the image in-place and does not return a new image object. It will return `None`, meaning the output will have `NoneType` if assigned to a variable.

It’s an essential method in the [`Image`](https://www.codecademy.com/resources/docs/pillow/image) module of the Pillow library.

## Syntax

```pseudo
Image.putdata(pixel_data, scale=1.0, offset=0.0)
```

**Parameters:**

- `data`: A flattened sequence object containing pixel values to be assigned to the image. The values start from the upper-left corner (0, 0) of the image, proceed across rows, and continue until the sequence ends or the image size is reached.
- `scale`: A scaling factor for the pixel data. Each pixel value is multiplied by this scale before being assigned.
- `offset`: A value added to each pixel after scaling.

**Return value:**

- The `.putdata()` method does not return anything. It modifies the image's pixel data in place and returns `None`.

## Example 1: Dim an Image Using `.putdata()` with Scale and Offset in Pillow

Here is the image used as an example to perform the `.putdata()` method:

![Image of Python Logo](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow_python_logo.jpg)

The following example demonstrates how to use the `scale` and `offset` parameters in the `.putdata()` method to adjust the pixel values and produce a dimmed image:

```py
from PIL import Image

# Load the image
py_img = Image.open('pillow_python_logo.jpg')

# Get the sequenced pixel data from the image
pix_data = list(py_img.getdata())

# Use .putdata method to modify and put back the pixel data directly
py_img.putdata(pix_data, scale=0.8, offset=0)  # Dim the image by scaling pixel values down

# Show the image output
py_img.show()
```

The output of this code will be a dimmed version of the image:

![Image of Dimmed Python Logo](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow_python_logo_dimm.jpg)

## Example 2: Enhance Image Contrast Using `.putdata()` in Pillow

This example demonstrates how to use the `.putdata()` method to adjust the contrast of the original image by modifying the pixel values with a `scale` and `offset`:

```py
from PIL import Image

# Load the image
py_img = Image.open('pillow_python_logo.jpg')

# Get the sequenced pixel data from the image
pix_data = list(py_img.getdata())

# Use .putdata method to modify and put back the pixel data directly
py_img.putdata(pix_data, scale=1.5, offset=-50)  # Increase contrast by scaling and offsetting

# Show the image output
py_img.show()
```

The output image will show increased contrast:

![Image of Python Logo with contrast](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow_python_logo_contrast.jpg)

The `.putdata()` method works by accessing the pixel from the top-left corner of the image, modifying the pixel value using the formula `pixel = value * scale + offset`, and then moving to the next pixel to the right, continuing from left to right, top to bottom.
