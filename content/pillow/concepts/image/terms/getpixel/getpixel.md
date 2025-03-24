---
Title: '.getpixel()'
Description: 'Returns the pixel value at the specified coordinates.'
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

The **`.getpixel()`** method is part of the `Image` module in the Pillow image processing library.

It takes the x, y coordinates of an image in the form of a tuple and returns the pixel value at that location in the image. If the image is grayscale, this will be an integer. An RGB image returns a tuple of the respective red/green/blue values.

## Syntax

```pseudo
Image.getpixel((x, y))
```

- `Image`: The image object.
- `(x, y)`: A 2-tuple representing the coordinates of the pixel, where `(0, 0)` indicates the top-left corner of the image.

## Example

Here is the image to be used:

![Image of a Peacock](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-getpixel-peacock.png)

The following example demonstrates the usage of the `.getpixel()` method:

```py
# Import the Image module from the PIL library
from PIL import Image

# Open the image file and store it in the img variable
img = Image.open('peacock.png')

# Get the RGB value of the pixel at position (50, 50)
rgb_value = img.getpixel((50, 50))

# Print the RGB value
print(rgb_value)
```

The above code produces the following output:

```shell
(148, 178, 84)
```
