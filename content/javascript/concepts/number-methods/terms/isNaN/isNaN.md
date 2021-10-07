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

The `Number.isNaN()` method determines whether the passed value is NaN.

## Syntax

```js
Number.isNaN(value);
```

## Example 1

To verify if a value is NaN:

```js
const x = 0/0; // 0/0 or the square root of a negative number would return NaN

console.log(Number.isNaN(x));
// Output: true
```

## Example 2

To verify if a value is NaN:

```js
const x = 5;

console.log(Number.isNaN(x));
// Output: false
```

