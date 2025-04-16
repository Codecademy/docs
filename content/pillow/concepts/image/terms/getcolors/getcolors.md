---
Title: '.getcolors()'
Description: 'Returns colors and their frequencies in an image.'
Subjects:
  - 'Computer Science'
  - 'Python Programming'
  - 'Image Processing'
Tags:
  - 'getcolors'
  - 'Imaging Library'
  - 'Pillow'
  - 'Python'
  - 'Image Processing'
CatalogContent:
  - 'Python Imaging Library Reference'
  - 'Image Object Methods'
---

In the Pillow library, the **`.getcolors()`** method is used to retrieve a list of colors used in an image along with the number of times each color occurs. This can be useful for analyzing image content, creating color palettes, or reducing image complexity.

The method returns a list of tuples where each tuple contains a count and a color value.

## Syntax

```python
Image.getcolors(maxcolors=256)
```
**Parameters:**
maxcolors (int) – The maximum number of colors to return. If the number of unique colors in the image exceeds this value, the method returns None.

**Return Value:**
A list of (count, color) tuples representing the number of times each color occurs in the image.

Returns None if the image has more than maxcolors unique colors.

Notes:
The image must be in a mode that supports .getcolors() such as 'RGB', 'RGBA', 'L', etc.
It's often useful to convert the image to a simpler mode like 'RGB' or 'P' before using this method.


## Example

The image to be used for this example is:

![Input image to perform the .getcolors() operation](https://raw.githubusercontent.com/Codecademy/docs/main/media/samandgos.jpg)

In this example, the `.getcolors()` method returns a list of (count, color) tuples representing the number of times each color occurs in the image:


```py
from PIL import Image

# Open an image
image = Image.open("samandgos.jpg")

# Convert image to RGB mode (if not already)
image = image.convert("RGB")

# Get up to 1000 colors in the image
colors = image.getcolors(maxcolors=1000)

if colors is None:
    print("Too many colors to count")
else:
    for count, color in colors:
        print(f"Color {color} occurs {count} times")
```

This code snippet opens an image, converts it to RGB, and then retrieves the top 1000 unique colors used in the image, along with how frequently each appears.
