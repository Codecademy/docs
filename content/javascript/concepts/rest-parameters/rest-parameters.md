---
Title: 'Rest Parameters'
Description: 'A specialized type of parameter that can be used to pass an array of terms.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Objects'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**Rest parameters** are a form of parameter tied to an array, which allows for the concise introduction of multiple terms in a function call. In JavaScript a function can be created and called to accept an array of arguments by utilizing the rest parameter syntax `...`.

## Syntax

```js
function sumVals(...vals) {
  let total = 0;
  for (let val of vals) {
    total += val;
  }
  return total;
}

let nums = [2, 4, 6, 8, 10];

console.log(sumVals(...nums)); // Yields 30
```

Alternatively, other values can be included to supplement the values in the array, as in the following code:

```js
console.log(sumVals(...nums, 10)); // Yields 40
```
