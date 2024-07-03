---
Title: 'saturate()'
Description: 'Increase or decrease the color intensity of an element.'
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

Increase or decrease the color intensity of an element.

## Syntax

```css
filter: saturate(<value>);
```

where a required `<value>` can be one of the following:

- Number value: `0`, `0.5`, `1.0`, `1.5`
- Percentage value: `0%`, `50%`, `100%`, `150%`

**Note:** The value defaults to `1` or `100%`, leaving element unchanged. Higher values will increase saturation. A value of `0` and `0%` will remove all color leaving the element completely unsaturated. Negative values are not allowed.

## Example

Set the saturation of a color to `50%`and `150%`:

```css
.logo-image-2 {
  filter: saturate(50%);
}
.logo-image-3 {
  filter: saturate(1.5);
}
```

![CSS saturate filter example](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-filterfunctions-saturate-example.png)

Here, the first image shows the original saturation at `saturate(100%)`. The second image is less saturated with `saturate(50%)`, and the last image is more saturated with `saturate(1.5)`.