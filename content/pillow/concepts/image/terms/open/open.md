---
Title: '.open()'
Description: 'Returns an image object from an image file.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Images'
  - 'Methods'
  - 'Pillow'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Pillow, the **`.open()`** function opens an image file as an `Image` object. This is the first step in manipulating an image. However, it does not automatically read or display the image. To view or process the image, methods like `.show()` (to display) or `.load()` (to force loading into memory) can be used.

## Syntax

```pseudo
Image.open(fp, mode='r')
```

**Parameters:**

- `fp`: The file path or a file-like object.
- `mode`: The mode to open the file. `'r'` (read) is the default and the only supported mode.

**Return value:**

An `Image` object that represents the opened image.

## Example

In this example, the `.open()` function loads an image as an `Image` object, and using `with` ensures automatic closure of the file after processing:

```py
# Import the Image module from the PIL library
from PIL import Image

# Open an image file and assign it to a variable
image = Image.open('file-path')

# Alternatively, use `with` to ensure the file is properly closed after processing
with Image.open('file-path') as image:
  # Perform image processing here
  pass
```
