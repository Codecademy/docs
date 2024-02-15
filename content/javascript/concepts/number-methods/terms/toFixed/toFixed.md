---
Title: '.toFixed()'
Description: 'Converts a number to a string of its fixed-point decimal form.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The `.toFixed()` method converts a number to a string of its fixed-point decimal form.

## Syntax

```js
num.toFixed(digits);
```

- `digits` (optional) is the number of digits to keep after the decimal point. The default is 0.

## Example

Converting number to a string:

```js
const x = 5;

console.log(x.toFixed(3));
// Output: 5.000
```

To verify if it is a string:

```js
const x = 5;

console.log(typeof x.toFixed(3));
// Output: string
```

## Codebyte Example

```codebyte/js
const num = 3.14159;

console.log(num.toFixed(2));

console.log(num.toFixed(4));
```
