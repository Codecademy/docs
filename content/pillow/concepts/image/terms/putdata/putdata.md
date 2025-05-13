---
Title: '.putdata()'
Description: 'Puts all the pixel values back in order after they have been modified in place.'
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

The **`.putdata()`** method is used to modify the existing pixel data and put it back in order.

It is usually used with the `.getdata()` method to get the pixel data from the image. Then, use the `.putdata()` method to modify them and put them back in order.

> **Note**: `.putdata()` method does not return a new image object.

Therefore, the output class will be `NoneType` and the value will be `None` when the `.putdata()` method is assigned to a new variable.

`.putdata()` is one of the methods that can be used from the [`Image`](https://www.codecademy.com/resources/docs/pillow/image) module in the Pillow Library.

## Syntax

```pseudo
Image.putdata(pixel_data, scale=1.0, offset=0.0)
```

The `.putdata()` method requires `pixel_data` as a mandatory parameter, while there are two other optional parameters that can be used if needed.

The parameters `scale` and `offset` are used when performing the adjustment on the given image pixels. The default values of `scale` and `offset` are 1.0 and 0.0 respectively. They perform the adjustment of the intensity of the pixel values with the use of a formula.

```pseudo
new_pixel_value = (original_value x scale) + offset
```

While `scale` multiplies each pixel value, `offset` does the task by adding a fixed value.

Here is the image that be used as example to perform `.putdata()` method.

![Image of Python Logo](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow_python_logo.jpg)

## Example 1

The usage of `scale` and `offset` parameters on `.putdata()` method to adjust the pixel values and produced a dimmed image.

```py
# Get the sequenced pixel data from the image
pix_data = list(py_img.getdata())

# Use .putdata method to modify and put back the pixel data directly
py_img.putdata(pix_data, scale=0.8, offset=0)

# Show the image output
py_img.show()

```

Image Output:
![Image of Dimmed Python Logo](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow_python_logo_dimm.jpg)

## Example 2

Demonstrate `.putdata()` method to adjust the contrast of the original image.

```py
# Get the sequenced pixel data from the image
pix_data = list(py_img.getdata())

# Use .putdata method to modify and put back the pixel data directly
py_img.putdata(pix_data, scale=1.5, offset=-50)

# Show the image output
py_img.show()
```

Image Output:
![Image of Python Logo with contrast](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow_python_logo_contrast.jpg)

The `.putdata()` method works by accessing the pixel from the top left corner, multiplying its value by `scale,` and adding an `offset` value to it. Once that is finished, the method moves to the next pixel to the right, and so on down. Left to right, top to bottom.
