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

The **`.getpixel()`** method is part of the [`Image`](https://www.codecademy.com/resources/docs/pillow/image) module in the Pillow library.

It takes `(x, y)` coordinates as a [tuple](https://www.codecademy.com/resources/docs/python/tuples) and returns the pixel value at that location. If the image is grayscale (mode `"L"`), it returns an integer. For an RGB image, it returns a tuple `(R, G, B)`, and for an RGBA image, it returns `(R, G, B, A)`.

## Syntax

```pseudo
Image.getpixel(xy)
```

- `xy` (tuple or list of two integers): The `(x, y)` coordinates of the pixel to retrieve.

## Example

Here is the image to be used:

![Image of a Peacock](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-getpixel-peacock.png)

The following example demonstrates the usage of the `.getpixel()` method:

```py
# Import the Image module from the PIL library
from PIL import Image

# Open the image file and store it in the img variable
img = Image.open('peacock.png')

# Get the RGBA value of the pixel at position (50, 50)
rgba_value = img.getpixel((50, 50))

# Print the RGBA value
print(rgba_value)
```

The above code produces the following output:

```shell
(69, 89, 46, 255)
```

The output `(69, 89, 46, 255)` represents the RGBA values of the pixel at `(50, 50)` in the image. The values indicate that the red component is `69`, the green component is `89`, the blue component is `46`, and the alpha component is `255`, meaning the pixel is fully opaque. Since the image is in RGBA mode, `.getpixel()` returns four values instead of three.
