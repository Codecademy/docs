---
Title: '.toPrecision()'
Description: 'Converts a number to a string of its specified precision form.'
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

The **`.toPrecision()`** method converts a number to a [string](https://www.codecademy.com/resources/docs/javascript/strings) of its specified precision form.

## Syntax

```js
num.toPrecision(precision);
```

- `precision` (optional): The number of significant digits.

## Examples

Converting number to a string:

```js
const pi = 3.14159;

console.log(pi.toPrecision(5)); // Output: 3.1415
console.log(pi.toPrecision(3)); // Output: 3.14
console.log(pi.toPrecision(1)); // Output: 3
```

To verify if it is a string:

```js
const pi = 3.14159;

console.log(typeof pi.toPrecision());
// Output: string
```

## Codebyte Example

Before running the program, what do you think the result will be?

```codebyte/js
const euler = 2.71828;

console.log(euler.toPrecision(5));
console.log(euler.toPrecision(3));
console.log(euler.toPrecision(1));
```
