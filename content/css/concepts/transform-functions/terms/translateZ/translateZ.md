---
Title: 'translateZ()'
Description: 'Moves an element along the Z-axis in 3D space.'
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

The **`translateZ()`** function moves an element along the Z-axis in 3D space, creating depth by moving the element closer to or farther from the viewer.

## Syntax

```pseudo
transform: translateZ(<value>);
```

The required `<value>` can be one of the following:

- Length value: `100px`, `1.5em`

**Note**: Percentage values are not allowed for `translateZ()` since the Z-axis does not have an inherent size reference like width or height.

A positive value moves the element closer to the viewer along the Z-axis, while a negative value moves the element farther away from the viewer.

## Example 1

In the example below, an element with a `.box` class is moved `50px` closer to the viewer:

```css
.box {
  transform: translateZ(50px);
}
```

## Example 2

In this example, the element is moved away from the viewer by `-1.5em`:

```css
.box {
  transform: translateZ(-1.5em);
}
```
