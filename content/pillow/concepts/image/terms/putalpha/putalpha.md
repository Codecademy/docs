---
Title: '.putalpha()'
Description: 'Modifies the alpha channel (transparency) of an image in the Pillow library.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Computer Vision'
  - 'Images'
  - 'Python'
  - 'Pillow'
  - 'Values'
CatalogContent:
  - 'learn-python'
  - 'paths/computer-science'
---

The **`.putalpha()`** method in the Pillow library modifies the alpha channel of an image, allowing control over its transparency. This method can either apply a uniform transparency level to the entire image or use another image as an alpha mask.

## Syntax

```pseudo
image.putalpha(alpha)
```

### Parameters

- `alpha` (`int` or `Image`): Defines the transparency level of the image.
  - `int` (`0-255`): Applies uniform transparency across the entire image (`0` = fully transparent, `255` = fully opaque).
  - `Image` (object): Uses a grayscale image as an alpha mask, where pixel intensity (0-255) defines the transparency: 0 is fully transparent, and 255 is fully opaque.

## Examples

The following examples demonstrate how to apply transparency to an entire image using `.putalpha()`:

The original image is a _200x200_ red square with full opacity:

![The original image is a 200x200 red square with full opacity](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-putalpha-example.png)

### Applying Uniform Transparency

```py
from PIL import Image

# Load an example image (red square)
image = Image.open("pillow-putalpha-example.png").convert("RGBA")  # Ensure RGBA mode

# Apply 50% transparency to the entire image
image.putalpha(128)

# Save and show the result
image.save("pillow-putalpha-transparent-example.png")
image.show()
```

The above code loads the red square image, applies 50% transparency, and saves the modified version.

The output will be:

![The modified image has 50% transparency, making it appear faded.](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-putalpha-transparent-example.png)

### Using an Alpha Mask

Instead of applying uniform transparency, an alpha mask can be used to control transparency for each pixel as follows:

```py
from PIL import Image, ImageDraw

# Open an image and ensure it's in RGBA mode
image = Image.open("pillow-putalpha-example.png").convert("RGBA")

# Create an alpha mask with a vertical gradient
width, height = image.size
alpha_mask = Image.new("L", (width, height))  # 'L' mode for grayscale (alpha values)
draw = ImageDraw.Draw(alpha_mask)

# Fill the alpha mask with a gradient (top opaque, bottom transparent)
for y in range(height):
  alpha_value = int(255 * (1 - y / height))  # 255 (opaque) at top, 0 (transparent) at bottom
  draw.line([(0, y), (width, y)], fill=alpha_value)

# Apply the alpha mask
image.putalpha(alpha_mask)

# Save and show the result
image.save("pillow-putalpha-gradient-example.png")
image.show()
```

The modified image now has a gradient transparency effect, where the top remains fully visible, and the transparency gradually increases toward the bottom:

![The output image fades from fully opaque at the top to fully transparent at the bottom.](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-putalpha-gradient-example.png)

## Notes

- The `.putalpha()` method only modifies images in **RGBA (Red, Green, Blue, Alpha)** or **LA (Grayscale + Alpha)** mode. If the image is not in one of these modes, it must be converted first using `.convert("RGBA")` or `.convert("LA")`.
- When using an alpha mask, the mask must be in **L** (grayscale) or **1** (black-and-white) mode.
