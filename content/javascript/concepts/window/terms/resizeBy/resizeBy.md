---
Title: 'resizeBy()'
Description: 'Resizes the browser window by a specified amount.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arguments'
  - 'Functions'
  - 'Parameters'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`resizeBy()`** function under the `window` object resizes the browser window by a specified number of pixels relative to its current size.

## Syntax

```pseudo
window.resizeBy(widthDelta, heightDelta);
```

- `widthDelta`: The number of pixels to increase or decrease the window’s width. Positive values increase the width, negative values decrease it.
- `heightDelta`: The number of pixels to increase or decrease the window’s height. Positive values increase the height, negative values decrease it.

## Example

In this example, the window size will increase by _100_ pixels in width and _50_ pixels in height:

```js
window.resizeBy(100, 50);
```
