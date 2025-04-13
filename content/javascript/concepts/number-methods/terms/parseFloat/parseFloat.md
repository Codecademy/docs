---
Title: '.parseFloat()'
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

In JavaScript, the **`.parseFloat()`** method parses a given string and returns the first floating-point number found in the string. Parsing stops when it encounters a character that is not part of a valid number. If the input string cannot be converted to a valid floating-point number, the method returns `NaN`. This method is a part of the `Number` class in JavaScript.

## Syntax

```pseudo
Number.parseFloat(value);
```

- `Number`: This is the JavaScript built-in object that is used as a namespace for numerical-related methods and constants.
- `value`: Refers to the input string that the `.parseFloat()` tries to convert into a floating-point number. The leading whitespace in this argument is ignored.

## Example

The following examples demonstrate how the `.parseFloat()` method is used to convert a value to a floating-point number:

```js
// Parses the number 3.14 as a floating-point number.
console.log(Number.parseFloat(3.14));

// Parses the string '6.271' as a floating-point number.
console.log(Number.parseFloat('6.271'));

// Parses the string '  2.59  ' as a floating-point number after trimming leading and trailing whitespace.
console.log(Number.parseFloat('  2.59  '));

// Attempts to parse the string '1.49some non-digit characters' as a floating-point number until it encounters non-numeric characters.
console.log(Number.parseFloat('1.49some non-digit characters'));

// Attempts to parse the string 'ABC32' as a floating-point number, but since it contains non-numeric characters, it returns NaN (Not a Number).
console.log(Number.parseFloat('ABC32'));
```

The above code produces the following output in the console:

```shell
3.14
6.271
2.59
1.49
NaN
```

> **Note:** The `Number.parseFloat` function is equivalent to the global `parseFloat()` function.

## Codebyte Example

```codebyte/js
const value = "  5.42c4ke3";

console.log(Number.parseFloat(value));
```
