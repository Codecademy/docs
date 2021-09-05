---
Title: 'min-width'
Description: 'Defines the minimum width of an element.'
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

Defines the minimum width of an element.

## Syntax

```css
min-width: <value>;
```

where `<value>` can be one of the following:

- Length values: `300px`
- Percentage values: `33%`
- Keyword values: `max-content`, `min-content`, `fit-content`

**Note:** In the case that `box-sizing` is set to `border-box`, the `min-width` of the element includes the content, padding and border. `min-width` overrides the `width` and `max-width` properties.

## Example 1

Set the `min-width` of the `.box` element to be `100px`:

```css
.box {
  border: 2px solid black;
  width: 15%;
  min-width: 100px;
}
```
