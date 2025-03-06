---
Title: '.removeChild()'
Description: 'Removes a child node from the DOM and returns the removed node.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'DOM'
  - 'ES6'
  - 'Arguments'
  - 'Functions'
  - 'Parameters'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.removeChild()`** method in JavaScript is a key DOM (Document Object Model) manipulation tool that removes a specified child node from the DOM tree. It enables developers to dynamically modify a webpage's structure by removing elements from their parent nodes. When called on a parent node with a child node argument, it removes that child from the DOM and returns the removed node. The returned node can still be used for other purposes, such as being inserted elsewhere in the DOM.

## Syntax

```javascript
parentNode.removeChild(childNode);
```

- `parentNode`: The parent DOM node from which the child will be removed.
- `childNode`: The node to remove (must be a child of the parent node).
- `Return value`: The removed childNode.

### Notes

- The removed node still exists in memory and can be reused, though it's no longer in the DOM.
- If the specified child is not a child of the parent node, the method will throw an error.
- The node must be a direct child of the parent node.

## Example

Here's how to use `.removeChild()` to remove a paragraph from a `<div>`:

```html
<div id="container">
  <p id="removeme">This paragraph will be removed!</p>
</div>
```

```javascript
// Select the parent node
const parentDiv = document.getElementById('container');

// Select the paragraph to remove
const paragraphToRemove = document.getElementById('removeme');

// Remove the paragraph
const removedParagraph = parentDiv.removeChild(paragraphToRemove);

// Optional: We can still use the removed paragraph elsewhere if needed
console.log(removedParagraph.textContent); // "This paragraph will be removed!"
```

```html
<!-- Before -->
<div id="container">
  <p id="removeme">This paragraph will be removed!</p>
</div>

<!-- After -->
<div id="container"></div>
```

## Codebyte Example

Run this example to see `.removeChild()` in action:

```codebyte/js
// Create a parent div with some children
const parentDiv = document.createElement("div");
document.body.appendChild(parentDiv);

// Add two paragraphs
const paragraph1 = document.createElement("p");
paragraph1.textContent = "This paragraph will stay!";
parentDiv.appendChild(paragraph1);

const paragraph2 = document.createElement("p");
paragraph2.textContent = "This paragraph will be removed!";
parentDiv.appendChild(paragraph2);

// Log initial state
console.log("Before removal:");
console.log(parentDiv.outerHTML);

// Remove the second paragraph
parentDiv.removeChild(paragraph2);

// Log the result
console.log("\nAfter removal:");
console.log(parentDiv.outerHTML);
```
