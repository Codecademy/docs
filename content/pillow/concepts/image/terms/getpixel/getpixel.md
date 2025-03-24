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

 It takes `(x, y)` coordinates as a tuple and returns the pixel value at that location. If the image is grayscale (mode `"L"`), it returns an integer. For an RGB image, it returns a tuple `(R, G, B)`, and for an RGBA image, it returns `(R, G, B, A)`.
 
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

# Get the RGB value of the pixel at position (50, 50)
rgb_value = img.getpixel((50, 50))

# Print the RGB value
print(rgb_value)
```

The above code produces the following output:

```shell
(148, 178, 84)
```
