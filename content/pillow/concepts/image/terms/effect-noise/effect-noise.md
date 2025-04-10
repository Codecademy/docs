---
Title: '.effect_noise()'
Description: 'Generates an image with Gaussian noise centered around 128.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Histograms'
  - 'Images'
  - 'Objects'
  - 'Pillow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.effect_noise()`** method in the Pillow Image module is used to generate an image filled with Gaussian noise. This method creates an image where each pixel's value is sampled from a Gaussian distribution centered around 128 with a specified standard deviation. The resulting noise pattern can range from subtle gray variations to high-contrast black and white noise, depending on the standard deviation parameter.

Noise generation is particularly useful in image processing tasks such as creating texture effects, simulating film grain, generating testing data for algorithms, and adding controlled randomness to digital art or simulations. It's also commonly used in image editing applications for creating distressed or vintage effects.

## Syntax

```pseudo
Image.effect_noise(size, sigma)
```

**Parameters:**

- `size`: The requested size in pixels, as a 2-tuple represented as `(width, height)`.
- `sigma`: Standard deviation of noise.

**Return value:**

Returns an `Image` object containing the generated noise.

## Example 1: Creating a Basic Noise Image

This example demonstrates how to create a simple noise image with standard Gaussian distribution. This is the most basic usage of the `.effect_noise()` method and provides a starting point for understanding how the noise generation works. The code is as follows:

```py
# Import required modules from Pillow
from PIL import Image

# Create a noise image of size 500x500 with standard deviation 50
noise_image = Image.effect_noise((500, 500), 50)

# Display the image
noise_image.show()

# Save the noise image to a file
noise_image.save("basic_noise.png")
```

This produces the output as follows:

![Basic noise image generated with a Gaussian distribution and a standard deviation of 50](https://raw.githubusercontent.com/Codecademy/docs/main/media/basic_noise.png)

The above code creates a 500x500 pixel image filled with Gaussian noise. The standard deviation of 50 creates a moderate level of contrast between pixels. The resulting image will have a grainy appearance with pixels distributed in a bell curve around the middle gray value (128).

## Example 2: Creating Texture Backgrounds with Different Noise Levels

This example demonstrates how to create different texture backgrounds by varying the standard deviation parameter. This technique is commonly used in graphic design and digital art to create textured backgrounds or overlay effects:

```py
# Import required modules
from PIL import Image, ImageFilter

# Function to create and save a noise texture with a given sigma
def create_noise_texture(width, height, sigma, filename):
  # Generate the noise image
  texture = Image.effect_noise((width, height), sigma)

  # Apply slight blur to make the texture smoother
  texture = texture.filter(ImageFilter.GaussianBlur(radius=1))

  # Save the texture
  texture.save(filename)

  return texture

# Create three different noise textures
subtle_texture = create_noise_texture(800, 600, 25, "subtle_noise.png")
medium_texture = create_noise_texture(800, 600, 75, "medium_noise.png")
strong_texture = create_noise_texture(800, 600, 150, "strong_noise.png")

# Display the medium texture
medium_texture.show()
```

This produces the outputs as follows:

![Subtle noise texture with a standard deviation of 25, showing fine grain](https://raw.githubusercontent.com/Codecademy/docs/main/media/subtle_noise.png)
![Medium noise texture with a standard deviation of 75, demonstrating moderate contrast](https://raw.githubusercontent.com/Codecademy/docs/main/media/medium_noise.png)
![Strong noise texture with a standard deviation of 150, displaying high contrast black and white pixels](https://raw.githubusercontent.com/Codecademy/docs/main/media/strong_noise.png)

This code creates three different noise textures with varying levels of contrast. The subtle texture (`sigma=25`) will have a fine, low-contrast grain, while the strong texture (`sigma=150`) will show much more dramatic variations between black and white pixels. A slight Gaussian blur is applied to soften the noise, making it more suitable for background textures.
