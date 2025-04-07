---
Title: '.blend()'
Description: 'Creates a new image by interpolating between two input images using a constant alpha value.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Images'
  - 'Pillow'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.blend()`** method in Pillow's Image module creates a new image by interpolating between two input images using a constant alpha value. This method is a powerful tool for image processing that allows to combine or mix two images with different levels of transparency.

Image blending is commonly used in graphics, image processing, and computer vision to achieve various visual effects like smooth transitions, overlays, watermarks, and creating composite images. The blend operation performs a pixel-by-pixel calculation using a weighted sum controlled by the alpha parameter.

## Syntax

```pseudo
PIL.Image.blend(im1, im2, alpha)
```

**Parameters:**

- `im1`: The first image.
- `im2`: The second image. Must have the same mode and size as the first image.
- `alpha`: The interpolation alpha factor. If alpha is 0.0, a copy of the first image is returned. If alpha is 1.0, a copy of the second image is returned. There are no restrictions on the alpha value. If necessary, the result is clipped to fit into the allowed output range.

**Return value:**

This method returns an `Image` object containing the blended result.

## Example 1: Basic Image Blending with Pillow

This example demonstrates how to use the `.blend()` method to create a simple 50/50 blend of two images.

```py
from PIL import Image

# Load two images
image1 = Image.open("mountains.jpg")
image2 = Image.open("ocean.jpg")

# Make sure both images have the same mode and size
image2 = image2.resize(image1.size)
image2 = image2.convert(image1.mode)

# Blend the images with alpha = 0.5 (equal parts of both images)
blended_image = Image.blend(image1, image2, alpha=0.5)

# Save the result
blended_image.save("blended_image.png")
```

![Output image after blending two images](https://raw.githubusercontent.com/Codecademy/docs/main/media/blended_image.png)

This basic example loads two images, ensures they have the same size and mode (required by the `.blend()` method), and creates a new image that contains 50% of each input image. The alpha value of 0.5 gives equal weight to both images in the final result.

## Example 2: Creating a Fade Effect Between Images

This example shows how to create a series of images that fade from one image to another, which could be used to create transition animations.

```py
from PIL import Image
import os

# Load two images
image1 = Image.open("mountains.jpg").convert("RGBA")
image2 = Image.open("ocean.jpg").convert("RGBA")

# Resize the second image to match the first
image2 = image2.resize(image1.size)

# Create a directory for the frames if it doesn't exist
os.makedirs("frames", exist_ok=True)

# Create 10 frames with different alpha values
frames = 10
for i in range(frames + 1):
  # Calculate alpha for this frame
  alpha = i / frames

  # Blend the images with the current alpha
  blended = Image.blend(image1, image2, alpha)

  # Save the frame
  blended.save(f"frames/frame_{i:02d}.png")

  # Print progress
  print(f"Created frame {i}/{frames} with alpha = {alpha:.2f}")

print("All frames created successfully!")
```

This example creates a series of images that gradually transition from the first image to the second by incrementally increasing the alpha value. This technique is useful for creating smooth transitions between images for animations, slideshows, or video effects.

## Example 3: Creating a Watermark Effect with Variable Opacity

This example demonstrates how to use the `.blend()` method to apply a watermark to an image with adjustable opacity.

```py
from PIL import Image, ImageDraw, ImageFont

def create_watermark(text, size, font_size=60, color=(255, 255, 255, 128)):
    """Create a transparent image with text as a watermark."""
    watermark = Image.new('RGBA', size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(watermark)

    # Load font
    try:
        font = ImageFont.truetype("arial.ttf", font_size)
    except IOError:
        font = ImageFont.load_default()

    # Get text dimensions
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width, text_height = text_bbox[2] - text_bbox[0], text_bbox[3] - text_bbox[1]

    # Center text position
    position = ((size[0] - text_width) // 2, (size[1] - text_height) // 2)

    # Draw the text
    draw.text(position, text, font=font, fill=color)

    return watermark

# Load base image
base_image = Image.open("mountains.jpg").convert("RGBA")

# Create a transparent watermark
watermark = create_watermark("Copyright 2025", base_image.size)

# Create a solid transparent image for blending
transparent_layer = Image.new("RGBA", base_image.size, (255, 255, 255, 0))

# Blend watermark onto the transparent layer
blended_watermark = Image.blend(transparent_layer, watermark, alpha=1.0)

# Blend the base image with the blended watermark
result = Image.blend(base_image, blended_watermark, alpha=0.3)  # Adjust alpha as needed

# Save and display
result.save("watermarked_image.png")
result.show()
```

![Output image after blending two images](https://raw.githubusercontent.com/Codecademy/docs/main/media/watermarked_image.png)

This example creates a watermark text overlay on an image. By adjusting the alpha value in the `.blend()` the opacity of the watermark can be controlled. This technique is useful for adding copyright information, branding, or other textual overlays to images while maintaining control over their visibility.
