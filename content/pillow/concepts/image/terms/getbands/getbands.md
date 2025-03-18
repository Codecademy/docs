---
Title: '.getbands()'
Description: 'PIL.Image.getbands() returns a tuple that contains the name of each band in the image. '
Subjects:
  - 'Computer Science'
  - 'Data Visualization'
Tags:
  - 'Pillow'
  - 'Methods'
  - 'Images'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

In the Pillow library, the **`PIL.Image.getbands()`** method returns a tuple that contains the name of each band of the image. For example, on an CMYK image `.getbands()` will return ('C', 'M', 'Y', 'K').

## Syntax

```pseudo
Image.getbands()
```

> Note: The .getbands() method does not take any arguments.

## Example

In this example, the `.getbands()` method returns the band names of the example image:

```python
from PIL import Image

# Opening an image file
img = Image.open("example.jpg")

# Get the band names
img.getbands()
```

The above code produces the following output:

```shell
('C', 'M', 'Y', 'K')
```
