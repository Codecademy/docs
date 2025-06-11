---
Title: '.getdata()'
Description: 'Returns pixel values of an image as a sequence, useful for inspection and processing.'
Subjects:
  - 'Computer Science'
  - 'Data Visualization'
Tags:
  - 'Images'
  - 'Pillow'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.getdata()`** method in the Pillow library returns the pixel data of an image as a sequence. This allows in inspecting, manipulating, or analyzing the individual pixel values of an image, which is useful in image processing, filtering, or computer vision tasks.

## Syntax

```pseudo
Image.getdata()
```

**Parameters:**

This method does not take any parameters.

**Return value:**

A sequence object containing pixel values of the image. The format depends on the image mode:

- In "RGB" mode: each pixel is a tuple like `(R, G, B)`.
- In "L" (grayscale) mode: each pixel is a single integer representing light intensity.
- In "RGBA" mode: each pixel is a tuple like `(R, G, B, A)`.

## Example

The image used in this example is as follows:
![Sample Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow_getdata_sample.jpg)

The example here opens an image, reads the pixel data using `.getdata()`, and prints the first 10 pixel values:

```py
# Import the Image module from the PIL library
from PIL import Image

# Load the image
image = Image.open("pillow_getdata_sample.jpg")

# Get pixel data
pixels = image.getdata()

# Print the first 10 pixels
print(list(pixels)[:10])
```

The above code produces the following output:

```shell
[(245, 182, 176, 255), (244, 183, 177, 255), (245, 185, 179, 255), (244, 184, 179, 255), (244, 184, 178, 255), (244, 184, 178, 255), (244, 182, 178, 255), (243, 183, 176, 255), (243, 182, 175, 255), (243, 182, 177, 255)]
```
