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

This example demonstrates how to use the `.blend()` method to create a simple 50/50 blend of two images:

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

## Example 3: Creating a smooth transition between two images

This example creates a smooth fade transition between two images and saves it as a GIF:

```py
from PIL import Image
import imageio
import os

# Load two images
image1 = Image.open("mountains.jpg").convert("RGBA")
image2 = Image.open("ocean.jpg").convert("RGBA")

# Resize the second image to match the first
image2 = image2.resize(image1.size)

# Create a directory for the frames if it doesn't exist
os.makedirs("frames", exist_ok=True)

# Store frame file names
frame_files = []

# Create 10 frames with different alpha values
frames = 10
for i in range(frames + 1):
  alpha = i / frames  # Incremental alpha values
  blended = Image.blend(image1, image2, alpha)

  frame_filename = f"frames/frame_{i:02d}.png"
  blended.save(frame_filename)
  frame_files.append(frame_filename)  # Store for GIF creation

  print(f"Created frame {i}/{frames} with alpha = {alpha:.2f}")

# Save frames as a GIF
gif_filename = "fade_transition.gif"
imageio.mimsave(gif_filename, [imageio.imread(f) for f in frame_files], duration=0.2)
```

![Output gif after blending two images](https://raw.githubusercontent.com/Codecademy/docs/main/media/fade_transition.gif)

This code gradually blends two images by increasing the alpha value in steps, generating a sequence of transition frames. It then saves these frames as a GIF using `imageio.mimsave()`, creating a smooth fade effect between the images.
