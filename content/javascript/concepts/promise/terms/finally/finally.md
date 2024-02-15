---
Title: '.finally()'
Description: 'Returns a new Promise object after the previous Promise in the chain has been resolved or rejected. This last part of the chain will execute no matter what.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Promise'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

Returns a new `Promise` object after the previous promise in the chain has been resolved or rejected. This last part of the chain will execute no matter what.

## Syntax

```pseudo
myPromiseObject.then(fulfilledPromiseCallback).finally(finalPromiseCallback);
```

`.finally()` can be used with or without `.then()` and/or `.catch()`.

## Example

```js
const myPromise = new Promise((resolve, reject) => {
  if (2 + 2 === 4) {
    resolve('Fulfilled');
  } else {
    reject('Rejected');
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(`${err.status} - ${err.errorType}: ${err.message}`);
  })
  .finally(() => console.log('Operations have ended.'));
/*
  Output: 
  Fulfilled
  Operations have ended.
  */
```

## Codebyte Example

In the following example, the callback function passed to `finally()` is executed when the promise either resolves or rejects.

```codebyte/js
new Promise((resolve, reject) => resolve('Promise 1'))
  .then((value) => console.log('Resolved: ' + value))
  .finally(() => console.log('Always log this when the promise fulfills!'));

new Promise((resolve, reject) => reject('Promise 2'))
  .catch((value) => console.log('Rejected: ' + value))
  .finally(() => console.log('Just log it!'));
```
