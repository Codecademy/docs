---
Title: '.getbbox()'
Description: 'Returns the bounding box of the non-zero regions in the image.'
Subjects:
  - 'Computer Science'
  - 'Data Visualization'
Tags:
  - 'Images'
  - 'Methods'
  - 'Pillow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In the Pillow library, the **.`.getbbox()`** method returns the bounding box as a 4-[tuple](https://www.codecademy.com/resources/docs/python/tuples) `(left, upper, right, lower)` that encloses all non-zero (non-background) regions of the image. It is commonly used for cropping or identifying the area of interest.

If the image is empty (i.e., all pixels are zero or the image is fully transparent), the `.getbbox()` method will return `None`, indicating that there is no non-zero region to define a bounding box for.

## Common Use Cases

The `.getbbox()` method is particularly useful for:

- **Automatic cropping:** Remove unnecessary blank borders around images to focus on the actual content.
- **Content detection:** Identify where the meaningful content is located within an image.
- **Optimization:** Reduce file size by trimming away empty space before saving.
- **Layout analysis:** Determine the boundaries of content regions for further processing.
- **Document scanning:** Detect and extract the actual document area from a scanned image.

## Syntax

```pseudo
Image.getbbox()
```

**Parameters:**

The `.getbbox()` method takes no parameters.

**Return Value:**

- Returns a 4-tuple `(left, upper, right, lower)` that defines the rectangular bounding box containing all non-zero pixels.
- Returns `None` if the image is completely zero-valued (empty or fully transparent).

## Example

The image to be used for this example is:

![Input image to perform the .getbbox() operation](https://raw.githubusercontent.com/Codecademy/docs/main/media/nature.png)

In this example, the `.getbbox()` method returns the non-zero region of an image:

```py
from PIL import Image

# Open the image file
img = Image.open("nature.png")

# Get the bounding box of the non-zero areas
bbox = img.getbbox()

print(bbox)
```

This code produces the following output:

```shell
(0, 0, 672, 322)
```

The output indicates that the non-zero (non-background) area of the image starts at (0, 0) and extends to (672, 322).
