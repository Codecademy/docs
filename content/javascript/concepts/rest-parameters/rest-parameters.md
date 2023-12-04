---
Title: 'Rest Parameters'
Description: 'A specialized type of parameter that can be used to pass a variable number of terms.'
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

**Rest parameters** are a form of parameter tied to an array, which allows for the concise introduction of a variable number of terms in a function call. This is also called a _variadic function_. In JavaScript a variadic function can be created and called to accept an indefinite number of arguments by utilizing the rest parameter syntax `...`.

## Syntax

```pseudo
function functionName(...parameterName) {
  statements;
}
```

The function should follow the same declaration syntax with the addition of the `...` operator prefixing the parameter name. Each value will be applied separately to the function body.

## Example

The following code demonstrates a basic implementation of a rest parameter:

```js
function sumVals(...vals) {
  let total = 0;
  for (let val of vals) {
    total += val;
  }
  return total;
}

let nums = [2, 4, 6, 8, 10];
console.log(sumVals(...nums));
```

The above example will return the following result:

```shell
30
```

Alternatively, other values can be included to supplement the values in the array, as in the following code:

```js
console.log(sumVals(...nums, 10));
```

Which yields:

```shell
40
```
