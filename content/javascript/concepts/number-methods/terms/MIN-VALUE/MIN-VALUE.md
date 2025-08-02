---
Title: '.MIN_VALUE'
Description: 'Returns the smallest positive number representable in JavaScript, greater than 0.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'JavaScript'
  - 'Numbers'
  - 'Constants'
CatalogContent:
  - 'learn-javascript'
  - 'paths/computer-science'
---

The `Number.MIN_VALUE` constant represents the smallest positive numeric value that can be represented in JavaScript, which is greater than `0` but very close to it.

## Syntax

```pseudo
Number.MIN_VALUE
```

**Parameters:**

None

**Return value:**

A number (`5e-324`) which is the smallest positive floating-point value representable in JavaScript.

## Example 1: Comparing tiny numbers with `.MIN_VALUE`

This example checks if a number is smaller than JavaScript's smallest positive value:

```js
const tiny = 1e-324;
console.log(tiny < Number.MIN_VALUE);
```

The output of this code is:

```shell
true
```

This confirms that `1e-324` is smaller than `Number.MIN_VALUE`, meaning JavaScript treats it as effectively zero.

## Example 2: Using `.MIN_VALUE` in scientific precision checks

This example determines if a number is too small to be considered non-zero in physics simulations:

```js
function isEffectivelyZero(num) {
  return Math.abs(num) < Number.MIN_VALUE;
}

console.log(isEffectivelyZero(1e-325));
console.log(isEffectivelyZero(1e-320));
```

The output of this code is:

```shell
true
false
```

The function detects when a value is smaller than what JavaScript can reliably represent as a non-zero number.

## Codebyte Example: Handling rounding errors in financial apps with `.MIN_VALUE`

This example uses `.MIN_VALUE` to ignore balances that are too tiny to count as real money:

```js
const balance = 0.0000000000000000000000001;

if (balance < Number.MIN_VALUE) {
  console.log("Balance is effectively zero");
} else {
  console.log("Balance is non-zero");
}
```

## Frequently asked questions

### 1. Is `Number.MIN_VALUE` negative?

No. It is the smallest positive number JavaScript can represent. It is greater than 0.

### 2. What's the difference between `Number.MIN_VALUE` and `Number.MIN_SAFE_INTEGER`?

`MIN_VALUE` is the smallest positive float value (`5e-324`), while `MIN_SAFE_INTEGER` is the most negative integer that can be accurately represented.

### 3. Why does dividing `Number.MIN_VALUE` sometimes return 0?

When a value becomes smaller than what JavaScript can represent, it underflows to 0.
