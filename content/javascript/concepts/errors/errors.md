---
Title: 'Errors'
Description: 'When JavaScript throws an error it throws an error object that consists of a name and a message property. The name is the general type of the error, and the message is a human-readable description of the specific error that happened. Thrown errors are caught by the next outer catch block of a try...catch...finally statement. They can also be thrown intentionally by the throw statement. The error object holds information about the exception that was thrown in its two properties: - name Sets or returns an error name. (Type of Error) - message Sets or returns an error message. (Description of specific instance.) The following types of error can be returned by the name property: - "EvalError" An error has occurred in the eval() function (Note: Depreciated in newer versions of JavaScript)'
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

When JavaScript throws an error it throws an error object that consists of a `name` and a `message` property. The `name` is the general type of the error, and the `message` is a human-readable description of the specific error that happened.

Thrown errors are caught by the next outer `catch` block of a `try...catch...finally` statement. They can also be thrown intentionally by the `throw` statement.

## The Error Object

The error object holds information about the exception that was thrown in its two properties:

- `name` Sets or returns an error name. (Type of Error)
- `message` Sets or returns an error message. (Description of specific instance.)

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
- ReferenceError
  - "x" is not defined
  - assignment to undeclared variable "x"
- SyntaxError
  - "x" is a reserved identifier
  - a declaration in the head of a for-of loop can't have an initializer
- TypeError
  - "x" is not a function
  - "x" is read-only
- URIError
  - malformed URI sequence
