---
Title: 'ImageFilter'
Description: 'Used to apply filters on an image'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags: 
  - 'Computer Vision'
  - 'Effects'
  - 'Filter'
  - 'Images'
  - 'Pillow
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

The **ImageFilter** module helps add different filters to an image. This is used with the `image.filter()` method

## Syntax

```pseudo
Image.filter(filter)

`filter`: A filter that will be applied to the image.

## Example

```py
from PIL import Image, ImageFilter

# Open an image file
image = Image.open('example.jpg')

# Apply a filter to the image
filtered_image = image.filter(ImageFilter.SHARPEN)

# Save the filtered image
filtered_image.save("example_blur.jpg")

# show the filtered image
filtered_image.show()

The code will show a blurred image.

image= Image.open(pexels-pixabay-349758.jpg)

filtered_image = image.filter(ImageFilter.SHARPEN)

filtered_image.save("pexels-pixabay-349758_blur.jpg")

filtered_image.show()

