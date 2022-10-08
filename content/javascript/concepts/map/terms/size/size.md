---
Title: '.size'
Description: 'Returns the number of entries inside of a Map object.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Map'
  - 'Object'
  - 'Properties'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.size`** property returns the number of entries inside of a `Map` object.

## Syntax

```pseudo
map.size;
```

Since `.size` is a property of `Map`, no parentheses are needed.

## Example

Assuming there is a map of `fruits`, the number of keys can be checked with the `.size` property:

```js
const fruits = new Map([
  ['Apples', 5],
  ['Oranges', 8],
]);

console.log(fruits.size); // Output: 2
```
