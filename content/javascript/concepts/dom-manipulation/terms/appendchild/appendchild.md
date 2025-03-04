---
Title: '.appendChild()'
Description: 'Appends a node as the last child of a parent node in the JavaScript DOM.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'DOM'
  - 'ES6'
  - 'An nth tag'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/computer-science'
---

The **`.appendChild()`** method in JavaScript is a key DOM (Document Object Model) manipulation tool that appends a node, such as an element or text node, as the last child of a specified parent node. It enables developers to dynamically modify a webpage’s structure by adding or repositioning elements in the DOM tree. When called on a parent node with a single node argument, it adds the node as the last child or moves it from its current position if it already exists in the DOM. The method returns the appended node.

## Syntax

```javascript
parentNode.appendChild(childNode);
```
* `parentNode`: The DOM node to which the child will be appended.
* `childNode`: The node to append (e.g., an element or text node).
* `Return value`: The appended childNode.

#### Notes:
* If `childNode` is already in the DOM, it is moved, not duplicated.
* Unlike `.append()`, it accepts only one node, not multiple nodes or strings.


## Example
Here’s how to use `.appendChild()` to add a paragraph to a `<div>`:

```javascript
// HTML: <div id="container"></div>

// Select the parent node
const parentDiv = document.getElementById("container");

// Create a new paragraph element
const newParagraph = document.createElement("p");

// Add text content
newParagraph.textContent = "This paragraph was added with appendChild!";

// Append it as the last child
parentDiv.appendChild(newParagraph);
```

```html
<div id="container">
  <p>This paragraph was added with appendChild!</p>
</div>
```

## Codebyte Example
Run this example to see `.appendChild()` in action:


```codebyte/js
// Select or create a parent div
const parentDiv = document.createElement("div");
document.body.appendChild(parentDiv);

// Create and append a paragraph
const newParagraph = document.createElement("p");
newParagraph.textContent = "Hello from appendChild!";
parentDiv.appendChild(newParagraph);

// Log the result
console.log(parentDiv.outerHTML);
```
