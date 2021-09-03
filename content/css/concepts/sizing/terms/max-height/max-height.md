---
Title: 'max-height'
Description: 'Defines the maximum height of an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Box Model'
  - 'Positioning'
  - 'Responsive'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Defines the maximum height of an element.

## Syntax

```css
max-height: <value>;
```

where `<value>` can be one of the following:

- Length values: `200px`
- Percentage values: `15%`
- Keyword values: `none`, `max-content`, `min-content`, `fit-content`

**Note:** In the case that `box-sizing` is set to `border-box`, the `max-height` of the element includes the content, padding and border. `max-height` overrides the `height` property. `min-height` overrides `max-height`.

## Example 1

Set the `max-height` of the `.box` element to be `250px`:

```css
.box {
  border: 2px solid black;
  max-height: 250px;
}
```

## Example 2

Set the `max-height` of the `.box` element to be `50%`:

```css
.box {
  border: 2px solid black;
  max-height: 50%;
}
```
