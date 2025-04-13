---
Title: '.at()'
Description: 'Returns the element at a specified index in an array.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.at()`** method in JavaScript is used to return the element at a specified index in an array. The index can be either positive or negative (negative indices count from the end of the array).

## Syntax

```pseudo
array.at(index);
```

- `index`: The index value of the element to be returned.

## Example

The example below demonstrates how to use the `.at()` function to extract an element from an array based on an index.

```js
const array = [1, 2, 3, 4, 5];
const firstElement = array.at(0);

console.log(firstElement);
```

This example results in the following output:

```shell
1
```
