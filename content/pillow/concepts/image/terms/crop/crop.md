---
Title: '.crop()'
Description: 'Returns a given image cropped to a specified rectangular area.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
Tags:
  - 'Computer Vision'
  - 'Images'
  - 'Pillow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In the Pillow library, the **`.crop()`** method returns a given image cropped to a specified rectangular area.

## Syntax

```pseudo
Image.crop(box=None)
```

- `box`: It is a 4-tuple representing the rectangular area of the image to be cropped.

This tuple comprises four integer values, i.e., `(left, upper, right, lower)`. They signify the coordinates of the left, upper, right, and lower edges of the area to be cropped, respectively.

## Example

The following example uses `.crop()` to return an area within the provided image:

```py
from PIL import Image

# The original image has a size of 1024x768 pixels
with Image.open('Photo.jpeg') as photo:

  # Displaying the original image
  photo.show()

  # Assigning the desired crop region, which can be envisioned as (x1, y1, x2, y2)
  (left, upper, right, lower) = (100, 100, 600, 600)

  # Saving the cropped image to the 'croppedVarName' variable
  croppedVarName = photo.crop((left, upper, right, lower))

  # Displaying the cropped image
  croppedVarName.show()
```

The above code displays two images as the output. Here is the first one, which is the original image:

![Original Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-original.jpeg)

Here is the second one, which is the cropped image:

![Cropped Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-crop.png)
