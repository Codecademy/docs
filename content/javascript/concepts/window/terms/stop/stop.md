---
Title: 'stop()'
Description: 'The JavaScript `window.stop()` method stops further resource loading on the page, similar to pressing the browser’s stop button.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
  - 'Developer Tools'
Tags:
  - 'Window Functions'
  - 'Browser Compatibility'
  - 'JavaScript'
  - 'Error Handling'
  - 'Performance Optimization'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The `window.stop()` method is a function in JavaScript that stops the further loading of resources on the current web page. This function behaves similarly to pressing the stop button in a web browser, preventing images, scripts, and other resources from continuing to load.

### Syntax

```js
window.stop();
```

### Example Usage

The following example demonstrates how the `window.stop()` method can be used to stop loading a page’s resources when a button is clicked:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stop Page Loading</title>
  </head>
  <body>
    <h1>Example of window.stop()</h1>
    <button onclick="window.stop()">Stop Loading</button>
  </body>
</html>
```
