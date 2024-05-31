---
Title: '.parseInt()'
Description: 'Converts a string into an integer.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Numbers'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`.parseInt()`** function converts a string into an integer. This function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

## Syntax

```pseudo code
Number.parseInt(string, radix);
```

- `Number`: The JavaScript built-in object that serves as a namespace for numerical-related functions and constants.
- `string`: The string to be parsed. The leading whitespace in the string is ignored.
- `radix`: An optional parameter that specifies the base of the numeral system to be used for parsing. It is an integer between 2 and 36. If not provided, the `radix` defaults to 10, except when the string starts with `0x` or `0X`, which indicates a hexadecimal number.

## Example

The following example demonstrates some of the use cases of the `.parseInt()` function:

```js
// converting string to decimal
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

The above code will give the following output:

```shell
100
5
127
NaN
NaN
```

> **Note:** The above example does not cover all possible situations or options. They are just a few examples that help illustrate the concept.

## Codebyte Example

```codebyte/js
console.log(Number.parseInt('10'));

console.log(Number.parseInt('101', 2));

console.log(Number.parseInt('B', 16));

console.log(Number.parseInt('123abc'));

console.log(Number.parseInt('abc123'));
```
