---
Title: '.convert()'
Description: 'Converts an image from one mode to another, allowing for efficient processing and manipulation of the image.'
Subjects:
  - 'Computer Science'
  - 'Data Visualization'
Tags:
  - 'Pillow'
  - 'Image Processing'
  - 'Images'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

`Image.convert()` is a method in the Pillow library that converts an image from one mode to another. **Mode** refers to the way the image data is stored and interpreted.

Converting an image to a different mode can be useful for various purposes, such as changing the color space, reducing the number of channels, or converting to a format that is more suitable for a specific operation.

## Syntax

```pseudo
Image.convert(mode)
```

- `Image` - image object to be converted.
- `mode` - string that specifies the mode to convert the image to. The available modes depend on the image type and the version of the library being used. The most common modes include:
  - `'L'`: 8-bit pixels, black and white
  - `'RGB'`: 3x8-bit pixels, true color
  - `'RGBA'`: 4x8-bit pixels, true color with transparency mask
  - `'CMYK'`: 4x8-bit pixels, color separation
  - `'YCbCr'`: 3x8-bit pixels, color video format
  - `'I'`: 32-bit signed integer pixels
  - `'F'`: 32-bit floating point pixels

## Example

In this example, we convert an image to grayscale using the `'L'` mode:

```python
from PIL import Image

# Open an image file
image = Image.open("example.jpg")

# Convert the image to grayscale
converted_image = image.convert("L")

# Save the grayscale image
converted_image.save("example_grayscale.jpg")

# Display the image mode
print("Mode of the converted image:", converted_image.mode)
```

This saves the converted grayscale image as `example_grayscale.jpg` and prints the mode of the grayscale image:

```shell
Mode of the converted image: L
```
