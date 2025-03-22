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
---

The **`.paste()`** method in Pillow allows pasting one image onto another at a specified position. It is commonly used for image composition, watermarking, or creating collages. An optional mask can be provided to handle transparency.

## Syntax

```pseudo
Image.paste(im, box=None, mask=None)
```

**Parameters:**

- `im` (Image | integer | float | string | tuple): The source image to paste or a solid color. If a color is provided (tuple for RGB/RGBA, integer for grayscale, or color string like `"red"`), the `box` parameter must be specified.
- `box` (tuple, optional): Specifies where to paste the image. If a 2-tuple `(x, y)` is given, it defines the top-left corner. If a 4-tuple `(left, upper, right, lower)` is given, it defines a bounding box, and the pasted image is resized to fit it.
- `mask` (Image, optional): A mask image controlling transparency. Must be in mode "1", "L", "LA", "RGBA", or "RGBa". Only areas where the mask is nonzero are pasted.
  
**Return value:**

This method modifies the original image in-place and does not return a new image.

## Example

In this example, a collage is created by pasting one image onto another:

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

In this example, **foreground.png** is pasted onto **background.jpg** at the position `(100, 100)`. 

The code above produces the image below:

![Collage](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-paste-collage-result.jpeg)

Background image:

![Background image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-paste-background.jpeg)

Foreground image:

![Foreground image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-paste-foreground.jpeg)

