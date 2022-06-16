---
Title: '.size'
Description: 'Returns the number of values in a Set.'
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

The **`.size`** property returns the number of values in a `Set` as an integer.

## Syntax

```pseudo
set.size;
```

No parameters are needed for the `.size` property.

## Codebyte Example

```codebyte/javascript
const mySet = new Set();
mySet.add("text");
mySet.add(5)

console.log(mySet.size);
```
