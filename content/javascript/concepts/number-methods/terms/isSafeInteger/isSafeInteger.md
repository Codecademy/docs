---
Title: '.isSafeInteger()'
Description: 'Checks whether the passed value is a safe integer.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.isSafeInteger()`** method is a static method of the `Number` object in JavaScript which determines whether the provided value is a safe integer: an integer that can be exactly represented using the IEEE-754 double-precision format.

A safe integer satisfies:

$$
-(2^{53} - 1) \leq \text{value} \leq 2^{53} - 1
$$

If the condition holds, the method returns `true`, otherwise, it returns `false`.

## Syntax

```pseudo
Number.isSafeInteger(value);
```

**Parameters:**

- `value`: The value to be tested for being a safe integer.

**Return value:**

Returns `true` if the given `value` is of type `number`, is an integer, and is within the safe integer range (`-(2^53 - 1) to 2^53 - 1`). Otherwise, it returns `false`.

## Examples

This example demonstrates how `.isSafeInteger()` returns `true` for integers and `false` for non-integers or values outside the safe range:

```js
console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(3.14));
console.log(Number.isSafeInteger(Math.pow(2, 53)));
console.log(Number.isSafeInteger(2 ** 53 - 1));
```

The output of this code is:

```shell
true
false
false
true
```

## Codebyte Examples

This Codebyte tests various values to show how the method handles whole numbers, decimals, and edge cases at the limits of JavaScript’s safe integer range:

```codebyte/javascript
console.log(Number.isSafeInteger(100));
console.log(Number.isSafeInteger(3.5));
console.log(Number.isSafeInteger(2 ** 53 - 1));
console.log(Number.isSafeInteger(2 ** 53));
```
