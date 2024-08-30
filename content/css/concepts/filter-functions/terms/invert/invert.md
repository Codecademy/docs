---
Title: 'invert()'
Description: 'Inverts the colors of an element.'
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

Inverts the colors of an element.

## Syntax

```css
filter: invert(<value>);
```

where a required `<value>` can be one of the following:

- Number value: `0`, `.4`
- Percentage value: `100%`, `50%`

**Note:** A value of `0` and `0%` will leave image unchanged. Values of `1` and `100%` will result in picture completely inverted. Value defaults to `1` and negatives values are not allowed.

## Example 1

Invert an image `75%`:

```css
.banner-image {
  filter: invert(75%);
}
```

The following output demonstrates the invert filter on a background image. The image on the left has no filter, while the image on the right has a filter `invert(75%)` applied.

![Compares the original image to the same image with an invert filter applied](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-filter-invert-example.png)
