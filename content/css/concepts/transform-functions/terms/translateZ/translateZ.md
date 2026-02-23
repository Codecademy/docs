---
Title: 'translateZ()'
Description: 'Moves an element along the Z-axis in 3D space.'
---

## Definition
The `translateZ()` CSS transform function moves an element along the **Z-axis**, which is perpendicular to the screen. Positive values move the element **closer to the viewer**, while negative values move it **farther away**. This function is used to create depth in 3D transforms and works best when a `perspective` value is applied to the element or its parent.

## Syntax

```css
transform: translateZ(<length>);
### Parameters
- **`<length>`**  
  A CSS length value such as `px`, `em`, or `rem`.  
  - Positive values move the element **toward** the viewer.  
  - Negative values move it **away**.

> **Note:** Percentage values are not supported because the Z-axis has no reference dimension.

## Example

```css
.container {
  perspective: 300px;
}

.box {
  width: 150px;
  height: 150px;
  background-color: coral;
  transform: translateZ(50px);
}
