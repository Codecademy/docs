---
Title: 'parseInt()'
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

The `parseInt()` method parses a string variable and returns an integer according to the specified radix (base).

It accepts up to two arguments: the string to be parsed, `string`, and the radix. The radix is optional, and if unprovided, Javascript will adhere to the following:

- If `string` starts with `0x` or `0X`, the radix will be default to 16, and the remaining part of the string will be interpreted as a hexadecimal number.
- The radix will default to 10 (decimal) for any other input string.

## Syntax

```pseudo code
parseInt(string, radix);
```

- `string` (required): The string to be parsed. Leading whitespace in the string is ignored.
- `radix` (optional): An integer between 2 and 36 that represents the base of the numeral system to be used. If not provided, the `radix` defaults to 10, except when the string starts with `0x` or `0X` (indicating a hexadecimal number).

## Examples

The following examples demonstrate some of the use cases of the `parseInt()` function.

```js
const x = parseInt('100');
console.log(x);

// converting binary to decimal
const y = parseInt('101', 2);
console.log(y);

//converting hexadecimal to decimal
const z = parseInt('7F', 16);
console.log(z);

// unintended uses of parseInt() function:

// radix must be between 2 and 36 inclusive
const invalidRadix = parseInt('123', 1);
console.log(invalidRadix);

// first character of string must be a numeric digit
const firstChar = parseInt('*123');
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
console.log(parseInt('10'));

// parses '101' as a binary number since the radix is specified as 2
console.log(parseInt('101', 2));

// parses 'B' as a hexadecimal number since the radix is specified as 16
console.log(parseInt('B', 16));

// only parses the valid integer portion
console.log(parseInt('123abc'));

// string does not start with a numeric value
console.log(parseInt('abc123'));
```
