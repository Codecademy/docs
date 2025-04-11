---
Title: 'point()'
Description: 'Applies a function or lookup table to each pixel in an image using the Pillow library.'
Subjects:
  - 'Python'
  - 'Image Processing'
  - 'Pillow'
Tags:
  - 'Image-manipulation'  
  - 'Pillow'
  - 'point()'
  - 'Python-method'
CatalogContent:
  - 'Learn-python-3'
  - 'paths/data-science'
---

The **`.point()`** method in the Python Pillow library is used to apply a function or lookup table to each pixel in an image. It is useful for performing operations like thresholding, gamma correction, or channel manipulation.

## Syntax

```python
Image.point(function, mode=None)
```

**Parameters:**

* `function` (callable or sequence):
A function or sequence that maps each pixel value to a new value. If a function is used, it's called once per pixel.
* 	`mode`(optional string):
A mode string (like "L" or "RGB") that defines the mode of the output image. This is rarely needed unless changing the image mode.

**Returns:**
* A new `image` object with the transformed pixel data.


## Example

```py
from PIL import Image

# Create a 4x4 grayscale image
image = Image.new("L", (4, 4))
pixels = [i * 16 for i in range(16)]  # Gradient values
image.putdata(pixels)

# Invert grayscale values using point()
inverted_image = image.point(lambda p: 255 - p)

# Save the result
inverted_image.save("inverted-image.png")
```
![Inverted Grayscale Image](/codecademyDocs/media/inverted-image.png)










