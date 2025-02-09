---
Title: 'resizeBy()'
Description: 'resizes the browser window by a specified amount.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`resizeBy()`** function under the `window` object resizes the browser window by a specified amount relative to its current size.

## Syntax
`resizeBy()` takes two arguments: the change in width and the change in height, both measured in pixels.

```js
window.resizeBy(width, height);
```
- *Positive* values **increase** the dimensions
- *Negative* values **decrease** the dimensions.

## Example
In this example, the window will be resized to `100` pixels in width and `50` pixels in height.
```js
window.resizeBy(100, 50);
```