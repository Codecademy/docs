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

In the Pillow library, the **`.save()`** method saves an image to a specified filename. The filename, provided by the user or the code writer,determines the format in which the image is saved.

## Syntax

```pseudo
image.save(fp, format=none, **params)
```

**Parameters:**

- `fp`: The file path or file object where the image will be saved. 
- `format` (Optional): The format to save the image in (e.g., `"JPEG"`, `"PNG"`). If omitted, Pillow infers the format from the file extension.
- `**params` (OPtional): Additional parameters specific to the image format.

**Return value:**

The `.save()` method in Pillow does not return anything; it performs an in-place operation to save the image file.

## Example

The code imports the `Image` module from the Pillow library. It opens an image file and saves it under a new name. The image used in this code is:

![Image to be opened](https://raw.githubusercontent.com/Codecademy/docs/main/media/blueMacaw.jpg)

```py
from PIL import Image

newImage = Image.open(r"C:\Users\Codecademy\Desktop\bird.jpg") 

newImage.save("fluffy.jpg")
```

The given code opens an image file (`bird.jpg`) and saves it under a new name (`fluffy.jpg`).
