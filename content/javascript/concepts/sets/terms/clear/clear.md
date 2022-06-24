---
Title: '.clear()'
Description: 'Deletes all values from a Set and returns undefined.'
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

The **`.clear()`** method deletes all values from a `Set` and returns `undefined`.

## Syntax

```pseudo
set.clear();
```

No parameters are needed for the `.clear()` method.

## Codebyte Example

```codebyte/javascript
const mySet = new Set();
mySet.add("text");
mySet.add(5);

mySet.clear();

console.log(mySet);
```
