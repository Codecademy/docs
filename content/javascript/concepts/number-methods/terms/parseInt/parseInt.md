---
Title: '.parseInt()'
Description: 'Converts a string into an integer.'
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

In JavaScript, the **`.parseInt()`** function converts a string into an integer. This function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

## Syntax

```pseudo code
Number.parseInt(string, radix);
```

- `string` (required): The string to be parsed. The leading whitespace in the string is ignored.
- `radix` (optional): It accepts an integer between 2 and 36 that represents the base of the numeral system. If not provided, the `radix` defaults to 10, except when the string starts with `0x` or `0X` (indicating a hexadecimal number).

## Examples

The following examples demonstrate some of the use cases of the `parseInt()` function:

```js
const x = Number.parseInt('100');
console.log(x);

// converting binary to decimal
const y = Number.parseInt('101', 2);
console.log(y);

//converting hexadecimal to decimal
const z = Number.parseInt('7F', 16);
console.log(z);

// unintended uses of parseInt() function:

// radix must be between 2 and 36 inclusive
const invalidRadix = Number.parseInt('123', 1);
console.log(invalidRadix);

// first character of string must be a numeric digit
const firstChar = Number.parseInt('*123');
console.log(firstChar);
```

The above examples will give the following output:

```shell
100
5
127
NaN
NaN
```

> **Note:** The above examples do not cover all possible situations or options. They are just a few examples that help illustrate the concept.

## Codebyte Example

```codebyte/js
// convert the string into an integer
console.log(Number.parseInt('10'));

// parses '101' as a binary number since the radix is specified as 2
console.log(Number.parseInt('101', 2));

// parses 'B' as a hexadecimal number since the radix is specified as 16
console.log(Number.parseInt('B', 16));

// only parses the valid integer portion
console.log(Number.parseInt('123abc'));

// If the first character can't be converted to a number, it returns NaN.
console.log(Number.parseInt('abc123'));
```
