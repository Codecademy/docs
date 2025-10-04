---
Title: '.removeEventListener()'
Description: 'Removes an event listener from a specified element in JavaScript.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'DOM'
  - 'Events'
  - 'Event Handling'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.removeEventListener()`** method is an essential part of JavaScript [event handling](https://www.codecademy.com/resources/docs/javascript/event-handling). It is used to remove an event listener from a specified element in JavaScript that was previously added to an element using [`.addEventListener()`](https://www.codecademy.com/resources/docs/javascript/event-handling/addeventlistener). This method ensures that an event handler no longer executes when the specified event occurs on the target element.

For `.removeEventListener()` to work correctly, the function reference used to remove the event listener must match the function reference used when initially attaching the event. Anonymous functions cannot be removed since they do not have a reference to match.

## Syntax

```pseudo
EventTarget.removeEventListener(event, function, useCapture)
```

**Parameters:**

- `event`: The name of the event (e.g., `'click'`, `'keydown'`).
- `function`: The event handler function reference that was previously attached.
- `useCapture` (Optional): A boolean that specifies whether the event was registered in the capturing phase. Defaults to `false`.

> **Note:** The function reference used in `removeEventListener()` must be the same as the one used in `addEventListener()`. If an anonymous function was used in `addEventListener()`, it cannot be removed.

**Return value:**

This method does not return a value (i.e., it returns `undefined`).

## Example 1: How to Remove a Click Event Listener in JavaScript

This example demonstrates adding and removing a `click` event listener from a button element.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>removeEventListener Example</title>
  </head>
  <body>
    <button id="myButton">Click Me</button>
    <script>
      function handleClick() {
        alert('Button clicked!');
      }

      let button = document.getElementById('myButton');
      button.addEventListener('click', handleClick);

      setTimeout(() => {
        button.removeEventListener('click', handleClick);
        alert('Event listener removed');
      }, 5000);
    </script>
  </body>
</html>
```

## Example 2: How to Remove a Mouseover Event Listener in JavaScript

This example removes a `mouseover` event listener from a div element after a click event.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>removeEventListener Mouseover Example</title>
  </head>
  <body>
    <div
      id="hoverDiv"
      style="width: 200px; height: 100px; background: lightblue;"
    >
      Hover over me
    </div>
    <button id="removeBtn">Remove Mouseover Listener</button>
    <script>
      function handleMouseOver() {
        alert('Mouse over detected');
      }

      let divElement = document.getElementById('hoverDiv');
      let removeBtn = document.getElementById('removeBtn');
      divElement.addEventListener('mouseover', handleMouseOver);

      removeBtn.addEventListener('click', () => {
        divElement.removeEventListener('mouseover', handleMouseOver);
        alert('Mouseover listener removed');
      });
    </script>
  </body>
</html>
```

To level up your understanding of event handling in JavaScript, check out these Codecademy courses:

- [Introduction to JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)
- [Interactive web design](https://www.codecademy.com/learn/interactive-web-design)
