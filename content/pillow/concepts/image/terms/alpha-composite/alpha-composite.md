---
Title: '.alpha_composite()'
Description: 'Merge two images by overlaying the foreground onto the background using their alpha (transparency) channels.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Computer Vision'
  - 'Images'
  - 'Pillow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Pillow, the **`.alpha_composite()`** method _merges_ two images by overlaying the foreground onto the background using their _alpha_ (transparency) channels. It returns a new image with the composite result.

## Syntax

```py
Image.alpha_composite(background, foreground)
```

- `background`: The background image should be in `RGBA` mode.
- `foreground`: The foreground image should be in `RGBA` mode as well.

> **Note:** The `.alpha_composite()` method requires the `background` and the `foreground` parameter to have the same size `(width & height)`, otherwise, it won't work as expected.

## Example

The following example demonstrates the use of the `.alpha_composite()` methods:

```py
from PIL import Image

# Open background and foreground images
background = Image.open("background.png").convert("RGBA")
foreground = Image.open("foreground.png").convert("RGBA")

# Composite the images
result = Image.alpha_composite(background, foreground)

# Display and save the result
result.show()
result.save('ship_on_ocean.png')
```

Original Background Image:

![Original Background Image](/media/ocean.png)

Original Foreground Image:

![Original Foreground Image](/media/ship.png)

Result Composite Image:

![Result Composite Image](/media/ship_on_ocean.png)
