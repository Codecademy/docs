---
Title: ".catch()"
Description: "Returns a new Promise related to a previously rejected Promise in the chain. This is ideal for formatting error messages for potential Promise rejections."
Subjects:
  - "Web Development"
Tags:
  - "Methods"
  - "Promise"
Catalog Content:
  - "https://www.codecademy.com/learn/introduction-to-javascript"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition

Returns a new Promise related to a previously rejected Promise in the chain. This is ideal for formatting error messages for potential Promise rejections.

## Syntax

```js
myPromiseObject.catch(rejectedPromiseCallback);
```

The `rejectedPromiseCallback` function will have access to all `reject()` data inside of `myProjectObject`.

## Example

Inside the `brokenPromise` is a single `reject()` call with error information. It is then handled inside `.catch()`.

```js
const brokenPromise = new Promise((resolve, reject) => {
  reject({
    errorType: "Unknown error",
    message: "Something went wrong.",
  });
});

brokenPromise.catch((err) => {
  console.log(`${err.errorType}: ${err.message}`); // Unknown error: Something went wrong.
});
```
