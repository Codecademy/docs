---
Title: '.scrollTo()'
Description: 'Scrolls document to specified coordinate in pixels'
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

In Javascript, **`.scrollTo()`** scrolls window document to a specified position in pixels.

## Syntax

```pseudo
window.scrollTo(x, y)
```

- `x` is the direction in the horizontal direction.
- `y` is the direction in the vertical direction.

```pseudo
window.scrollTo(options)
```

- `options` is an object with the following properties:

  - `top` is the pixels in the y-axis.
  - `left` is the pixels in the x-axis.
  - `behavior` is a string that determines whether the crolling is done instant or animates smoothly:
    - `smooth` : animate scrolling smoothly.
    - `instant` : scrolling is done instant.
    - `auto` : scrolling is determined by a computed value of **_scroll-behavior_**.

## Example

The code below scrolls the window to 298 pixels from the left (x-axis) and 57 pixels from the top (y-axis).

```js
window.scrollTo(298, 57);
```

Using options:
The code below scrolls the window smoothly 57 pixels from the top (y-axis) and 298 pixels from the left (x-axis).

```js
window.scrollTo({
  top: 57,
  left: 298,
  behavior: 'smooth',
});
```
