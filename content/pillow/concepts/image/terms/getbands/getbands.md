---
Title: '.getbands()'
Description: 'Returns a tuple that contains the name of each band in the image.'
Subjects:
  - 'Computer Science'
  - 'Data Visualization'
Tags:
  - 'Images'
  - 'Methods'
  - 'Pillow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In the Pillow library, the **`.getbands()`** method returns a [tuple](https://www.codecademy.com/resources/docs/python/tuples) that contains the name of each band in an image. For example, for a CMYK image, `.getbands()` will return `('C', 'M', 'Y', 'K')`.

## Syntax

```pseudo
Image.getbands()
```

**Parameters:**

The `.getbands()` method does not take any parameters.

**Return Value:**

Returns a tuple of strings, where each string represents the name of a color band in the image.

## Example

The image to be used for this example is:

![Input image to perform the .getbands() operation](https://raw.githubusercontent.com/Codecademy/docs/main/media/samandgos.jpg)

In this example, the `.getbands()` method returns the band names of the example image:

```py
from PIL import Image

# Opening the image file
img = Image.open("samandgos.jpg")

# Getting the band names
bands = img.getbands()

print(bands)
```

The above code produces the following output:

```shell
('R', 'G', 'B', 'A')
```
