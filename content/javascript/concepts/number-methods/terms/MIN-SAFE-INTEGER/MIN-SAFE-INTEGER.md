---
Title: '.MIN_SAFE_INTEGER'
Description: 'Represents the smallest safe integer in JavaScript, below which integer precision is not guaranteed.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Numbers'
  - 'Static Properties'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The `.MIN_SAFE_INTEGER` property in JavaScript is a **static property** of the built-in `Number` object. It represents the **smallest safe integer** that can be accurately represented using the IEEE-754 double-precision floating-point format, which JavaScript uses for all numeric values.

JavaScript is a **dynamically typed language**, meaning variables do not have fixed types. All numeric values are treated as floating-point numbers under the `Number` type. Since `.MIN_SAFE_INTEGER` is a **static constant**, it is not attached to individual variables or instances, but instead accessed directly from the `Number` object as `Number.MIN_SAFE_INTEGER`.

A **safe integer** is one that:
- Can be exactly represented as a JavaScript number
- Will not lose precision during arithmetic operations
- Can be reliably compared with other values

The value of `Number.MIN_SAFE_INTEGER` is `-(2^53 - 1)`, or `-9007199254740991`. This number is also commonly represented in scientific notation as `-9.007199254740991 × 10¹⁵`.  
Any integer value smaller than this may result in rounding errors or incorrect comparisons due to the limitations of floating-point precision.

## Syntax

```javascript
Number.MIN_SAFE_INTEGER
```

- `.MIN_SAFE_INTEGER` is a **static property** of the `Number` object.
- It must be accessed using `Number.MIN_SAFE_INTEGER` (not from an instance).
- It returns the constant value `-9007199254740991` (or `-9.007199254740991 × 10¹⁵`).

## Examples

```javascript
console.log(Number.MIN_SAFE_INTEGER);
// Output: -9007199254740991

const a = Number.MIN_SAFE_INTEGER - 1;
const b = Number.MIN_SAFE_INTEGER - 2;

console.log(a === b);
// Output: true
```

This example demonstrates what happens when values go below the minimum safe integer. Although `a` and `b` should be distinct values (`-9007199254740992` and `-9007199254740993`), the precision limit of JavaScript's number system causes both values to be stored as the same binary representation. As a result, `a === b` evaluates to `true`, even though mathematically they are not equal.

## Codebyte Example

Before running the program, consider:  
**Is the value one unit below the minimum still a safe integer?**

```codebyte/javascript
console.log("Minimum safe integer in JavaScript:");
console.log(Number.MIN_SAFE_INTEGER);
// Output: -9007199254740991

const unsafeValue = Number.MIN_SAFE_INTEGER - 1;
console.log("Unsafe value:", unsafeValue);
// Output: -9007199254740992

console.log("Is unsafeValue a safe integer?");
console.log(Number.isSafeInteger(unsafeValue));
// Output: false
```
