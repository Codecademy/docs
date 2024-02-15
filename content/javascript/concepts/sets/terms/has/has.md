---
Title: '.has()'
Description: 'Checks whether a value exists in a given Set and returns either true or false.'
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

The **`.has()`** method checks whether a value exists in a given `Set` and returns either `true` or `false`.

## Syntax

```pseudo
set.has(value);
```

The `value` is of a valid [data type](https://www.codecademy.com/resources/docs/javascript/data-types).

## Codebyte Example

```codebyte/javascript
const mySet = new Set();
mySet.add("text");
mySet.add(5);

console.log(mySet.has(5));
console.log(mySet.has("5"));
```
