---
Title: '.isNaN()'
Description: 'Determine whether the passed value is NaN.'
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

The `Number.isNaN()` method is a part of the `Number` class in JavaScript. It accepts a single argument, `value`, and returns `true` if the passed argument is not a number, or `NaN`, and returns `false`, otherwise.

## Syntax

```js
Number.isNaN(value);
```

## Example

To verify if a value is NaN:

```js
const x = 0 / 0;
// 0/0 or the square root of a negative number would return NaN

const y = 5;

console.log(Number.isNaN(x));
// Output: true

console.log(Number.isNaN(y));
// Output: false
```
