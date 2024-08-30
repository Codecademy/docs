---
Title: 'contrast()'
Description: 'Defines the contrast on an element.'
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

Defines the contrast on an element.

## Syntax

```css
filter: contrast(<value>);
```

where a required `<value>` can be one of the following:

- Number value: `0`, `1.4`
- Percentage value: `100%`, `50%`

**Note:** Values of `1` and `100%` will have no effect. Values greater than `1` and `100%` will increase the contrast. Values less than `1` and `100%` will decrease the contrast. A value of `0` and `0%` will be completely gray.

## Example 1

Give the image a contrast of `200%`:

```css
.banner-image {
  filter: contrast(200%);
}
```

![Comparison of an image with increased contrast with the original image](/media/css-filterfunctions-contrast-example.png)

Here, the original image is on the left and the image on the right has the filter set at `contrast(200%)`
