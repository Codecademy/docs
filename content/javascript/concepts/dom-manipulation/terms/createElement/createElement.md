---
Title: '.createElement()'
Description: 'Generates a new element node of the specified type.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
Tags:
  - 'JavaScript'
  - 'DOM'
  - 'Methods'
  - 'Elements'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`.createElement()`** [method](https://www.codecademy.com/resources/docs/javascript/methods) of the `document` [object](https://www.codecademy.com/resources/docs/javascript/objects) creates a new element node of the specified type.

## Syntax

```pseudo
document.createElement(type)
```

- `type`: The type of element to create.

## Example

The following example demonstrates the usage of the `.createElement()` method:

```js
document.body.onload = addElement;

function addElement() {
  // Create a div element
  const myDiv = document.createElement('div');

  // Create a text node containing data
  const data = document.createTextNode('Hi, Codecademy!');

  // Insert the data into the div element
  myDiv.appendChild(data);

  // Add the element to the body
  document.body.appendChild(myDiv);
}
```

The example will result in the following output:

```shell
Hi, Codecademy!
```
