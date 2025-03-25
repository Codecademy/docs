---
Title: '.merge()'
Description: 'Merges set of single-band images into a new multi-band image.'
Subjects:
  - 'Computer science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Computer Vision'
  - 'Images'
  - 'Pillow'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`.merge()`** function in Pillow combines multiple single-band images into a new multi-band image. This is particularly useful when working with multispectral or multichannel images, such as RGB or CMYK images, where individual channels can be processed separately before merging them into a final image.

## Syntax

```pseudo
Image.merge(mode, bands)
```

- `mode`: The mode of the new multiband image (e.g., "RGB", "CMYK", etc.).
- `bands`: A tuple containing the individual image bands to be merged. Each band should be a single-channel (grayscale) image.

## Example

The code below splits an image into its individual bands and then merges them in a different order.

![Boston Skyline](https://raw.githubusercontent.com/Codecademy/docs/main/media/Boston.jpg)

```py
from PIL import Image

# Open the image
image1= Image.open('media/Boston.jpg')
im = image1.resize((400,400))

# Split the image into its RGB channels
r,g,b = im.split()


# Merge the bands in a different order (swapping red and blue)
new_image= Image.merge('RGB', (b,r,g))
new_image.show()
```

The output will be:

![Merged Boston Skyline](https://raw.githubusercontent.com/Codecademy/docs/main/media/merged-boston.png)
