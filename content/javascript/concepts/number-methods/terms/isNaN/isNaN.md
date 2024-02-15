---
Title: '.isNaN()'
Description: 'Determines whether the passed value is NaN.'
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

The `Number.isNaN()` method is part of the `Number` class in JavaScript.

It accepts a single argument, `value`, and returns `true` if the passed argument is NaN ("Not a Number"), and returns `false`, otherwise.

## Syntax

```js
Number.isNaN(value);
```

- `value` (required): The value to check.

## Example 1

To verify if `0 / 0` is NaN:

```js
const x = 0 / 0;

console.log(Number.isNaN(x));
// Output: true
```

The square root of a negative number would return NaN, so it would return `true`.

## Example 2

To verify if `5` is NaN:

```js
const y = 5;

console.log(Number.isNaN(y));
// Output: false
```

It would return `false` because 5 is a number.

## Codebyte Example

```codebyte/js
console.log(Number.isNaN(3));
console.log(Number.isNaN(3.14));
console.log(Number.isNaN(-3.14));
console.log(Number.isNaN(true));
console.log(Number.isNaN(false));
console.log(Number.isNaN('asdf'));
console.log(Number.isNaN('NaN'));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(0 / 0));
```
