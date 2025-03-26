---
Title: '.paste()'
Description: 'Pastes an image onto another image at a specified position.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Images'
  - 'Libraries'
  - 'Methods'
  - 'Pillow'
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
- `mask` (Image, optional): A mask image controlling transparency. Must be in mode `"1"`, `"L"`, `"LA"`, `"RGBA"`, or `"RGBa"`. Only areas where the mask is nonzero are pasted.

**Return Value:**

This method modifies the original image in-place and does not return a new image.

## Example

This is the background image that will be used for the collage:

![The background image used as the base for the collage](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-paste-background.jpeg)

This is the foreground image that will be pasted onto the background:

![The foreground image that will be pasted onto the background](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-paste-foreground.jpeg)

This example demonstrates how to paste one image onto another to create a collage:

```py
from PIL import Image

# Open the background and foreground images
background = Image.open('background.jpeg')
foreground = Image.open('foreground.jpeg')

# Resize the foreground image to fit better on the background
foreground = foreground.resize((200, 200))

# Define the position where the foreground will be pasted (top-left corner)
position = (100, 100)

# Paste the foreground image onto the background
background.paste(foreground, position)

# Save the result
background.save('collage_result.jpeg')

# Display the image
background.show()
```

In this example, **foreground.jpeg** is pasted onto **background.jpeg** at the position `(100, 100)`.

The code above produces the image below:

![The final image with the foreground pasted onto the background at a specified position](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-paste-collage-result.jpeg)
