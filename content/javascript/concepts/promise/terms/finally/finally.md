---
Title: '.finally()'
Description: 'Returns a new Promise object after the previous promise in the chain has been resolved or rejected. This last part of the chain will execute no matter what.'
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

```js
myPromiseObject.then(fulfilledPromiseCallback).finally(finalPromiseCallback);
```

`.finally()` can be used with or without `.then()` and/or `.catch()`.

## Example

```codebyte/js
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
```
