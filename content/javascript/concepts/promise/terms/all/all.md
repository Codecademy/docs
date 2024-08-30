---
Title: '.all()'
Description: 'Returns a new promise that can be accessed as an array of resolved values of fulfilled promises.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Promise'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The **`.all()`** method returns a new `Promise` object that can be accessed as an array of resolved values of fulfilled promises. It takes an iterable object, such as an `Array`, that contains one or more `Promise` objects. This is ideal when working with promises that depend on one another's completion.

## Syntax

```pseudo
Promise.all(iterableObject);
```

The `iterableObject` is usually an array of `Promise` objects. If the array is empty, a `Promise` object that resolves into an empty array will be returned.

## Example

Working with two promises, `promiseA` and `promiseB`:

```js
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

The output would be:

```shell
Results from Promise.all(): [23,144]
Operations for Promise.all() have finished.
```

## Codebyte Example

The following example demonstrates that the promise returned from `Promise.all` resolves only if all promises (passed as an array) resolve. The resolved value is an array containing the values of each resolved promise.

If at least one promise was rejected, `Promise.all` rejects with the value of the first rejected promise it encounters.

```codebyte/js
function getPromise(shouldResolve, value) {
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(value);
    } else {
      reject(value);
    }
  });
}

function onResolve(value) {
  console.log('Resolved: ' + value);
}

function onReject(value) {
  console.log('Rejected: ' + value);
}

const resolvedPromise1 = getPromise(true, 'Resolved promise 1');
const resolvedPromise2 = getPromise(true, 'Resolved promise 2');
const rejectedPromise1 = getPromise(false, 'Rejected promise 1');
const rejectedPromise2 = getPromise(false, 'Rejected promise 2');

Promise.all([resolvedPromise1, resolvedPromise2])
  .then(onResolve)
  .catch(onReject);

Promise.all([rejectedPromise1, resolvedPromise1, rejectedPromise2, resolvedPromise2])
  .then(onResolve)
  .catch(onReject);
```
