---
Title: 'parseInt()'
Description: 'Parses a string argument and returns an integer of the specified radix (base).'
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

It accepts up to two arguments: the string to be parsed, `myString`, and the radix. The radix is optional, and if unprovided, Javascript will adhere to the following:

- If the `myString` starts with `0x` or `0X`, the radix will be default to 16, and the remaining part of the string will be interpreted as a hexadecimal number.
- The radix will default to 10 (decimal) for any other input string.

## Syntax

```pseudo code
parseInt(myString, radix);
```

- `myString` (required): The string to be parsed.
- `radix` (optional): An integer between 2 and 36 inclusive, representing the base of the numeral system to be used.

## Examples

To parse a string into an integer:

```js
const x = parseInt('100');
// x = 100

const y = parseInt('101', 2);
// y = 5 (binary 101 is 5 in decimal)

const z = parseInt('7F', 16);
// z = 127 (hexadecimal 7F is 127 in decimal)
```

The above example demonstrates parsing a decimal, binary and hexadecimal string into their respective integer values.

The following are a few more examples of unintended use of the `parseInt()` method:

```js
// invalid radix values
parseInt('123', 1); // NaN, radix must be between 2 and 36 inclusive

// first character of string
parseInt('*123'); // NaN, first character of string must be a numeric digit
```

> **Note:** The above examples are non-exhaustive.

## Codebyte Example

```codebyte/js
console.log(parseInt('10'));
console.log(parseInt('101', 2));
console.log(parseInt('B', 16));
console.log(parseInt('123abc'));
console.log(parseInt('abc123'));
```
