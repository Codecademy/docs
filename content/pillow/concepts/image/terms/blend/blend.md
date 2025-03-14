
# blend()

The `.blend()` method in Pillow combines two images by interpolating between the pixel values according to a specified alpha constant. This allows for transparent overlaying of images with varying levels of opacity.

## Syntax

```python
Image.blend(image1, image2, alpha)
```

### Parameters

- `image1` (PIL.Image.Image): First source image
- `image2` (PIL.Image.Image): Second source image
- `alpha` (float): A value between 0.0 (use only image1) and 1.0 (use only image2)

### Returns

- `PIL.Image.Image`: A new image that is the blended combination of the inputs

### Requirements

- Both source images must have the same mode and size
- Alpha must be a floating-point value between 0.0 and 1.0

## Description

The `.blend()` method creates a new image by combining two images pixel by pixel using the formula:
```
out_pixel = image1_pixel * (1.0 - alpha) + image2_pixel * alpha
```

For each pixel position, the output pixel value is a weighted average of the corresponding pixel values from the source images. The `alpha` parameter controls the weighting, with 0.0 giving full weight to `image1` and 1.0 giving full weight to `image2`.

## Example

```python
from PIL import Image

# Open two images of the same size and mode
image1 = Image.open("background.jpg")
image2 = Image.open("foreground.jpg")

# Make sure images are the same size and mode
if image1.size != image2.size:
    # Resize the second image to match the first
    image2 = image2.resize(image1.size)

# Convert both images to the same mode (RGBA)
if image1.mode != image2.mode:
    if image1.mode != "RGBA":
        image1 = image1.convert("RGBA")
    if image2.mode != "RGBA":
        image2 = image2.convert("RGBA")

# Create a series of blends with increasing alpha values
alphas = [0.0, 0.25, 0.5, 0.75, 1.0]
blended_images = []

for alpha in alphas:
    blended = Image.blend(image1, image2, alpha)
    blended_images.append(blended)
    
    # Save each blended image
    blended.save(f"blend_alpha_{alpha}.png")

# Display the result with alpha 0.5 (equal mix)
blended_images[2].show()
```

This example demonstrates how to blend two images with varying levels of transparency. It creates five blended images ranging from showing only the first image (alpha = 0.0) to showing only the second image (alpha = 1.0), with transitional blends in between.



## Notes

- The `.blend()` method works with all pixel-based image modes, but both images must be in the same mode
- For alpha blending with varying transparency across different regions, use the `.composite()` method with an alpha mask instead
- This method is different from layer blending modes in graphics editors, as it only supports linear interpolation between pixel values
