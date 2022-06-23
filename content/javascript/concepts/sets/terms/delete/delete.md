---
Title: '.delete()'
Description: 'Removes the specified value from the Set and returns a boolean indicating whether or not the deletion was successful.'
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

The **`.delete()`** method removes a specified value from the `Set` and returns a boolean indicating whether or not the deletion was successful.

## Syntax

```pseudo
set.delete(value);
```

The `value` is of a valid [data type](https://www.codecademy.com/resources/docs/javascript/data-types).

## Codebyte Example

```codebyte/javascript
const mySet = new Set();
mySet.add("text");
mySet.add(5);

console.log(mySet);
console.log(mySet.delete(5), ",", mySet);
```
