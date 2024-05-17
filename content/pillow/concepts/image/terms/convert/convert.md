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
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

In the Pillow library, the **`.convert()`** method converts an image from one mode to another, allowing for efficient processing and manipulation of the image. Here, mode refers to the way the image data is stored and interpreted.

Converting an image to a different mode can be useful for various purposes, such as changing the color space, reducing the number of channels, or converting to a format that is more suitable for a specific operation.

## Syntax

```pseudo
Image.convert(mode=None, matrix=None, dither=None, palette=0, ...)
```

- `Image`: The image object to be converted.
- `mode`: The string that represents the mode to which the image is to be converted. The available modes depend on the image type and the version of the library being used.
- `matrix`: An optional conversion matrix for color space transformations.
- `dither`: Specifies the dithering method to use during conversion from mode `RGB` to `P` or from `RGB` or `L` to `1`. The default is `None`. This parameter is not used when a `matrix` is provided.
- `palette`: The palette used when converting from mode `RGB` to `P`.

> **Note**: The ellipsis (...) indicates that there can be additional optional parameters beyond those listed here.

The most common modes include:

- `L`: 8-bit grayscale, suitable for black and white images.
- `RGB`: 24-bit true color, ideal for full-color images.
- `RGBA`: 32-bit true color with transparency, for smooth blending.
- `CMYK`: 32-bit color separation, used in printing.
- `YCbCr`: 24-bit color video format, commonly used in video encoding.
- `I`: 32-bit signed integer, provides high precision.
- `F`: 32-bit floating point, offers accuracy and a wide dynamic range.

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

# Displaying the images
print("Original Image:")
image.show()

print("Converted Image:")
converted_image.show()
```

The above code produces the following output:

```shell
Mode of the converted image: L
```

Original Image:

![Original Image](/media/pillow-image-example.jpg)

Converted Image:

![Grayscale Image](/media//pillow-image-grayscale-example.jpg)
