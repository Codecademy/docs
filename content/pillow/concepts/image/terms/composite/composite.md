---
Title: '.composite()'
Description: 'Creates a composite image by blending two images using a transparency mask.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Images'
  - 'Libraries'
  - 'Pillow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.composite()`** method creates composite images by blending two images using a transparency mask. This powerful feature allows selective combination of visual elements from different sources using a third image as a mask to control the blending.

`.composite()` method is particularly useful for photo manipulation, creative design work, and generating custom visuals where precise control over image composition is needed. Common applications include creating collages, applying watermarks selectively, generating special visual effects, or combining elements from multiple images.

## Syntax

```pseudo
Image.composite(image1, image2, mask)
```

**Parameters:**

- `image1`: The first image to be composited.
- `image2`: The second image to be composited. Must have the same mode and size as the first image.
- `mask`: A grayscale or transparency mask that determines how image1 and image2 are blended. The mask can have:
  - `"L"` mode (grayscale): Uses pixel values (0–255) to control blending.
  - `"1"` mode (binary): Only allows fully visible (white) or fully hidden (black) areas.
  - `"RGBA"` mode: Uses the alpha channel (A) for blending but requires correct transparency values.

**Return value:**

The method returns a new composite image.

## `.composite()` Vs. `.paste()` Vs. `.alpha_composite()`

Each of these Pillow methods is used for combining images but works differently:

- `.composite()` blends two images using a separate mask, allowing selective transparency.
- `.paste()` directly overlays one image onto another at a specified position, optionally using a mask.
- `.alpha_composite()` merges images based on their alpha channels, ensuring smooth transparency handling.

For a deeper dive into each method, refer to their respective entries:

- [`.paste()`](https://www.codecademy.com/resources/docs/pillow/image/alpha-composite)
- [`.alpha_composite()`](https://www.codecademy.com/resources/docs/pillow/image/alpha-composite)

## Example 1: Basic Image Compositing Using a Mask

This example demonstrates how to composite two images using a binary mask. The mask determines which parts of each image will appear in the final result:

```py
from PIL import Image, ImageDraw

# Open the two images to be composited
image1 = Image.open('mountain.jpg')
image2 = Image.open('ocean.jpg').resize(image1.size)

# Create a simple mask (grayscale mode 'L')
mask = Image.new('L', image1.size, 0)
draw = ImageDraw.Draw(mask)  # Create a drawing object

# Draw a white circle in the center (visible area for image1)
draw.ellipse((150, 100, 350, 300), fill=255)

# Composite the images using the mask
result = Image.composite(image1, image2, mask)

# Display the result
result.show()

# Save the result
result.save('composite_result.jpg')
```

The output for this example will be as follows:

![A circular masked composite image blending a mountain and ocean scene](https://raw.githubusercontent.com/Codecademy/docs/main/media/composite_output1.jpg)

This example creates a composite where `image1` appears inside the white circle area of the mask, while `image2` appears in the black areas. The result is a seamless blend of both images according to the mask pattern.

## Example 2: Creating Smooth Transitions with Gradient Masks

This example shows how to create a gradient mask for a smoother transition between images, ideal for creative blending effects:

```py
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

# Open the source images
image1 = Image.open('mountain.jpg')
image2 = Image.open('ocean.jpg').resize(image1.size)

# Create a horizontal gradient mask (black to white)
mask_array = np.tile(np.linspace(0, 255, image1.width), (image1.height, 1))
mask = Image.fromarray(mask_array.astype('uint8'))

# Apply a slight blur to make the transition smoother
mask_blur = mask.filter(ImageFilter.GaussianBlur(20))

# Composite the images
result = Image.composite(image1, image2, mask_blur)

# Display the result
result.show()

# Save the result
result.save('gradient_composite.jpg')
```

The output for this example will be as follows:

![A gradient-blended composite image transitioning from ocean to mountain](https://raw.githubusercontent.com/Codecademy/docs/main/media/composite_output2.jpg)

This creates a gradual transition from `image2` on the left to `image1` on the right. The blur applied to the mask softens the transition, resulting in a more natural blend between the images.

## Example 3: Creating a Shape-Based Composite for Custom Masks

This example demonstrates using a custom shape as a mask to create visually interesting compositions:

```py
from PIL import Image, ImageDraw, ImageFilter

# Open the source images
portrait = Image.open('mountain.jpg')
scene = Image.open('ocean.jpg').resize(portrait.size)

# Create a custom shape mask
mask = Image.new('L', portrait.size, 0)
draw = ImageDraw.Draw(mask)

# Create a heart shape
heart_points = [
    (200, 100), (150, 50), (100, 100),
    (100, 150), (200, 250), (300, 150),
    (300, 100), (250, 50), (200, 100)
]
draw.polygon(heart_points, fill=255)

# Apply a blur to soften the edges
mask_blur = mask.filter(ImageFilter.GaussianBlur(5))

# Composite the images
result = Image.composite(portrait, scene, mask_blur)

# Display the result
result.show()

# Save the result
result.save('heart_composite.jpg')
```

The output for this example will be as follows:

![A heart-shaped masked composite image blending an ocean and mountain scene](https://raw.githubusercontent.com/Codecademy/docs/main/media/composite_output3.jpg)

This example creates a heart-shaped window where the portrait image appears within the heart shape, while the landscape image fills the rest of the canvas. The blurred mask creates soft edges for a polished look.
