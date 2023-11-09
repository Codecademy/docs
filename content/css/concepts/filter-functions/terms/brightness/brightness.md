---
Title: 'brightness()'
Description: 'Defines the brightness or darkness of an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Images'
  - 'Functions'
  - 'Colors'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Defines the brightness or darkness of an element.

## Syntax

```css
filter: brightness(<value>);
```

where a required `<value>` can be one of the following:

- Number value: `0`, `1.4`
- Percentage value: `100%`, `50%`

## Example 1

Give the image a brightness of `100%`:

```css
.banner-image {
  filter: brightness(100%);
}
```

![CSS brightness filter example](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-filterfunctions-brightness-example.png)

Here, the image to the left is the original image and the one to the right is the same image with `brightness(100%)`. 
