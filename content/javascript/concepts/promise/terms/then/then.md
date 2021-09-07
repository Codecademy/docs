---
Title: '.then()'
Description: 'Returns a new promise object.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Promise'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

Returns a new promise object.

## Syntax

```js
Promise.prototype.then(resolvedPromiseCallback, rejectedPromiseCallback);
```

The `resolvedPromiseCallback` function handles any resolved data from the previously fulfilled promise. The other argument, `rejectedPromiseCallback`, is optional and executes if the previous promise was rejected.

## Example

```codebyte/js
const myPromise = new Promise((resolve, reject) => {
  if (2 + 2 === 3) {
    resolve('Success!');
  } else {
    reject({
      errorType: 'ArithmeticError',
      message: "The numbers don't add up!",
    });
  }
});

myPromise.then(
  (result) => {
    console.log(result);
  },
  (reason) => {
    console.log(`${reason.errorType}: ${reason.message}`);
  }
);
```
