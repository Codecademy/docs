---
Title: '.get()'
Description: 'Retrieves a value associated with a given key in a Map object.'
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

Retrieves a value associated with a given key in a `Map` object.

## Syntax

The `.get()` method accepts a `key` parameter and checks it against a `Map` object. If the `key` exists in the map, the accosiated value is returned. If not, `undefined` is returned.

```js
map.get(key);
```

## Example

Values are retrieved by their keys from `Map` objects using the `.get()` method.

```js
const fruits = new Map([
  ['Apples', 5],
  ['Oranges', 8],
]);

console.log(fruits.get('Apples')); // Output: 5
console.log(fruits.get('Oranges')); // Output: 8
console.log(fruits.get('Bananas')); // Output: undefined
```
