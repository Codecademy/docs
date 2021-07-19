---
Title: ".isArray()"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Arrays"
  - "Methods"
Catalog Content:
  - "https://www.codecademy.com/learn/introduction-to-javascript"
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition

Returns `true` for arrays; otherwise, `false`.

## Syntax

```js
Array.isArray(value);
```

Required parameter value is the value to be checked.

## Examples

Check if the following values are arrays:

```js
console.log(Array.isArray([]));
// Output: true

console.log(Array.isArray({}));
// Output: false

console.log(Array.isArray(new Array(5)));
// Output: true

console.log(Array.isArray(true));
// Output: false
```
