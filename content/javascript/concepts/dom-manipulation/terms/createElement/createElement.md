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

In JavaScript, the **`.createElement()`** [method](https://www.codecademy.com/resources/docs/javascript/methods) of the `document` [object](https://www.codecademy.com/resources/docs/javascript/objects) creates a new element node of the specified type. This method returns an `HTMLElement` instance, which can be modified and appended to the DOM.

## Syntax

```pseudo
document.createElement(type)
```

- `type`: A string representing the tag name of the element to be created.

## Example

The following example demonstrates the usage of the `.createElement()` method:

```js
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

// Call the function to add the element to the page
addElement();
```

The above code dynamically adds the following text to the webpage:

```plaintext
Hi, Codecademy!
```
