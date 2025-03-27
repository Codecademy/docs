---
Title: '.save()'
Description: 'Saves an image to a specified file.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Images'
  - 'Libraries'
  - 'Pillow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In the Pillow library, the **`.save()`** method saves an image to a specified filename. The filename, provided by the user or the code writer, determines the format in which the image is saved.

## Syntax

```pseudo
image.save(fp, format=none, **params)
```

**Parameters:**

- `fp`: The file path or file object where the image will be saved.
- `format` (Optional): The format to save the image in (e.g., `"JPEG"`, `"PNG"`). If omitted, Pillow infers the format from the file extension.
- `**params` (Optional): Additional parameters specific to the image format.

**Return value:**

The `.save()` method in Pillow does not return anything. It performs an in-place operation to save the image file.

## Example

The image to be used in this example is:

![Image to be opened](https://raw.githubusercontent.com/Codecademy/docs/main/media/blueMacaw.jpg)

The following example demonstrates the usage of the `.save()` method:

```py
from PIL import Image

newImage = Image.open("blueMacaw.jpg")

newImage.save("fluffy.jpg")
```

The given code opens an image file (`blueMacaw.jpg`) and saves it under a new name (`fluffy.jpg`).
