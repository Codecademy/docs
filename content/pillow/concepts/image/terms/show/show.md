---
Title: '.show()'
Description: 'Displays an image using the default image viewer on your system.'
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

The `.show()` method in the Python Pillow library is used to open and display an image using the system’s default image viewer. It provides a quick way to visually inspect images during development or testing without saving them to disk.

## Syntax

```pseudo
image.show(title=None, command=None)
```

### Parameters
- `image`: An instance of the `Image` class from the Pillow library.
- `title` (optional): A string specifying the window title (may not work on all platforms).
- `command` (optional): A shell command to execute for displaying the image (rarely used).

## Example

This code will open the image "example.jpg" using your system’s default image viewer:
```py
from PIL import Image

# Open an existing image
image = Image.open("example.jpg")

# Display the image
image.show()
```