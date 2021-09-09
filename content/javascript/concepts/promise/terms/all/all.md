---
Title: '.all()'
Description: 'Returns a new Promise that can be accessed as an array of resolved values of fulfulled promises. It takes an iterable object, such as an array, and contains one or more promise objects. This is ideal when working with promises that depend on the completion of another promise.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Promise'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The `.all()` method returns a new Promise that can be accessed as an array of resolved values (fulfilled promises). It accepts an iterable object, such as an `Array`, and contains one or more promise objects. This is ideal when working with promises that depend on the completion of another promise.

## Syntax

```js
Promise.all(iterableObject);
```

The `iterableObject` is usually an array of promise objects. If the array is empty, a Promise object that resolves into an empty array will be returned.

## Codebyte Example

Working with two promise objects, `promiseA` and `promiseB`:

```codebyte/js
const promiseA = new Promise((resolve, reject) => {
  resolve(23);
});

const promiseB = new Promise((resolve, reject) => {
  if (12 * 12 === 144) {
    resolve(144);
  } else {
    reject({
      errorType: 'TypeError',
      message: `Unexpected type - expected ${typeof (12 * 12)}.`,
    });
  }
});

Promise.all([promiseA, promiseB])
  .then((values) => {
    console.log(`Results from Promise.all(): [${values}]`);
  })
  .catch((err) => {
    console.log(`Promise.all Failed! \n${err.errorType}: ${err.message}`);
  })
  .finally(() => {
    console.log('Operations for Promise.all() have finished.');
  });
```
