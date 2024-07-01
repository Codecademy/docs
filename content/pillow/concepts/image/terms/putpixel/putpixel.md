---
Title: '.putpixel()'
Description: 'Sets the color of a specific pixel in an image to a given value.'
Subjects:
  - 'Computer science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Computer Vision'
  - 'Images'
  - 'Pillow'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`.putpixel()`** method in Pillow is used to insert pixels onto an image. It is primarily used to set the color of an individual pixel, but it can also be used for other purposes such as changing pixel transparency or creating different shapes within the image.

## Syntax

```pseudo
Image.putpixel(xy, color)
```

- `Image`: The image on which the pixel color is to be set.
- `xy`: Specifies the coordinates of the pixel where the color will be placed, `x` representing the horizontal position, and `y` representing the vertical position.
- `color`: Specifies the color for the pixel, which can be:
  - An RGB tuple (3 integers) for true color images.
  - An RGBA tuple (4 integers) for true color with transparency.
  - An Integer for a color index in indexed color images (`P` mode).
  - A Single integer or a tuple with a single integer for grayscale images (`M` mode).

## Example

The example below demonstrates the use of the `.putpixel()` method:

```py
from PIL import Image

# Define the dimensions of the image
width, height = 200, 200

# Create a new image with RGB mode and black background
img = Image.new('RGB', (width, height), color='black')

# Add a blue pixel at the specified position
blue_pixel_position = (50, 50)
blue_color = (0, 0, 255)

# Add a red pixel at the specified position
red_pixel_position = (100, 100)
red_color = (255, 0, 0)

# Add a green pixel at the specified position
green_pixel_position = (150, 150)
green_color = (0, 255, 0)

# Set pixels to desired colors
img.putpixel(red_pixel_position, red_color)
img.putpixel(green_pixel_position, green_color)
img.putpixel(blue_pixel_position, blue_color)

img.show()
```

The above code generates the output image as follows:

![Output Image](<https://raw.githubusercontent.com/Codecademy/docs/main/media/putpixel().png>)
