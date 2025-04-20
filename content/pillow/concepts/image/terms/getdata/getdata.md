---
Title: 'Image.getdata()'
Description: 'Returns pixel values of an image as a sequence, useful for inspection and processing.'
Subjects:
  - 'Pillow'
  - 'Image Processing'
Tags:
  - 'Python'
  - 'Pillow'
  - 'Image'
  - 'Image.getdata()'
CatalogContent:
  - 'learn-python-3'
---

# `.getdata()`

The `.getdata()` method in the Pillow library returns the pixel data of an image as a sequence. This allows you to inspect, manipulate, or analyze the individual pixel values of an image — useful in image processing, filtering, or computer vision tasks.

---


## Syntax

```python
Image.getdata()
```

**Returns:**  
A sequence object containing pixel values of the image. The format of the pixel values depends on the image mode:

- For `"RGB"` images: each pixel is a tuple like `(R, G, B)`
- For `"L"` (grayscale): each pixel is a single integer representing light intensity
- For `"RGBA"` images: each pixel is a tuple like `(R, G, B, A)`

**Parameters:**  
This method does not take any parameters.

## Example

![Image of Landscape](https://github.com/TanyaDyakonova/docs/raw/main/media/pillow_getdata_sample.jpg)

The example below opens an image, reads the pixel data using .getdata(), and prints the first 10 pixel values.

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
```python
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
```

