---
Title: 'reportError()'
Description: 'Allows users to report errors to the console or global error handlers.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'paths/front-end-engineer-career-path'
  - 'introduction-to-javascript'
---

**`reportError()`** is a function of the window interface that is used to report errors to the console or global event listeners, such as browser's error handler. It ensures that the errors are properly reported and improves debugging and monitoring.

## Syntax

The `reportError()` method takes in an instance of [Error](https://www.codecademy.com/resources/docs/javascript/errors) object as a single parameter.

```pseudo
window.reportError(error);
```

## Example 1

The following example uses the `reportError()` function to report error passed in as an error object:

```js
const myError = new Error("Error Message 1", "File.js", 7);
window.reportError(myError);
```

## Example 2

The `reportError()` can also be used with the `try..catch` statement:

```js
try {
    throw new Error("Wrong execution!");
} catch (error) {
    window.reportError(error);
}
```