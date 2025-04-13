---
Title: 'Try/Catch'
Description: 'The `try...catch...finally` in JavaScript handles errors where `try` tests code, `catch` handles exceptions, and `finally` runs regardless of errors.'
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

The **`try...catch...finally`** statement defines three blocks of code. The `try` block contains code that is tested for possible errors. If an error occurs, the `catch` block handles the exception. Finally, the `finally` block contains code that will execute regardless of whether an error occurred, ensuring that cleanup or final actions take place.

All `try` blocks must be followed by either `catch`, `finally`, or both.

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

The following example shows the `try...catch...finally` statement in action:

```codebyte/javascript
try {
  let num = 5;
  if(num == 5)
  console.log("thank you!");
} catch(error){
  console.log("Error: " + error.message);
} finally{
  console.log("The number has to be 5.");
}
```

## The Error Object

In the above, `err` is an optional variable with an error object for the associated `catch` block.
This object contains information about the thrown exception and is only available in the scope of the `catch` block.

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

The `throw` statement can be used to throw user-defined exceptions. The custom exception can be any JavaScript type, including `String`, `Number`, `Boolean` or `Object`, which will be caught by the next outer catch block.

This can be useful for things like validating input:

```js
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
```

The `throw` statement can also re-throw an error object caught by a `catch` block. This can be useful if only certain types of error should be handled:

```js
try {
  // Series of statements
} catch (e) {
  if (e instanceof RangeError) {
    // Here, any instance of a RangeError exception is handled
  } else {
    // Re-throw any other exceptions
    throw e;
  }
}
```

## Codebyte Example

```codebyte/javascript
function validateAge(age) {
  try {
    if (age < 18) {
      throw "Age must be 18 or older.";
    } else {
      console.log("Valid age: " + age);
    }
  } catch (error) {
    console.log("Error: " + error);
  } finally {
    console.log("Input validation completed.");
  }
}

validateAge(17); // This will throw an error and print the error message
validateAge(20); // This will log the valid age message
```
