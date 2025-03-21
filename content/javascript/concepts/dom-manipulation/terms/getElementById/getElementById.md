---
Title: '.getElementById()'
Description: 'Retrieve the first HTML element with the specified id, returning null if no match is found.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'DOM'
  - 'Elements'
  - 'JavaScript'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.getElementById()`** method is a commonly used function in the Document Object Model (DOM) that allows developers to retrieve an HTML element by its `id` attribute. This method is part of the `document` object and returns the first element that matches the specified `id`. If no element is found, it returns `null`.

## Key Characteristics

- **Fast and efficient**: Since IDs are unique, this method quickly retrieves elements without searching the entire DOM.
- **Returns a single element**: It always returns one element (or `null` if not found).
- **Case-sensitive**: The provided `id` must match exactly, including letter casing.

> **Note**: If multiple elements share the same `id` (which is invalid HTML), `getElementById()` still returns only the first match.

## Syntax

```pseudo
document.getElementById("elementId");
```

- `elementId` (string): The `id` of the element to retrieve.

## Example

The following example demonstrates the usage of the `.getElementById()` method:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>getElementById Example</title>
  </head>
  <body>
    <p id="demo">Hello, World!</p>
    <button onclick="changeText()">Click Me</button>

    <script>
      function changeText() {
        let element = document.getElementById('demo');
        element.innerHTML = 'Text changed!';
      }
    </script>
  </body>
</html>
```

In this example, the `getElementById("demo")` function retrieves the `<p>` element with `id="demo"` and the `innerHTML` property is updated when the button is clicked.

The output will look like:

![A webpage with a paragraph displaying "Hello, World!" and a button labeled "Click Me", when clicked, the text changes to "Text changed!".](https://raw.githubusercontent.com/Codecademy/docs/main/media/get-element-by-id-example.gif)
