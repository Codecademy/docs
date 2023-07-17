---
Title: '.at()'
Description: 'Return the element at a specified index in an array.'
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

The **`.at()`** method in JavaScript is used to return the element at a specified index in an array. The index can be either positive or negative, and negative indices count from the end of the array.

## Syntax

```js
array.at(index);
```

- `index`:The element at the specified `index` is the one intended to be returned.

## Example 1

```js
const array = [1, 2, 3, 4, 5];
const firstElement = array.at(0);

console.log(firstElement);
```

This example results in the following output:

```shell
1
```

## Codebyte Example

The following example uses `.at()` method and takes an integer as argument and returns the element on that `index`` :

```codebyte/javascript
const array = [1, 2, 3, 4, 5];
const lastElement = array.at(-1);

console.log(lastElement);
```
