---
Title: '.addEventListener()'
Description: 'Attaches an event handler to an element without overwriting existing event handlers.'
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

The **`.addEventListener()`** method in JavaScript attaches an event handler to an element without overwriting existing event handlers. This method allows multiple event handlers to be added to the same event type on a single element, promoting better modularity and separation of concerns in [event handling.](https://www.codecademy.com/resources/docs/javascript/event-handling)

Unlike the traditional `onEvent` properties (e.g., `onclick`), which override previous handlers, `.addEventListener()` ensures that multiple event listeners can coexist. This method is widely used in modern web development to create interactive and dynamic user interfaces.

## Syntax

```pseudo
addEventListener(event, function, useCapture)
```

- `event`: The name of the event to listen for (e.g., `'click'`, `'keydown'`).
- `function`: The function to execute when the event is triggered.
- `useCapture` (optional): A boolean indicating whether to use event capturing (default is `false`).

> **Note:** If the same event listener is added multiple times to the same element with identical parameters, it is only executed once.

**Parameters:**

- **`event`** _(string)_: The type of event to listen for.
- **`function`** _(function)_: The callback function to be executed when the event occurs.
- **`useCapture`** _(boolean, optional)_: Determines whether the event is captured or bubbled (default is `false`).

**Return Value:**

This method does not return a value. It registers an event listener on the specified element.

## Example 1 - Handling a Button Click

This example demonstrates how to attach an event listener to a button. When the button is clicked, an alert box appears with a message.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Button Click Example</title>
  </head>
  <body>
    <button id="clickButton">Click Me</button>
    <script>
      document
        .getElementById('clickButton')
        .addEventListener('click', function () {
          alert('You clicked the button!');
        });
    </script>
  </body>
</html>
```

## Example 2 - Changing Text on Click

This example shows how clicking a button can dynamically change the text content of a paragraph.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Change Text Example</title>
  </head>
  <body>
    <p id="text">Click the button to change this text.</p>
    <button id="changeTextButton">Change Text</button>
    <script>
      document
        .getElementById('changeTextButton')
        .addEventListener('click', function () {
          document.getElementById('text').innerText =
            'The text has been changed!';
        });
    </script>
  </body>
</html>
```

## Example 3 - Using Mouseover to Change Background Color

This example changes the background color of a box when the mouse pointer hovers over it.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hover Effect Example</title>
    <style>
      #box {
        width: 150px;
        height: 150px;
        background-color: lightblue;
      }
    </style>
  </head>
  <body>
    <div id="box"></div>
    <script>
      document.getElementById('box').addEventListener('mouseover', function () {
        this.style.backgroundColor = 'orange';
      });
    </script>
  </body>
</html>
```

To level up your understanding of event handling in JavaScript, check out these Codecademy courses:

- [Introduction to JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)
- [Interactive web design](https://www.codecademy.com/learn/interactive-web-design)
