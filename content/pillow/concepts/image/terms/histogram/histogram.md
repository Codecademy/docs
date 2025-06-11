---
Title: '.histogram()'
Description: 'Computes the histogram of an image.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Histograms'
  - 'Images'
  - 'Pillow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/image-processing'
---

In Pillow, the **`.histogram()`** method is used to compute the histogram of an image. The histogram is a representation of the distribution of pixel values in the image, which can be useful for various image processing tasks, such as contrast adjustment and thresholding.

## Syntax

```pseudo
Image.histogram(self, mask=None)
```

**Parameters:**

- `self`: The image object for which the histogram is to be computed.
- `mask` (Optional): A mask image that specifies which pixels to include in the histogram calculation. If not provided, all pixels are included.

**Return Value:**

Returns a list of integers representing the histogram of the image. The length of the list depends on the mode of the image:

- For grayscale images, the histogram will have 256 values (0-255).
- For RGB images, it will have 768 values (256 for each channel: red, green, and blue).
- For RGBA images, it will have 1024 values (256 for each channel plus an additional 256 for the alpha channel).
- For other modes, the histogram will have a different number of values depending on the number of channels in the image.

## Examples

The image file used in all the examples is:

![Image file](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-image-file-town.jpg)

### Example 1: Plotting a Grayscale Image Histogram

This example demonstrates how to convert an image to grayscale and plot its pixel value distribution using `.histogram()`:

```py
from PIL import Image
import matplotlib.pyplot as plt

# Open the image file
image = Image.open('town.jpg')

# Convert the image to grayscale
grayscale_image = image.convert('L')

# Calculate the histogram
histogram = grayscale_image.histogram()

# Plot the histogram
plt.plot(histogram)
plt.title('Grayscale Histogram')
plt.xlabel('Pixel Value')
plt.ylabel('Count')
plt.show()
```

In this example, an image file is opened and converted to grayscale using the [`.convert()`](https://www.codecademy.com/resources/docs/pillow/image/convert) method. The grayscale image's histogram is then computed using the `.histogram()` method and visualized with Matplotlib. The x-axis of the plot shows the pixel intensity values, while the y-axis represents the frequency of each intensity level:

![Output image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-grayscale-histogram.png)

### Example 2: Visualizing Histogram Data for RGB Images

This example shows how to compute and plot the pixel distribution of an RGB image using `.histogram()`:

```py
from PIL import Image
import matplotlib.pyplot as plt

# Open the image file
image = Image.open('town.jpg')

# Calculate the histogram
histogram = image.histogram()

# Plot the histogram
plt.plot(histogram)
plt.title('RGB Histogram')
plt.xlabel('Pixel Value')
plt.ylabel('Count')
plt.show()
```

In this example, an RGB image is opened, and its histogram is generated. The resulting histogram contains 768 values — 256 for each color channel: red, green, and blue. The plot displays the distribution of pixel values across all three channels:

![Output image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-rgb-histogram.png)

### Example 3: Using `.histogram()` with Transparency (RGBA Images)

This example illustrates how to generate a histogram for an RGBA image, including the alpha (transparency) channel:

```py
from PIL import Image
import matplotlib.pyplot as plt

# Open the image file
image = Image.open('town.jpg')

# Calculate the histogram
histogram = image.histogram()

# Plot the histogram
plt.plot(histogram)
plt.title('RGBA Histogram')
plt.xlabel('Pixel Value')
plt.ylabel('Count')
plt.show()
```

In this example, the histogram will have 1024 values (256 for each of the four channels: red, green, blue, and alpha). The plot will show the distribution of pixel values across all four channels:

![Output image](https://raw.githubusercontent.com/Codecademy/docs/main/media/pillow-rgba-histogram.png)
