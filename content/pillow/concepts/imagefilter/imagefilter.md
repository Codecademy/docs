---
Title: ''.imagefilter()'
Description: 'the imagefilter() adds a filter to an image'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'

Tags: 
  - 'Effects'
  - 'Filter'
  - 'Functions'
  - 'Images'
  - 'Methods'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-python'
  - 'paths/computer-science'
---

The **image.filter()** function adds a filter to an image.

## Syntax

ImageFilter(value1, value2, value3)

The ImageFilter() function takes three parameters:

- 'value1' is required and is the image to perform on.
- 'value2' is the filter  to be used.
- 'value3' parameters for the filter.

## Example

water_image = imageOne("",400,300,"rgb", "blue");
filter = "water";
water_params = {
    radius = 0,
    wavelength = 5,
    edgeAction = 7,
    interpolation = bilinear
};
ImageFilter(image = water_image, filtername = filter, parameters = water_params)

This example would a dd a water filter to an image.

## Codebyte Example (if applicable)


```codebyte/python
water_image = imageOne("",400,300,"rgb", "blue");
filter = "water";
water_params = {
    radius = 0,
    wavelength = 5,
    edgeAction = 7,
    interpolation = bilinear
};
ImageFilter(image = water_image, filtername = filter, parameters = water_params)
```
