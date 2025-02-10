---
Title: 'scrollTo()'
Description: 'The JavaScript `window.scrollTo()` method allows programmatic scrolling of a webpage to a specific position.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
  - 'Developer Tools'
Tags:
  - 'Window Functions'
  - 'Browser Compatibility'
  - 'JavaScript'
  - 'UI'
  - 'DOM Manipulation'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

The `window.scrollTo()` method in JavaScript allows developers to programmatically scroll the window to a specified set of coordinates. This function provides smooth scrolling and is commonly used for navigation purposes within a webpage.

### Syntax

```js
window.scrollTo(x - coord, y - coord);

// OR using an options object
window.scrollTo({
  top: y - coord,
  left: x - coord,
  behavior: 'smooth', // 'auto' (default) | 'smooth'
});
```

### Example Usage

The following example demonstrates how `window.scrollTo()` can be used to scroll the page to the top when a button is clicked:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Scroll to Top Example</title>
  </head>
  <body>
    <h1>Example of window.scrollTo()</h1>
    <p style="height: 1500px;">
      Scroll down and click the button to go back to the top.
    </p>
    <button onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">
      Scroll to Top
    </button>
  </body>
</html>
```
