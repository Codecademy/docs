---
Title: '.appendChild()'
Description: 'Appends a node as the last child to a parent node in the DOM.'
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

The **`.appendChild()`** method in JavaScript is a key DOM manipulation tool that appends a node (element or text node) as the last child of a specified parent. It allows developers to dynamically modify a webpage’s structure. If the node already exists in the DOM, it is moved to its new position. The method returns the appended node.

## Syntax

```pseudo
parentNode.appendChild(childNode);
```

- `parentNode`: The parent element to which the `childNode` will be appended.
- `childNode`: The node to append (element or text node).

> **Notes:**
>
> - If `childNode` already exists in the DOM, it is moved to the new position instead of being duplicated.
> - Unlike `.append()`, `.appendChild()` accepts only a single node and does not support multiple nodes or strings.

## Example

The following example shows how to use `.appendChild()` to add a paragraph to a `<div>`.

Here is the HTML code:

```html
<div id="container">
  <p>This paragraph was added with appendChild!</p>
</div>
```

Here is the JavaScript code:

```js
// Select the parent node
const parentDiv = document.getElementById('container');

// Create a new paragraph element
const newParagraph = document.createElement('p');

// Add text content to the element
newParagraph.textContent = 'This paragraph was added with .appendChild()!';

// Append it as the last child to the parent node
parentDiv.appendChild(newParagraph);
```

The output is of this code is as following:

```plaintext
This paragraph was added with .appendChild()!
```
