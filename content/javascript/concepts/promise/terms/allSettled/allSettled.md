---
Title: '.allSettled()'
Description: 'Returns a new Promise object that resolves to an array after all Promises in an iterable object have been resolved or rejected.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Promise'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The **`.allSettled()`** method returns a new Promise object that resolves to an array after all Promises in `iterableObject` have been resolved or rejected. This is ideal when working with multiple Promises that are independent of one another's completion. Each element in the resolved array will be the result of the Promises in `iterableObject`.

## Syntax

```pseudo
Promise.allSettled(iterableObject);
```

The `iterableObject` is usually an array of Promise objects. If the array is empty, a Promise object that resolves into an empty array will be returned.

## Example

With an empty array:

```js
Promise.allSettled([]).then((values) => {
  console.log(values); // Output: []
});
```

## Codebyte Example

With an array of Promises:

```codebyte/javascript
const promiseA = new Promise((resolve, reject) => {
  resolve(23);
});

const promiseB = new Promise((resolve, reject) => {
  const connectionGood = false;
  if (connectionGood) {
    resolve('Success! promiseB is resolved!');
  } else {
    reject({
      errorType: 'Network Error',
      message: 'Bad Connection. Check network settings on all devices.',
    });
  }
});

const promiseC = new Promise((resolve, reject) => {
  if (2 + 2 === 4) {
    resolve('Success! promiseC is resolved!');
  } else {
    reject({
      errorType: 'Unknown Error',
      message: 'Invalid Data Used.',
    });
  }
});

const promises = [promiseA, promiseB, promiseC];

Promise.allSettled(promises)
  .then((values) => {
    values.forEach((val) => console.log(val));
  })
  .catch((err) => {
    console.log(
      `Promise.allSettled() Failed! \n${err.errorType}: ${err.message}`
    );
  })
  .finally(() => {
    console.log('Operations for Promise.allSettled() have finished.');
  });
```
