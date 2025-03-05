---
Title: '.appendChild()'
Description: 'Appends a node as the last child to a parent node in the DOM.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'DOM'
  - 'ES6'
  - 'Arguments'
  - 'Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.appendChild()`** method in JavaScript is a key DOM (Document Object Model) manipulation tool that appends a node, such as an element or text node, as the last child of a specified parent node. It enables developers to dynamically modify a webpage’s structure by adding or repositioning elements in the DOM tree. When called on a parent node with a single node argument, it adds the node as the last child or moves it from its current position if it already exists in the DOM. The method returns the appended node.

## Syntax

```pseudo
parentNode.appendChild(childNode);
```

- `parentNode`: The DOM node to which the child will be appended.
- `childNode`: The node to append (e.g., an element or text node).

> **Notes:**
> 
> - If `childNode` is already in the DOM, it is moved, not duplicated.
> - Unlike **`.append()`**, it accepts only one node, not multiple nodes or strings.

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
const parentDiv = document.getElementById("container");

// Create a new paragraph element
const newParagraph = document.createElement("p");

// Add text content to the element
newParagraph.textContent = "This paragraph was added with .appendChild()!";

// Append it as the last child to the parent node
parentDiv.appendChild(newParagraph);
```

The output is following:

```plaintext
This paragraph was added with .appendChild()!
```
