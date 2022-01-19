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

The `.delete()` method accepts a `key` parameter and returns `true` if the deletion was successful. Otherwise, if the `key` does not exist, `false` is returned.

```js
map.delete(key);
```

## Example

Data can be removed from a `Map` object using the `.delete()` method.

```js
const fruits = new Map([
  ['Apples', 5],
  ['Oranges', 8],
]);

console.log(fruits.delete('Oranges')); // Output: true
console.log(fruits.delete('Strawberries')); // Output: false
```

The first `.delete()` statement returns `true` because `fruits` contain an entry with `Oranges` as a key and has successfully removed it. The second statement returns `false` because an entry with the `Strawberries` key does not exist in `fruits`.
