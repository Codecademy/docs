---
Title: '.isFinite()'
Description: 'Determine whether the passed value is a finite number.'
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

The `.isFinite()` method is a part of the `Number` class in JavaScript. It accepts a single argument, `value`, returns `true` if the passed argument is a finite number, and returns `false` if the passed argument is either positive `Infinity`, negative `Infinity`, or `NaN`.

## Syntax

```js
Number.isFinite(value);
```

## Example

To verify if a value is a finite number or not:

```js
const x = 1 / 0;
// x = Infinity

const y = 0 / 0;
// y = NaN

const z = 10 / 5;
// z = 2

console.log(Number.isFinite(x));
// Output: false

console.log(Number.isFinite(y));
// Output: false

console.log(Number.isFinite(z));
// Output: true
```

The above example passes three constant values, an `Infinity`, a `NaN` and an integer value, into `Number.isFinite()` method to verify if a value is finite or not. The result is then printed.
