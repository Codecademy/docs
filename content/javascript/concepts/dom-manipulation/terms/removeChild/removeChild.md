---
Title: '.removeChild()'
Description: 'Removes a given child node from the DOM and returns the removed node.'
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

The **`.removeChild()`** method in JavaScript is a key DOM (Document Object Model) manipulation tool that removes a specified child node from the DOM tree. It enables developers to dynamically modify a webpage's structure by removing elements from their parent nodes. When called on a parent node with a child node argument, it removes that child from the DOM and returns the removed node. The returned node can still be used for other purposes, such as being inserted elsewhere in the DOM.

## Syntax

```pseudo
parentNode.removeChild(childNode);
```

- `parentNode`: The parent DOM node from which the child will be removed.
- `childNode`: The node to remove (must be a child of the parent node).

### Notes

- The removed node still exists in memory and can be reused, though it's no longer in the DOM.
- If the specified child is not a child of the parent node, the method will throw an error.
- The node must be a direct child of the parent node.

## Example

The following example shows how to use `.removeChild()` to remove a paragraph from a `<div>`.

Here's the HTML code:

```html
<div id="container">
  <p id="removeme">This paragraph will be removed!</p>
</div>
```

Here's the JavaScript code:

```js
// Select the parent node
const parentDiv = document.getElementById('container');

// Select the paragraph to remove
const paragraphToRemove = document.getElementById('removeme');

// Remove the paragraph
const removedParagraph = parentDiv.removeChild(paragraphToRemove);

// Print the removed paragraph
console.log(removedParagraph.textContent);
```

The above code produces the following output:

```shell
"This paragraph will be removed!"
```
