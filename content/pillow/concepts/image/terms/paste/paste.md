---
Title: '.paste()'
Description: 'Pastes an image onto another image at a specified position.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Images'
  - 'Libraries'
  - 'Methods'
  - 'Pillow'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

The `.paste()` **method** in Pillow allows for pasting one image onto another at a specified position. This method can be used for image composition, watermarking, or creating collages.

## Syntax

```py
Image.paste(im, box=None, mask=None)
```

**Parameters:**

- `im` (Image | integer | float | string | tuple): The source image or a color value to paste. If a color value is provided (as a tuple for RGB or RGBA images, integer or color string), the box parameter must be specified.
- `box` (tuple, optional): A 2-tuple `(x, y)` or 4-tuple `(x, y, width, height)` specifying the region to paste into. If a 2-tuple is provided, it represents the upper left corner of the paste location. If a 4-tuple is provided, it represents the (left, upper, right, lower) bounding box.
- `mask` (Image, optional): A mask image. If given, this should have mode "1", "L", "LA", "RGBA" or "RGBa". Only the pixels where the mask is non-zero are pasted.

## Example

In this example, we'll create a simple collage by pasting one image onto another:

```py
from PIL import Image

# Open the background and foreground images
background = Image.open('background.png')
foreground = Image.open('foreground.png')

# Resize the foreground image if needed
foreground = foreground.resize((200, 200))

# Define the position (top-left corner) to paste the foreground image
position = (100, 100)

background.paste(foreground, position)

# Save the result
background.save('collage_result.png')

# Display the image
background.show()
```

In this example, foreground.png is pasted onto background.jpg at the position(100, 100).

The code above produces the image below:

![Collage](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-paste-collage-result.jpeg)

Background image:

![Background image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-paste-background.jpeg)

Foreground image:

![Foreground image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-paste-foreground.jpeg)
