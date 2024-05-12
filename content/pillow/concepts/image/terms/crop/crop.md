---
Title: '.crop()'
Description: 'Returns a cropped image to a variable using four provided coordinates.'
Subjects: 
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Images'
  - 'Pillow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science-foundations'
---

In the Pillow library, the **.crop()** method is used to return a rectangular area from an image. Pillow is a fork the Python Imaging Library that has extensive file format support and additional image processing methods. Pillow can be installed locally using **pip**

## Syntax

```pseudo
Image.crop(box: tuple[int, int, int, int] | None = None)
```

`box`:  A 4-tuple that determines the crop region. The first two int arguements are the upper left x and y coordinates, while the last two are the lower right x and y coordinates.

Returns an **Image** object.

## Example

The following example uses `.crop()` to return an area within the provided image:

```py
from PIL import Image

# The original image has a size of 1024x768 pixels.
with Image.open('Photo.jpeg') as photo:

    # Assigns the desired crop region.
    # This can be envisioned as (x1, y1, x2, y2).
    (left, upper, right, lower) = (100, 100, 600, 600)

    # "croppedVarName" will be the variable that holds our new cropped image.
    croppedVarName = photo.crop((left, upper, right, lower))

    # Displays the cropped image in a new window.
    croppedVarName.show()
    
```
![Crop Results](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-crop.png)
