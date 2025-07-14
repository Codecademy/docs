---
Title: '.isSafeInteger()'
Description: 'Determines whether the passed value is a **safe** integer (an exact IEEE-754 integer between −(2^53 − 1) and 2^53 − 1).'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Numbers'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The `Number.isSafeInteger()` method is a static method of the `Number` object in JavaScript.

It accepts a single argument, **`value`**, and returns `true` if the passed argument is a **safe integer**—an integer that can be exactly represented in the IEEE-754 double-precision format (from `-(2**53 - 1)` to `(2**53 - 1)`). Otherwise, it returns `false`.

## Syntax

```js
Number.isSafeInteger(value);
```

- `value` (required): The value to check.

## Examples

```js
Number.isSafeInteger(10); // Output: true
Number.isSafeInteger(3.14); // Output: false
Number.isSafeInteger(Math.pow(2, 53)); // Output: false
Number.isSafeInteger(2 ** 53 - 1); // Output: true
```

## Codebyte Examples

```codebyte/javascript
console.log(Number.isSafeInteger(100));        // true
console.log(Number.isSafeInteger(3.5));        // false
console.log(Number.isSafeInteger(2 ** 53 - 1)); // true
console.log(Number.isSafeInteger(2 ** 53));     // false
```
