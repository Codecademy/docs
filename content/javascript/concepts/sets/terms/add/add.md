---
Title: '.add()'
Description: 'Inserts a value into a Set (if it is unique) and returns the updated Set object.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Sets'
  - 'Objects'
  - 'Collections'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.add()`** method inserts a value into a `Set` (if it is unique) and returns the updated `Set` object.

## Syntax

```pseudo
set.add(value);
```

The `value` in `set` is unique and of a valid [data type](https://www.codecademy.com/resources/docs/javascript/data-types).

## Codebyte Example

```codebyte/javascript
const mySet = new Set();

mySet.add(1);
mySet.add("text");
console.log(mySet);

mySet.add(1);
console.log(mySet);
// Still, Set(2) { 1, 'text' } because 1 is already in the set
```
