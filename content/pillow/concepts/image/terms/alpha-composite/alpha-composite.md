---
Title: '.alpha_composite()'
Description: 'Merges two images by overlaying the foreground onto the background using their alpha (transparency) channels.'
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

- `background` (Image): The background image, which must be in `RGBA` mode.
- `foreground` (Image): The foreground image, which must also be in `RGBA` mode.

> **Note:** The `.alpha_composite()` method requires both `background` and `foreground` parameters to have the same size `(width & height)`, otherwise, it won't work as expected.

## Example

The following example demonstrates the use of the `.alpha_composite()` method:

```py
from PIL import Image

# Open background and foreground images
background = Image.open("background.png").convert("RGBA")
foreground = Image.open("foreground.png").convert("RGBA")

# Composite the images
result = Image.alpha_composite(background, foreground)

# Display and save the result
result.show()
result.save('ship-on-ocean.png')
```

Original Background Image:

![Original background image is the image of an ocean with sun and clouds in the sky.](https://raw.githubusercontent.com/Codecademy/docs/main/media/ocean.png)

Original Foreground Image:

![Original foreground image is the image of a ship.](https://raw.githubusercontent.com/Codecademy/docs/main/media/ship.png)

Result Composite Image:

![The resulting composite image shows the ship on the ocean.](https://raw.githubusercontent.com/Codecademy/docs/main/media/ship-on-ocean.png)
