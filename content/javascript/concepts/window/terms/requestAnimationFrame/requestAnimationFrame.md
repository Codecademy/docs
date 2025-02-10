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

The **`requestAnimationFrame()`** is a function provided by the browser that schedules a function to run before the next repaint. It is used to create smooth animations.

## Syntax

The `requestAnimationFrame()` function takes one parameter.

```pseudo
requestAnimationFrame(callback)
```

`requestAnimationFrame()` takes the following parameter:

- The `callback` function that will be executed before the next repaint.

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

Expected output:

```shell
An HTML element with the id="box" horizontally across the screen by 2 pixels per frame until it reaches 300 pixels.
```

## Codebyte Example

In the following example, `requestAnimationFrame()` is used to `animate a bouncing ball`:

```codebyte/javascript
const ball = document.getElementById("ball");
let y = 0, speed = 3;

function bounce() {
  y += speed;
  if (y > 150 || y < 0) speed = -speed;
  ball.style.transform = `translateY(${y}px)`;

  requestAnimationFrame(bounce);
}

requestAnimationFrame(bounce);
```
