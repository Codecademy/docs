---
Title: 'saturate()'
Description: 'Increase or decrease the intensity of the color of the element it is applied to.'
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

Increase or decrease the intensity of the color of the element it is applied to.

## Syntax

```css
filter: saturate(<value>);
```

where a required `<value>` can be one of the following:

- Number value: `0`, `1.5`
- Percentage value: `100%`, `50%`

**Note:** Value defaults to `1` or `100%` leaving element unchanged. Higher values will increase saturation. A value of `0` and `0%` will remove all color leaving the element completely unsaturated. Negative values are not allowed.

## Example 1

Set the saturation of a color to `25%`:

```css
.banner-image {
  filter: saturate(25%);
}
```
