---
Title: '.any()'
Description: 'Iterates over an iterable object of promises and stops at the first one that fulfills. The resulting value from that fulfilled promise is resolved in the returned Promise object.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Promise'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

Iterates over an `iterableObject` of promises and stops at the first one that fulfills. The resulting value from that fulfilled promise is resolved in the returned `Promise` object.

## Syntax

```js
Promise.any(iterableObject);
```

The `iterableObject` is usually an array of promise objects. If the array is empty, a Promise object that resolves into an empty array will be returned.

## Example #1

If the `iterable` object is empty or all the promises within are rejected, an `AggregateError` is thrown.

```codebyte/js
Promise.any([])
  .then((values) => console.log(values))
  .catch((err) => console.log(err))
  .finally(() => console.log("Operations on Promise.any() have finished."))
```

## Example #2

Below is an array of `promises` that contains 3 `Promise` objects.

- 2 of them, `promiseA` and `promiseB`, will be rejected.
- The other one, `promiseC`, will fulfill and resolve with a message.

Using `Promise.all`, the value of the first successfully resolved promise will be logged to the console.

```js
const promiseA = new Promise((resolve, reject) => {
  reject(0);
});

const promiseB = new Promise((resolve, reject) => {
  reject('Always fails!');
});

const promiseC = new Promise((resolve, reject) => {
  resolve('Success!');
});

const promises = [promiseA, promiseB, promiseC];

Promise.any(promises)
  .then((result) => {
    console.log(result); // Output: Success!
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log('Operations on Promise.any() have finished.'));
```
