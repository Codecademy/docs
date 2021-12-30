---
Title: '.delete()'
Description: 'Removes the entry associated with a given key from a Map object.'
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

Removes the entry associated with a given key from a `Map` object.

## Syntax

## Example

Data can be removed from `Map` using the `.delete()` method.

```js
console.log(fruits.delete('Oranges')); // Output: true
console.log(fruits.delete('Strawberries')); // Output: false
```

The first statement returns `true` because `fruits` contain `Oranges` as a key and has removed it.
The second statement returns `false` because `Strawberries` is not a key in fruits.
