---
Title: 'skewY()'
Description: 'Tilts an element along the y-axis on a two-dimensional plane.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Functions'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

The `skewY()` function tilts an element along the y-axis on a two-dimensional plane.

## Syntax

```css
transform: skewY(<angle>);
```

where a required `<angle>` can be one of the following:

- Degree value: `30deg`
- Radian value: `0.5rad`
- Gradian value: `100grad`
- Turn value: `.25turn`

Negative values skew the element in the opposite direction.

## Example

Skew the `.rectangle` element along the y-axis by `20deg`:

```css
.rectangle {
  height: 100px;
  width: 200px;
  background: blue;
  transform: skewY(20deg);
}
```
