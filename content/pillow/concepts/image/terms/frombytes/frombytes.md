---
Title: '.frombytes()'
Description: '.frombytes() method in Pillow creates an image from raw byte data using a specified mode, size, and optional decoder arguments.'
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
  - 'paths/computer-science'
---

The **.frombytes()** method in Pillow is used to create an image from raw byte data. It reconstructs an image using a specified mode, size, and optional decoder arguments. This method is useful when working with raw image data that needs to be converted into a Pillow Image object.


## Syntax

```py
Image.frombytes(mode, size, data, decoder_name='raw', *args)
```
**Parameters**
- mode (str, required) – The color mode of the image (e.g., "RGB", "L", "RGBA").
- size (tuple, required) – The (width, height) of the image.
- data (bytes, required) – The raw image data.
- decoder_name (str, optional, default: 'raw') – The decoder to use for processing the data.
- *args (optional) – Additional arguments for the decoder.


## Example

The example below creates an RGB image from raw byte data:
```py
from PIL import Image

# Create a new image (64x64) with a gradient pattern
size = (64, 64)
img = Image.new("RGB", size)

# Generate pixel data (simple color gradient)
pixels = []
for y in range(size[1]):
    for x in range(size[0]):
        r = (x * 4) % 256   # Varying Red
        g = (y * 4) % 256   # Varying Green
        b = ((x + y) * 2) % 256  # Mixed Blue
        pixels.append((r, g, b))  # Add as a tuple

# Set pixel data
img.putdata(pixels)

# Show image
img.show()
```

The above code generates the below output image:
![Output Image](<https://raw.githubusercontent.com/Codecademy/docs/main/media/frombytes().png>)

