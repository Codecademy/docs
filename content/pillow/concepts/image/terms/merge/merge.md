---
Title: '.merge()'
Description: 'Set of single band images into a new multiband image'
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

The **`.merge()`** is used to set a single band images into a new multiband image. We can create a new image by merging specific bands when we working with multispectral or multichannel images such as RGB or CMYK images.

## Syntax

```pseudo
Image.merge(mode, bands)
```

- `mode` : The parameter is the mode of the new multiband image.
- `bands` :This parameter is a tuple of the individual image bands that is to be merged. The individual images should be single-channel image or a grayscale image.
