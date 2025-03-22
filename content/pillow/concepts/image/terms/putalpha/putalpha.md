---
Title: '.putalpha()'
Description: 'Modifies the alpha channel (transparency) of an image in the Pillow library.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Python'
  - 'Pillow'
  - 'Image Processing'
CatalogContent:
  - 'learn-python'
  - 'paths/computer-science'
---

## Description

The `.putalpha()` method in the **Pillow** library modifies the alpha channel of an image, controlling its transparency. This method allows setting a uniform transparency level or using another image as an alpha mask.
## Syntax

```python
image.putalpha(alpha)
```

### Parameters:
- `alpha` *(int or Image)*: The alpha value to be applied.
  - If an integer (0-255), it sets a uniform transparency level for the entire image (0 is fully transparent, 255 is fully opaque).
  - If an `Image` object, it applies the alpha values from that image as a transparency mask.

## Example

```python
from PIL import Image

# Open an existing image
image = Image.open("example.png").convert("RGBA")

# Modify the alpha channel (50% transparency)
image.putalpha(128)

# Save the new image
image.save("example_transparent.png")
```

### Example Using an Alpha Mask

```python
# Create an RGBA image and an alpha mask
alpha_mask = Image.open("mask.png").convert("L")
image.putalpha(alpha_mask)
image.save("example_masked.png")
```

## Notes
- The `.putalpha()` method only works on images in **RGBA** or **LA** mode.
- When using an alpha mask, the mask must be in **L** (grayscale) or **1** (black-and-white) mode.

## Related Methods
- `.convert("RGBA")` – Ensures the image has an alpha channel before using `.putalpha()`.
- `.split()` – Separates an image into its component bands, including the alpha channel.

## Resources
- [Pillow Documentation: Image.putalpha()](https://pillow.readthedocs.io/en/stable/reference/Image.html#PIL.Image.Image.putalpha)
