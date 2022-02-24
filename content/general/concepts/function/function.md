---
Title: 'Function'
Description: 'The function data type.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Types'
CatalogContent:
  - 'paths/code-foundations'
  - 'paths/computer-science'
---

In programming, functions hold a distinct place among the [data types](https://www.codecademy.com/resources/docs/general/data-types). While, on the surface, functions are algorithms that yield results or produce side-effects, they are usually processed as objects of data. 

Many of today's languages, therefore, treat functions as first-class objects, which means:

* They can be assigned to variables.
* They can be passed as arguments to or returned by other functions.

```javascript
function someFunction() {
  return 'Hello World!';
} // nothing happends

somefunction(); // outputs Hello World! because the function was called

function otherFunction(name) {
  return `Hi ${name} welcome to Codecademy docs!`;
} // nothing happends

otherFunction('Codecademy'); // outputs Hi Codecademy welcome to Codecademy docs! because the function was called and we use the Codecademy as the agument.
```
