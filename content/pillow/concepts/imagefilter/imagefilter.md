---
Title: 'ImageFilter'
Description: 'Provides various image filters such as blur, contour, sharpen, and edge enhancement, allowing image enhancement and manipulation.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags: 
  - 'Computer Vision'
  - 'Effects'
  - 'Filter'
  - 'Images'
  - 'Pillow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'

---

The **ImageFilter** module helps add different filters to an image. This is used with the `image.filter()` method. This statement imports the `ImageFilter` module from the Pillow library, which is a fork of the Python Imaging Library (PIL). 

## Syntax

```pseudo
from PIL import ImageFilter

This statement imports the `ImageFilter` module from the Pillow library, which is a fork of the Python Imaging Library (PIL).


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



