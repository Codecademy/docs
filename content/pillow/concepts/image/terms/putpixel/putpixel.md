---
Title: '.putpixel()' 
Description: 'The putpixel() method in Python's Pillow library (PIL) is used to put a pixel in a specific place on an image. It takes two parameters, one being the position (x, y) and the other being the color.'
Subjects: 
  - 'Computer science'
  - 'Data Visualization'
  - 'Game development'
Tags: 
  - 'Images'
  - 'Value'
  - 'Computer vision'
  - 'Pillow'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---
## .putpixel() Method

The **.putpixel()** method is used to insert pixels onto an image. While it is mostly used to set the color of an individual pixel, it can also be used for other purposes such as changing pixel transparency or creating different shapes within the image.


## Syntax

```pseudo
Image.putpixel(xy, color)
```
**xy:** Specifies the coordinates of the pixel where the color will be placed, x representing the horizontal position, and y representing the vertical position.

**color:** Specify the color that you want the pixel to be set as. This can be in various forms inside a tuple such as RGB or an integar that specifies the color index.
## Example

```py
from PIL import Image

width, height = 200, 200
img = Image.new('RGB', (width, height), color='black')


#Adds the blue pixel on image
blue_pixel_position = (50, 50)
blue_color = (0, 0, 255)

#Adds the red pixel on image
red_pixel_position = (100, 100)
red_color = (255, 0, 0)

#Adds the green pixel on image
green_pixel_position = (150, 150)
green_color = (0, 255, 0)


img.putpixel(red_pixel_position, red_color)
img.putpixel(green_pixel_position, green_color)
img.putpixel(blue_pixel_position, blue_color)


img.save("output_image.png")
```

```shell
python putpixel.py
```
