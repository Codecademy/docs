---
Title: '.show()'
Description: 'Displays an image using the default image viewer on the system.'
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

The **`.show()`** method in the Python Pillow library opens and displays an image using the system’s default image viewer. It's a convenient way to quickly inspect images during development or testing without saving them to disk.

## Syntax

```pseudo
image.show(title=None, command=None)
```

### Parameters

- `image`: An instance of the `Image` class from the Pillow library.
- `title` (Optional): A string specifying the window title (may not work on all platforms).
- `command` (Optional): A shell command specifying an alternative image display method. This is rarely needed in typical use cases.

## Example

The following example opens and displays an image file, `example.jpg`, using the system’s default image viewer:

```py
from PIL import Image

# Open an existing image
image = Image.open("example.jpg")

# Display the image
image.show()
```
