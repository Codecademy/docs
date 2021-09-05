---
Title: 'flex-wrap'
Description: 'A property that specifies if elements will occupy multiple lines and the direction in which the items are distributed. '
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Flexbox'
  - 'Layout'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

A property that specifies if elements will occupy multiple lines and the direction in which the items are distributed.

## Syntax

```css
#element-container {
  display: flex;
  flex-wrap: <wrap-value>;
}
```

The `<wrap-value>` can be one of three options:

- `wrap`
- `nowrap`
- `wrap-reverse`

## Example 1

Content that does not utilize multiple lines:

```css
#spam-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
```
