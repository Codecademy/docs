---
Title: '.querySelectorAll()'
Description: 'Selects multiple elements from the DOM that matches a specific CSS selector.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Web development'
  - 'Web design'

Tags:
  - 'Web API'
  - 'Conceptual'
  - 'DOM'
  - 'ES6'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/computer-science'
---

The ``.querySelectorAll()`` method is a powerful tool in JavaScript for selecting multiple elements from the DOM that match a specified CSS selector. Unlike ``.querySelector()``, that returns only the first matching element, ``.querySelectorAll()`` returns a static NodeList containing all elements that match the given selector.

This method is useful when you need to manipulate or interact with multiple elements at once, such as applying styles, adding event listeners, or updating content across several elements.

## Syntax


```javascript
document.querySelectorAll(selector);
```

`selector`  is a string containing one or more CSS selectors separated by commas. This can include any valid CSS selector, such as class names, IDs, element types, attributes, etc.


The `querySelectorAll` method returns a NodeList, which is a collection of nodes (elements) that match the specified selector(s). Note that a NodeList is not an array, but it can be iterated over using methods like forEach() or converted into an array using `Array.from()`
.
## Example

Suppose you have the following HTML structure:

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
You can use `.querySelectorAll()` to select all list items (`<li>`) with the class item and apply a style change to them:

    
```javascript
// Select all elements with the class "item"
const items = document.querySelectorAll('.item');

// Loop through the NodeList and apply a style change
items.forEach(item => {
  item.style.color = 'blue';
});
```

In this example:

`.querySelectorAll('.item')` selects all `<li>` elements with the class item.

The `forEach()` method is used to iterate over the NodeList and change the text color of each item to blue.

You can also use more complex selectors. For instance, to select only the `<li>` elements with both the item and completed classes:

```javascript
const specialItem = document.querySelectorAll('.item.completed');
specialItem.forEach(item => {
  item.style.fontWeight = 'bold';
  item.style.textDecoration = 'underline';
});

```
    