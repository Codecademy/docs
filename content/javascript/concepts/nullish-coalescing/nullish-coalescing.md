---
Title: 'Nullish Coalescing'
Description: 'A JavaScript nullish coalescing (??) operator is a logical operator that evaluates the left-hand value and returns it if it isn't nullish (null or undefined). If it is, the operator returns the right-hand side value.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Comparison'
  - 'Logical'
  - 'Operator'
CatalogContent:
- 'introduction-to-javascript'
- 'paths/front-end-engineer-career-path'
---

A JavaScript **nullish coalescing** (??) operator is a logical operator that evaluates the left-hand value and returns it if it isn't nullish (null or undefined). If it is, the operator returns the right-hand side value.

## Syntax

```pseudo
value1 ?? value2
```

## Codebyte Example

The following code checks if name is null or undefined and if it is, logs a default name to the console.

```codebyte/javascript
const name = null;
const defaultName = "Guest";

console.log(name ?? defaultName);
// Output: "Guest"
```