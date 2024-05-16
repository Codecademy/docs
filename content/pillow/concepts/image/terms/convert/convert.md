---
Title: '.convert()'
Description: 'Converts an image from one mode to another.'
Subjects:
  - 'Computer Science'
  - 'Data Visualization'
Tags:
  - 'Pillow'
  - 'Methods'
  - 'Images'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In the Pillow library, the **`.convert()`** method converts an image from one mode to another, allowing for efficient processing and manipulation of the image. Here, mode refers to the way the image data is stored and interpreted.

Converting an image to a different mode can be useful for various purposes, such as changing the color space, reducing the number of channels, or converting to a format that is more suitable for a specific operation.

## Syntax

```pseudo
Image.convert(mode)
```

- `Image`: The image object to be converted.
- `mode`: The string that represents the mode to which the image is to be converted. The available modes depend on the image type and the version of the library being used.

The most common modes include:

- `L`: 8-bit pixels, black and white
- `RGB`: 3x8-bit pixels, true color
- `RGBA`: 4x8-bit pixels, true color with transparency mask
- `CMYK`: 4x8-bit pixels, color separation
- `YCbCr`: 3x8-bit pixels, color video format
- `I`: 32-bit signed integer pixels
- `F`: 32-bit floating point pixels

## Example

In this example, the `.convert()` method uses the `L` mode to convert an image to grayscale:

```python
from PIL import Image

# Opening an image file
image = Image.open("example.jpg")

# Converting the image to grayscale
converted_image = image.convert("L")

# Saving the grayscale image
converted_image.save("example_grayscale.jpg")

# Displaying the image mode
print("Mode of the converted image:", converted_image.mode)
```

The above code produces the following output:

```shell
Mode of the converted image: L
```
