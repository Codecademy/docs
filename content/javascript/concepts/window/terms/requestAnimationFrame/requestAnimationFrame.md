---
Title: 'requestAnimationFrame()'
Description: 'Schedules a function to execute before the next repaint.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Time'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'paths/front-end-engineer-career-path'
  - 'introduction-to-javascript'
---

**`requestAnimationFrame()`** is a function offered by the browser that schedules a function to run before the next repaint. It is used to create smooth animations.

## Syntax

```pseudo
requestAnimationFrame(callback)
```

- `callback`: The callback function to be executed before the next repaint.

## Example

The following example moves a box across the screen using `requestAnimationFrame()`:

```js
// Selecting the box element
const box = document.getElementById("box");
let position = 0;

function animate() {
  position += 2;
  box.style.transform = `translateX(${position}px)`;

  if (position < 300) {
    requestAnimationFrame(animate);
  }
}

// Starting the animation
requestAnimationFrame(animate);
```

This example moves an HTML element with `id="box"` horizontally across the screen by 2 pixels per frame until it reaches 300 pixels.
