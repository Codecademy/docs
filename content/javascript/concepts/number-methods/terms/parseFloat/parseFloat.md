---
Title: '.parseFloat()'
Description: 'Parses a string argument and returns a floating point number.'
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

The **`.parseFloat()`** method is a part of the `Number` class in JavaScript.

It accepts a single argument, `value` and returns a [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) or [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) when the first non-whitespace character cannot be converted to a number.

Note: JavaScript does not have the distinction of "floating point numbers" and "integers" on the language level.

## Syntax

```js
Number.parseFloat(value);
```

- `value` (required): The value to parse, which is [coerced to a string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Leading whitespaces in this value are ignored.

## Examples

Converting a value to a floating point number:

```js

console.log(Number.parseFloat(3.14));
// Output: 3.14

console.log(Number.parseFloat("6.271"));
// Output: 6.271

console.log(Number.parseFloat("  2.59  "));
// Output: 2.59

console.log(Number.parseFloat("1.49some non-digit characters"));
// Output: 1.49

console.log(Number.parseFloat("ABC32"));
// Output: NaN
```

## Codebyte Example

```codebyte/js
# Before executing the code, what do you believe the result will be?

const value = "  5.42c4ke3";

console.log(Number.parseFloat(value));
```
