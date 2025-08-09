---
Title: '.EPSILON'
Description: 'Defines the smallest positive difference between 1 and the next representable floating-point number in JavaScript.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'JavaScript'
  - 'Numbers'
  - 'Properties'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.EPSILON`** property is a static member of the `Number` object in JavaScript. It represents the smallest difference between 1 and the next larger floating-point number, making it useful for handling floating-point precision and comparison in JavaScript.

## Syntax

```pseudo
Number.EPSILON;
```

**Parameters:**

- `.EPSILON` is a static constant and does not take any arguments.

**Return value:**

Returns a constant value representing the smallest difference between 1 and the next greater representable floating-point number. The exact value is approximately `2.220446049250313e-16`.

## Example

In this example, `.EPSILON` is used to check if two floating-point numbers are nearly equal by comparing the difference to a very small threshold:

```js
function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));
```

The output for this code is:

```shell
true
```

In this example, `.EPSILON` is used as a threshold to handle floating-point precision issues. The function compares the absolute difference between two numbers and returns `true` if that difference is smaller than `.EPSILON`, treating them as effectively equal. This helps avoid unexpected results when comparing decimal values like `0.1 + 0.2` and `0.3`.

## Codebyte Example

This codebyte example checks if the total cost of items matches the expected amount, accounting for floating-point precision:

```codebyte/javascript
function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

const item1 = 0.1;
const item2 = 0.2;
const item3 = 0.3;

const total = item1 + item2 + item3;
const expectedTotal = 0.6;

console.log("Is total correct?", isEqual(total, expectedTotal));
```

The `isEqual()` function checks if two numbers are nearly equal using `.EPSILON`. This handles minor floating-point differences in the calculated total.
