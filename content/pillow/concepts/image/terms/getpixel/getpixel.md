---
Title: '.getpixel()'
Description: 'Returns the pixel value at the specified co-ordinates.'
Subjects:
  - 'Computer Science'
  - 'Data Visualization'
  - 'Data Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Computer Vision'
  - 'Images'
  - 'Pillow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **.getpixel()** method is part of the [Image](https://www.codecademy.com/resources/docs/pillow/image) module of the [Pillow](https://www.codecademy.com/resources/docs/pillow) image processing library.

It takes the x, y coordinates in the form of a tuple and returns the pixel value at that location in the image. If the image is grayscale, this will be an integer. An RGB image will return a tuple of the respective red/green/blue values.

## Syntax

```pseudo
Image.getpixel((x, y))
```

- `Image`: The image object.
- `(x, y)`: A 2-tuple representing the co-ordinates of the pixel, where (0, 0) represents the top-left corner of the image.

## Example

The following example uses the peacock image below:
![Image of a Peacock](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-getpixel-peacock.png)

```py
# Import the Image module from the PIL library
from PIL import Image

# Open the image file and store it in the img variable
img = Image.open('peacock.png')

# Get the RGB value of the pixel at position (50,50)
rgb_value = img.getpixel((50, 50))

# Print the RGB value
print(rgb_value) # Output: (148, 178, 84)
```
