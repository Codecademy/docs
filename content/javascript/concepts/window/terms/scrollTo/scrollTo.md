---
Title: '.scrollTo()'
Description: 'Scrolls document to specified coordinate in pixels.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arguments'
  - 'Functions'
  - 'Parameters'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, **`.scrollTo()`** scrolls the window or document to a specified position in pixels.

## Syntax

```pseudo
window.scrollTo(x, y)
```

- `x`: The horizontal coordinate (in pixels) to scroll to.
- `y`: The vertical coordinate (in pixels) to scroll to.

Or, alternatively:

```pseudo
window.scrollTo(options)
```

- `options`: An object with the following optional properties:
  - `left`: The horizontal scroll position in pixels.
  - `top`: The vertical scroll position in pixels.
  - `behavior`: Defines the scrolling behavior. Accepted values:
    - `smooth`: Scrolls with an animation.
    - `instant`: Scrolls immediately.
    - `auto`: Uses the browser's default scrolling behavior.

## Example 1

The code below scrolls the window to _298_ pixels from the left (x-axis) and _57_ pixels from the top (y-axis) using absolute coordinates:

```js
window.scrollTo(298, 57);
```

## Example 2

The code below scrolls the window smoothly to _57_ pixels from the top (y-axis) and _298_ pixels from the left (x-axis) using the options object:

```js
window.scrollTo({
  top: 57,
  left: 298,
  behavior: 'smooth',
});
```
