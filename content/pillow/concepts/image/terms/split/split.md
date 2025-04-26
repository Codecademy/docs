---
Title: '.split()' 
Description: 'Splits an image into individual bands.' 
Subjects: 
  - 'Computer Science'
  - 'Data Visualization'
Tags:
  - 'Images'
  - 'Methods' 
  - 'Pillow'
  - 'Python'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.split()`** method in the Pillow library returns a tuple containing individual bands (channels) of an image. Each band is returned as a separate grayscale image. This method is commonly used in:
- **Color manipulation:** Isolating a color channel for analysis or adjustment.
- **Image filtering:** Applying effects to individual bands.
- **Computer vision:** Preprocessing steps that require access to raw channel data.
- **Image compositing:** Combining or modifying specific color components.

## Syntax

```pseudo
Image.split()
```

Splitting an RGB image creates three new images, each containing a copy of one of the original bands (red, green, blue).
- For an RGB image, `.split()` returns three images corresponding to the Red, Green, and Blue bands. `r, g, b = img.split()`
- For an RGBA image, `.split()` returns four images: Red, Green, Blue, and Alpha (transparency). `r, g, b, a = img.split()`

## Example

The following code opens an image, splits it into its bands, and displays the red channel:

```py
from PIL import Image

# Open the image
img = Image.open("example.jpg")

# Split the image into bands
r, g, b = img.split()

# Show the red band
r.show()
```
