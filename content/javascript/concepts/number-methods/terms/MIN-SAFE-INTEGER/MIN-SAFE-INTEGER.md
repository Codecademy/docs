---
Title: '.MIN_SAFE_INTEGER'
Description: 'Represents the smallest safe integer in JavaScript, below which integer precision is not guaranteed.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Integers'
  - 'JavaScript'
  - 'Numbers'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`.MIN_SAFE_INTEGER`** property is a static constant that represents the smallest safe integer in JavaScript: `-(2^53 - 1)` or `-9007199254740991`. JavaScript uses the IEEE-754 double-precision format for all numbers, meaning not all integers can be represented exactly. A safe integer is one that:

- Can be precisely represented
- Doesn’t lose precision during arithmetic
- Can be accurately compared

Since JavaScript is dynamically typed, all numbers fall under the `Number` type and are treated as floating-point values. `.MIN_SAFE_INTEGER` isn’t tied to any variable as it’s accessed directly via `.MIN_SAFE_INTEGER`. Values smaller than this limit may suffer from rounding errors or incorrect comparisons due to floating-point precision limits.

## Syntax

```pseudo
Number.MIN_SAFE_INTEGER
```

**Parameters:**

`.MIN_SAFE_INTEGER` is a static property of the Number object. It's accessed directly without calling a function or passing arguments.

**Return value:**

It returns a number: `-9007199254740991`. This is the smallest integer JavaScript can represent safely without precision loss using the `Number` type (IEEE-754 double-precision).

## Example

In this example, subtracting beyond the minimum safe integer leads to precision loss, causing distinct values to compare as equal:

```js
console.log(Number.MIN_SAFE_INTEGER);

const a = Number.MIN_SAFE_INTEGER - 1;
const b = Number.MIN_SAFE_INTEGER - 2;

console.log(a === b);
```

The output of this code is:

```shell
-9007199254740991
true
```

This demonstrates what happens when values go below the minimum safe integer. Although `a` and `b` should be distinct (`-9007199254740992` and `-9007199254740993`), both are stored as the same value due to floating-point precision limits. So, `a === b` returns `true`, even though they are not mathematically equal.

## Codebyte Example

In this codebyte example, `.isSafeInteger()` is used to check if a value just below the minimum safe integer is still considered safe:

```codebyte/javascript
console.log("Minimum safe integer in JavaScript:");
console.log(Number.MIN_SAFE_INTEGER);

const unsafeValue = Number.MIN_SAFE_INTEGER - 1;
console.log("Unsafe value:", unsafeValue);

console.log("Is unsafeValue a safe integer?");
console.log(Number.isSafeInteger(unsafeValue));
```
