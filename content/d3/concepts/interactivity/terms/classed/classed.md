---
Title: '.classed()'
Description: 'Enables dynamic addition or removal of CSS classes depending on specific conditions or data values.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'D3'
  - 'CSS'
  - 'Style'
CatalogContent:
  - 'learn-d3'
  - 'paths/data-science'
---

The **`.classed()`** method in D3.js is used to manipulate the classes associated with selected DOM elements.

## Syntax

```pseudo
selection.classed(name, value);
```

- `name`- The name of the CSS class to be added or removed.
- `value`- A boolean value that determines whether to add (**true**) or remove (**false**) the class.

## Example

In this example, the `.classed()` method is used to dynamically add and remove the class `highlight` from the selected element, showcasing its utility in creating interactive and dynamic visualizations:

```js
// Select an element with the id "myElement"
var myElement = d3.select('#myElement');

// Add a class called "highlight" to the selected element
myElement.classed('highlight', true);

// Remove the class "highlight" after a delay
setTimeout(function () {
  myElement.classed('highlight', false);
}, 2000);
```

This example results in the following output:
![Code output](https://raw.githubusercontent.com/Codecademy/docs/main/media/d3-classed-example.png)
