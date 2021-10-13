---
Title: '.isInteger()'
Description: 'Determines whether the passed value is an integer.'
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

The `Number.isInteger()` method is a part of the `Number` class in JavaScript.

It accepts a single argument, `value`, and returns `true` if the passed argument is an integer, and returns `false` otherwise.

## Syntax

```js
Number.isInteger(value);
```

- `value` (required): The value to check.

## Examples

To verify if a value is an integer or not:

```js
const x = 13 / 5;
// x = 2.6

console.log(Number.isInteger(x));
// Output: false
```

```js
const y = 10 / 5;
// y = 2

console.log(Number.isInteger(y));
// Output: true
```

The above example passes an integer and a decimal value into `Number.isInteger()` method, to verify if the value is an integer or not. Then, the result is printed.

## Codebyte Example

```codebyte/js
console.log(Number.isInteger(0));
console.log(Number.isInteger(3));
console.log(Number.isInteger(-3));
console.log(Number.isInteger(3.14));
console.log(Number.isInteger('3'));
```
