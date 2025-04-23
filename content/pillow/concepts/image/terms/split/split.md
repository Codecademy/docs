---
Title: '.split()' 
Description: 'Splits an image into individual bands.' 
Subjects: 
  - 'Computer Science'
Tags: 
  - 'Python'
  - 'Methods'
  - 'Pillow'
  - 'Images'
CatalogContent: 
  - 'learn-git'
  - 'paths/computer-science'
---

The **`Image.split()`** method returns a tuple of individual image bands from an image.  

## Syntax

```pseudo
Image.split()
```

Splitting an RGB image creates three new images, each containing a copy of one of the original bands (red, green, blue).
- `r, g, b = Image.split()` is used to split an RGB image into separate bands
- `r, g, b, a = Image.split()` is used to split an RGBA image into separate bands

## Example

The following code opens an image, splits it into bands, and displays the red channel.

```py
from PIL import Image
img = Image.open("example.jpg")
r, g, b = img.split()
r.show()
```

