---
Title: 'parseFloat()'
Description: 'Converts a string to a floating-point number.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Numbers'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`parseFloat()`** method in JavaScript parses a given string and returns the first floating-point number found in the string, stopping at the first character that is not part of a valid number. It returns `NaN` when the input string cannot be converted to a valid floating-point number format, and it is a method of the `Number` class in JavaScript.

## Syntax

```pseudo
parseFloat(value);
```

- `value`: Refers to the input string that the function converts into a floating-point number.

## Examples

Converting a value to a floating point number:

```js
console.log(Number.parseFloat(3.14));
// Output: 3.14

console.log(Number.parseFloat('6.271'));
// Output: 6.271

console.log(Number.parseFloat('  2.59  '));
// Output: 2.59

console.log(Number.parseFloat('1.49some non-digit characters'));
// Output: 1.49

console.log(Number.parseFloat('ABC32'));
// Output: NaN
```

## Codebyte Example

```codebyte/js
# Before executing the code, what do you believe the result will be?

const value = "  5.42c4ke3";

console.log(Number.parseFloat(value));
```
