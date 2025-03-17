---
Title: '.querySelectorAll()'
Description: 'Selects all DOM elements that match a specific CSS selector.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Conceptual'
  - 'DOM'
  - 'ES6'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.querySelectorAll()`** method selects all elements in the DOM that match a given CSS selector. Unlike `.querySelector()`, which returns only the first matching element, `.querySelectorAll()` returns a static NodeList containing every element that meets the criteria.

This method is essential for manipulating or interacting with multiple elements simultaneously. It enables operations like applying styles, adding event listeners, or updating content across several elements at once.

## Syntax

```pseudo
document.querySelectorAll(selector);
```

- `selector`: A string containing one or more valid CSS selectors, separated by commas. These selectors can include class names, IDs, element types, attributes, and more.

The method returns a NodeList of matching elements. Although a NodeList is not an array, it supports iteration with `forEach()` and can be converted to an array using `Array.from()`.

## Example

Given the following HTML structure for a todo list:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Todolist</title>
  </head>
  <body>
    <ul>
      <li class="item">Go to the gym</li>
      <li class="item">Read for two hours</li>
      <li class="item">Call Jerry</li>
      <li class="item completed">Take a nap</li>
    </ul>
  </body>
</html>
```

The following JavaScript code selects all `<li>` elements with the class `item` and applies a blue text color to them:

```js
// Select all elements with the class "item"
const items = document.querySelectorAll('.item');

// Iterate over the NodeList and change the text color
items.forEach(item => {
  item.style.color = 'blue';
});
```

In addition, to target only the `<li>` elements with both `item` and `completed` classes, use this selector:

```js
const specialItems = document.querySelectorAll('.item.completed');

specialItems.forEach(item => {
  item.style.fontWeight = 'bold';
  item.style.textDecoration = 'underline';
});
```

These examples demonstrate how to use `.querySelectorAll()` to access and style multiple elements within the DOM.
