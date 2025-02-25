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

The **`requestAnimationFrame()`** function schedules a function to run before the next repaint. It is used to create smooth animations.

## Syntax

```pseudo
requestAnimationFrame(callback)
```

- `callback`: The callback function to be executed before the next repaint.

## Example

In the following example, the JavaScript will animate the red box, moving it from left to right within the container using `requestAnimationFrame()`. The animation will continue until the box reaches 300px:

```js
// Selecting the box element
const box = document.getElementById('box');
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

Once the HTML and CSS have been added, the result will be as follows:

![Browser Output of the above code](https://raw.githubusercontent.com/Codecademy/docs/main/media/requestAnimationFrame_1.gif)
