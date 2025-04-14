---
Title: '.frombytes()'
Description: 'Creates an image from raw byte data using a specified mode, size, and optional decoder arguments.'
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
  - 'paths/data-science'
---

The **`.frombytes()`** method in Pillow creates an image from raw byte data. It reconstructs an image using a specified mode, size, and optional decoder arguments. This method is useful when working with raw image data that needs to be converted into a Pillow `Image` object.

## Syntax

```pseudo
Image.frombytes(mode, size, data, decoder_name='raw', *args)
```

**Parameters:**

- `mode` (str): Specifies the color mode of the image (e.g., `"RGB"`, `"RGBA"`, `"L"` for grayscale).
- `size` (tuple): The dimensions of the image as `(width, height)`
- `data` (bytes): The raw image data for the given mode.
- `decoder_name` (str, optional, default=`'raw'`): Specifies the decoder used to interpret the raw byte data.
- `*args` (optional): Additional arguments for the decoder.

## Example

The example below creates an RGB image from raw byte data:

```py
from PIL import Image

# Create a new image (64x64) with a gradient pattern
size = (64, 64)

# Generate pixel data (simple color gradient)
pixels = []
for y in range(size[1]):
    for x in range(size[0]):
        r = (x * 4) % 256   # Red intensity increases horizontally
        g = (y * 4) % 256   # Green intensity increases vertically
        b = ((x + y) * 2) % 256  # Blue is a mix of both coordinates
        pixels.extend([r, g, b])

# Convert list to bytes and create an image from raw data
data = bytes(pixels)
img = Image.frombytes("RGB", size, data)

# Display the image
img.show()
```

The above code generates the below output image:

![The output is a 64x64 RGB gradient image, with red increasing horizontally, green vertically, and blue forming a diagonal blend.](https://raw.githubusercontent.com/Codecademy/docs/main/media/frombytes.png)
