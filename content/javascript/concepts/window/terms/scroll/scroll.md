---
Title: 'scroll()'
Description: 'Scrolls the document to a specific position based on given coordinates.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Functions'
  - 'Window Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**`scroll()`** is a method of the global `window` object that programmatically scrolls the document to a specified position.

## Syntax

The `scroll()` method accepts either two numerical parameters (`x` and `y` coordinates) or a particular object with specific properties that control scrolling behavior:

```pseudo
window.scroll(x, y)
```

Or, alternatively:

```pseudo
window.scroll(options)
```

- `x`: The horizontal scroll position in pixels.
- `y`: The vertical scroll position in pixels.
- `options` (Optional): An object specifying scroll behavior:
  - `top`: Vertical position in pixels.
  - `left`: Horizontal position in pixels.
  - `behavior`: Defines the scrolling behavior:
    - `"auto"` (Default): Instantly jumps to position.
    - `"smooth"`: Animates the scroll movement.

## Example 1

The following example instantly scrolls the page to the top-left (0, 0) position:

```js
window.scroll(0, 0);
```

## Example 2

The following example smoothly scrolls the page 500 pixels down while keeping the horizontal position unchanged:

```js
window.scroll({
  top: 500,
  left: 0,
  behavior: 'smooth',
});
```
