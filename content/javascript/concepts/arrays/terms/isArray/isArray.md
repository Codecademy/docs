---
Title: '.isArray()'
Description: 'Returns true for arrays, otherwise false.'
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

The `.isArray()` method returns `true` for arrays, otherwise `false`.

> **Note**: The `.isArray()` method is called on the `Array` constructor function and is not a prototype method. That is why `.isArray()` is called using `Array.isArray()`.

## Syntax

```pseudo
Array.isArray(value);
```

Required parameter `value` is the value to be checked.

## Example

An empty array is passed into the `.isArray()` method:

```js
console.log(Array.isArray([]));
// Output: true

console.log(Array.isArray(new Array(5)));
// Output: true
```

## Codebyte Example

In the examples below, the `.isArray()` method is used to check if values of various types are considered arrays:

```codebyte/javascript
console.log(Array.isArray({}));

console.log(Array.isArray(true));

const numbers = [2, 5, 11, 26, 34, 47];
console.log(Array.isArray(numbers));
```
