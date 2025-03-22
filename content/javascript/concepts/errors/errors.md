---
Title: 'Errors'
Description: 'The JavaScript Error object represents runtime errors, providing information for throwing exceptions and handling them with try-catch blocks.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Error Handling'
  - 'Errors'
  - 'Exceptions'
  - 'Try'
  - 'Catch'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

**Errors** in JavaScript are issues that occur during runtime, represented by the `Error` object. This object provides information about the error type and message and can be used to throw exceptions or handle them in a `try-catch` block.

When JavaScript throws an error, it throws an error object that consists of a `name` and a `message` property. The `name` is the general type of the error, and the `message` is a human-readable description of the specific error that happened.

Thrown errors are caught by the next outer `catch` block of a `try...catch...finally` statement. They can also be thrown intentionally by the `throw` statement.

## The Error Object

The error object holds information about the exception that was thrown in its three properties:

- `name` Sets or returns an error name. (Type of Error)
- `message` Sets or returns an error message. (Description of specific instance.)
- `stack` Returns a string representing the point in the code where the error was instantiated.

The following types of error can be returned by the `name` property:

- "EvalError" An error has occurred in the eval() function (Note: Depreciated in newer versions of JavaScript)
- "RangeError" A number "out of range" has occurred
- "ReferenceError" An illegal reference has occurred
- "SyntaxError" A syntax error has occurred
- "TypeError" A type error has occurred
- "URIError" An error in encodeURI() has occurred

These are some example messages for various types of errors:

- RangeError
  - invalid array length
  - invalid date

```js
let arr = new Array(-1); // RangeError: Invalid array length
```

- ReferenceError
  - "x" is not defined
  - assignment to undeclared variable "x"

```js
console.log(x); // ReferenceError: x is not defined
```

- SyntaxError
  - "x" is a reserved identifier
  - a declaration in the head of a for-of loop can't have an initializer

```js
// SyntaxError: 'for-of' loop variable can't be initialized
try {
  for (let i = 0 of [1, 2, 3]) {
    console.log(i);
  }
} catch (err) {
  console.log(err.name);    // "SyntaxError"
  console.log(err.message); // "'for-of' loop variable can't have an initializer"
}
```

- TypeError
  - "x" is not a function
  - "x" is read-only

```js
let num = 42;
num.toUpperCase(); // TypeError: num.toUpperCase is not a function
```

- URIError
  - malformed URI sequence

```js
// This is an invalid percent encoding (notice '%E0%' is incomplete).
try {
  let badURI = decodeURIComponent('%E0%');
} catch (err) {
  console.log(err.name); // "URIError"
  console.log(err.message); // "malformed URI sequence"
}
```
