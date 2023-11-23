---
Title: 'opacity()'
Description: 'Controls how much of the background is visible through the element it is applied to.'
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

Controls how much of the background is visible through the element it is applied to.

## Syntax

```css
filter: opacity(<value>);
```

where a required `<value>` can be one of the following:

- Number value: `0`, `1`
- Percentage value: `25%`, `50%`

**Note:** Value defaults to `1` or `100%` leaving element unchanged. A value of `0` and `0%` will be completely transparent. Negative values as well as values greater than `1` or `100%` are not allowed.

## Example 1

Set the opacity of our element to `50%`:

```css
.banner-image {
  filter: opacity(50%);
}
```

![css-filterfunction-opacity-example2](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-filterfunction-opacity-example.png)