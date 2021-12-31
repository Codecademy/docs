---
Title: '.size'
Description: 'Returns the number of entries inside of a Map object.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Map'
  - 'Object'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Returns the number of entries inside of a `Map` object.

## Syntax

Since `.size` is a property of `Map`, no parentheses are needed:

```js
map.size;
```

## Example

Assumming there is a map of `fruits` with two key-value pairs: `'Apples' : 5` and `'Oranges' : 8`.

```js
const fruits = new Map([
  ['Apples', 5],
  ['Oranges', 8],
]);
```

The number of keys in `fruits` can be checked using the `.size` property:

```js
console.log(fruits.size); // Output: 2
```
