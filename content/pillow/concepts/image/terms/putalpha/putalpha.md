---
Title: '.putalpha()'
Description: 'Modifies the alpha channel (transparency) of an image in the Pillow library.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization' 

Tags:
  - 'Python'
  - 'Pillow'
  - 'Computer Vision'
  - 'Images'
  - 'Values'

CatalogContent:
  - 'learn-python'
  - 'paths/computer-science'
---

The **`.putalpha()`** method in the Pillow library modifies the alpha channel of an image, allowing control over its transparency. This method can either apply a uniform transparency level to the entire image or use another image as an alpha mask.

## Syntax

```psuedo
image.putalpha(alpha)
```

### Parameters:
  - **`alpha`** (`int` or `Image`): Defines the transparency level of the image.
    - **`int`** (`0-255`): Applies uniform transparency across the entire image (`0` = fully transparent, `255` = fully opaque).
    - **`Image` object**: Uses the pixel values from the provided image as an alpha mask, determining varying levels of transparency.

## Example 1: Applying Uniform Transparency

```py
from PIL import Image

# Create a red image (200x200) with full opacity
image = Image.new("RGBA", (200, 200), (255, 0, 0, 255))
image.show()

# Apply 50% transparency
image.putalpha(128)

# Save and show the result
image.save("uniform_transparency.png")
image.show()
```

## Example 2: Using an Alpha Mask

``` py 
from PIL import Image 

# Open an existing image  
image = Image.open("example.png").convert("RGBA")  

# Create an RGBA image and an alpha mask  
alpha_mask = Image.open("mask.png").convert("L")  
image.putalpha(alpha_mask)  

# Save the new image  
image.save("example_masked.png") 
```

## Notes
- The `.putalpha()` method only works on images in **RGBA** or **LA** mode.
- When using an alpha mask, the mask must be in **L** (grayscale) or **1** (black-and-white) mode.
