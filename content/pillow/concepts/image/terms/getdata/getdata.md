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

**Returns:**  

A sequence object containing pixel values of the image. The format depends on the image mode:

- In "RGB" mode: each pixel is a tuple like `(R, G, B)`.
- In "L" (grayscale) mode: each pixel is a single integer representing light intensity.
- In "RGBA" mode: each pixel is a tuple like `(R, G, B, A)`.

## Example

The image used in this example is as follows:
![Sample Image](https://github.com/TanyaDyakonova/docs/raw/main/media/pillow_getdata_sample.jpg)

The example below opens an image, reads the pixel data using `.getdata()`, and prints the first 10 pixel values:

```py
# Import the Image module from the PIL library
from PIL import Image

# Load the image
image = Image.open("docs/media/pillow_getdata_sample.jpg")

# Get pixel data
pixels = image.getdata()

# Print the first 10 pixels
print(list(pixels)[:10])
```

The above code produces the following output:
<<<<<<< HEAD

```shell
[(135, 206, 234),
 (135, 206, 234),
 (135, 206, 234),
 (135, 206, 234),
 (135, 206, 234),
 (135, 206, 234),
 (135, 206, 234),
 (135, 206, 234),
 (135, 206, 234),
 (135, 206, 234)]
=======
```python
[(253, 252, 253),
 (254, 253, 254), 
 (254, 253, 252),
 (253, 252, 253), 
 (253, 253, 253), 
 (253, 252, 252), 
 (252, 252, 254), 
 (252, 252, 254), 
 (253, 253, 253), 
 (252, 254, 254)]

>>>>>>> 504f28e8 (Update image and output for getdata method example)
```

