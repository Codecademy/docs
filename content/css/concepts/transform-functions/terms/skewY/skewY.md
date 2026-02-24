---
Title: 'skewY()'
Description: 'Skews an element along the y-axis in a two-dimensional plane.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The **`skewY()`** function skews an element along the vertical axis by shifting it up or down based on the specified angle.

## Syntax

```pseudo
transform: skewY(<angle>);
```

**Parameters:**

- `<angle>`: Specifies the angle of the vertical skew. Accepts angle units such as `deg`, `rad`, `grad`, or `turn` (e.g., `20deg`, `0.2rad`).

A positive value skews the element so that the top shifts to the right and the bottom shifts to the left. A negative value skews it in the opposite direction.

**Return value:**

Returns a `<transform-function>` value that represents a 2D vertical skew transformation and can be used with the `transform` property.

## Example

The following example skews the `.rectangle` element along the y-axis by `20deg`:

```css
.rectangle {
  height: 100px;
  width: 200px;
  background: blue;
  transform: skewY(20deg);
}
```
