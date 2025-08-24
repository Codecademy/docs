# scaleY()

`scaleY()` is a CSS transform function that scales an element along the vertical (Y) axis. It allows you to increase or decrease the height of an element without affecting its width. This transformation is commonly used for animations, effects, and responsive design adjustments.

## Syntax

```css
transform: scaleY(sy);
```
- `sy`: A number representing the scaling factor along the Y axis. Values greater than 1 increase the height, values between 0 and 1 decrease it, and negative values flip the element vertically.

**Example values:**
- `scaleY(2)` doubles the height.
- `scaleY(0.5)` halves the height.
- `scaleY(-1)` flips the element vertically.

## Example

```css
.box {
  width: 100px;
  height: 100px;
  background: #4caf50;
  transform: scaleY(1.5);
}
```

This example increases the height of the `.box` element by 1.5 times while keeping its width unchanged.
