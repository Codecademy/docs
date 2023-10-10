---
Title: 'background-image'
Description: 'background-image property is used to set one or more background images for an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Background'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

background-image property is used to set one or more background images for an element.

## Syntax

```css
background-image: <value>;
```

where `<value>` can be one of the following keywords:

-`url()`: This function is used to specify the path of the image file. 
-`none`: No background image will be displayed. This is default.

## Example 1

```css
.element {
  background-image: url('path/to/image.jpg');
}
```

## Example 2

```css
.element {
  background-image:  url('path/to/image1.jpg'), url('path/to/image2.jpg');
}
```
