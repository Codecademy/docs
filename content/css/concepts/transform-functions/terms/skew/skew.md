---
Title: 'skew()'
Description: 'Tilts an element on the x-axis or both the x and y axes on a 2D plane.'
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

The `skew()` function tilts an element on the x-axis or both the x and y axes on a two-dimensional plane.

## Syntax

```css
transform: skew(<angle>);
```

where a required `<angle>` can be one of the following:

- Degree value: `90deg`
- Radian value: `0.78rad`
- Gradian value: `200grad`
- Turn value: `.25turn`

**Note:** If one value is provided, it corresponds to the x-axis. If two values are provided, the first value corresponds to the x-axis and the second value corresponds to the y-axis. Negative values are not allowed.

## Example 1

Skew our `.rectangle` element along the x-axis by `30deg`:

```css
.rectangle {
  height: 100px;
  width: 200px;
  background: blue;
  transform: skew(30deg);
}
```

## Example 2

Skew our `.rectangle` element along the x-axis by `30deg` and y-axis by `20deg`:

```css
.rectangle {
  height: 100px;
  width: 200px;
  background: blue;
  transform: skew(30deg, 20deg);
}
```
