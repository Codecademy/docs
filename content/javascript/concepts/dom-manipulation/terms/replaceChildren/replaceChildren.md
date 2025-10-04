---
Title: '.replaceChildren()'
Description: 'Replaces all child nodes of an element with new nodes or clears them if no arguments are provided.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Arguments'
  - 'DOM'
  - 'ES6'
  - 'Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.replaceChildren()`** method in JavaScript is a modern DOM manipulation method that replaces all child nodes of an element with new specified nodes or clears them if no arguments are provided.

Unlike older methods such as `.innerHTML` or [`.removeChild()`](https://www.codecademy.com/resources/docs/javascript/dom-manipulation/removeChild), `.replaceChildren()` provides a cleaner, more efficient, and safer way to update the contents of an element without unnecessary parsing or manipulation overhead.

This method is particularly useful when dynamically updating UI elements, such as replacing a list of items, updating content sections, or efficiently clearing an element's children without affecting event listeners on the parent.

## Key Characteristics

- More efficient than manually removing and appending children.
- Accepts multiple nodes or strings as arguments.
- Works similarly to `.innerHTML = ""` for clearing, but safer as it avoids HTML parsing.

## Syntax

```pseudo
element.replaceChildren(...nodes);
```

- `nodes` (optional): One or more nodes or strings to insert as new children. If no arguments are provided, all child nodes are removed.

## Example

The following example demonstrates the usage of the `.replaceChildren()` method:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>replaceChildren Example</title>
  </head>
  <body>
    <div id="container">
      <p>Old content</p>
    </div>
    <button onclick="updateContent()">Replace Content</button>

    <script>
      function updateContent() {
        let container = document.getElementById('container');
        let newParagraph = document.createElement('p');
        newParagraph.textContent = 'New content added!';
        container.replaceChildren(newParagraph);
      }
    </script>
  </body>
</html>
```

In this example, the `.replaceChildren()` removes the existing `<p>` inside `#container` and replaces it with a new one. If called without arguments, it clears all children.

The output will be:

![A div showing "Old content" updates to "New content added!" when the button is clicked.](https://raw.githubusercontent.com/Codecademy/docs/main/media/replace-children-example.gif)
