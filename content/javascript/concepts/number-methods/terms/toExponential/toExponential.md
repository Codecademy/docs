---
Title: '.toExponential()'
Description: 'Converts a number to a string of its exponential form.'
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

The **`.toExponential()`** method converts a number to a [string](https://www.codecademy.com/resources/docs/javascript/strings) of its exponential form.

## Syntax

```js
num.toExponential(digits);
```

- `digits` (optional): The number of digits to keep after the decimal point.

## Example

Converting number to a string:

```js
const x = 420;

console.log(x.toExponential());
// Output: 4.2e+2
```

To verify if it is a string:

```js
const x = 5;

console.log(typeof x.toExponential());
// Output: string
```

## Codebyte Example

```codebyte/js
const num = 12345;

console.log(num.toExponential());

console.log(num.toExponential(6));
```
