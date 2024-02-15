---
Title: 'Try/Catch'
Description: 'The try...catch...finally statement defines one block of code to execute, a second block of code to be executed if the first block throws an exception, and a third block of code to be executed regardless of the error status. The catch and finally blocks of code are optional, but any try blocks must be followed by one or the other. javascript try { // Statements here are executed until an exception is thrown } catch (err) {'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Try'
  - 'Catch'
  - 'Error Handling'
  - 'Control Flow'
  - 'Errors'
  - 'Exceptions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

The `try...catch...finally` statement defines one block of code to execute, a second block of code to be executed if the first block throws an exception,
and a third block of code to be executed regardless of the error status.

The `catch` and `finally` blocks of code are optional, but any `try` blocks must be followed by one or the other.

## Syntax

```javascript
try {
  // Statements here are executed until an exception is thrown
} catch (err) {
  // Statements here are executed once an exception is thrown in the try block
} finally {
  // Statements here are always executed regardless of any exception
}
```

## The Error Object

In the above, `err` is an optional variable that holds an error object for the associated `catch` block.
This object contains information about the exception that was thrown, and is only available in the scope of the `catch` block.

The error object has two properties:

- `name`: Sets or returns an error name. (Type of error)
- `message`: Sets or returns an error message. (Description of specific instance)

The following types of error can be returned by the `name` property:

- `RangeError`: A number "out of range" has occurred
- `ReferenceError`: An illegal reference has occurred
- `SyntaxError`: A syntax error has occurred
- `TypeError`: A type error has occurred
- `URIError`: An error in `encodeURI()` has occurred

## The `throw` Statement

Exceptions can be thrown intentionally by the `throw` statement. This can be a custom exception consisting of a `String`, `Number`, `Boolean` or `Object` which will be caught by the next outer `catch` block.

This can be useful for things like validating input:

```javascript
var input = 25;

try {
  if (input < 10) {
    throw 'too small!';
  } else if (input > 20) {
    throw 'too big!';
  } else {
    console.log('Input was ' + input);
  }
} catch (e) {
  console.log('Input was ' + e);
}

// Output: Input was too big!
```

The `throw` statement can also re-throw an error object caught by a `catch` block. This can be useful if only certain types of error should be handled:

```javascript
try {
  // Series of statements
} catch (e) {
  if (e instanceof RangeError) {
    // Here any instance of a RangeError exception is handled
  } else {
    // We re-throw any other exceptions
    throw e;
  }
}
```
