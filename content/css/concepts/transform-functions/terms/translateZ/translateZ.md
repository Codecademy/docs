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
---

The **`translateZ()`** function moves an element along the Z-axis in 3D space, creating depth by moving the element closer to or farther from the viewer.

## Syntax

```pseudo
transform: translateZ(<length>);
```

The required `<length>` value can use any valid CSS length unit, such as `px`, `em`, `rem`, `cm`, etc. 

- A positive value moves the element closer to the viewer.
- A negative value moves the element farther away.

**Note**: Percentage values are not supported because the Z-axis has no intrinsic size reference like width or height.

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
