---
Title: '.race()'
Description: 'Returns the first Promise in an iterableObject that is either resolved or rejected.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Promise'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

Returns the first Promise in an `iterableObject` that is either resolved or rejected.

## Syntax

```js
Promise.race(iterableObject);
```

## Example 1

If the `iterableObject` is empty, then the returned Promise will be "pending" forever and never resolve.

```js
const emptyPromises = [];

Promise.race(emptyPromises).then((result) => {
  console.log(result); // Nothing logged to the console
});
```

## Example 2

In the spirit of a race, using `setTimeout()` within two runners named `runnerA` and `runnerB`:

```js
const runnerA = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'The winner is runnerA!');
});

const runnerB = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, 'The winner is runnerB!');
});

const promises = [runnerA, runnerB];

Promise.race(promises)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('Operations for Promise.race() have finished.');
  });
```

## Codebyte Example

The following example demonstrates that **`Promise.race`** returns a new `Promise` object which either resolves (if the first settled promise was resolved) or rejects (if the first settled promise was rejected).

```codebyte/js
function createPromise(resolve, delay, param) {
  return new Promise((resolvePromise, reject) => setTimeout(resolve ? resolvePromise : reject, delay, param));
}

function handleResolveOrReject(param) {
  console.log(param);
}

const resolvedPromisesRace = Promise.race([
  createPromise(true, 100, 'resolvedPromisesRace - Promise resolved after 100ms!'),
  createPromise(true, 200, 'resolvedPromisesRace - Promise resolved after 200ms!')
])
  .then(handleResolveOrReject)
  .catch(handleResolveOrReject);

const rejectedPromisesRace = Promise.race([
  createPromise(false, 300, 'rejectedPromisesRace - Promise rejected after 300ms!'),
  createPromise(false, 400, 'rejectedPromisesRace - Promise rejected after 400ms!')
])
  .then(handleResolveOrReject)
  .catch(handleResolveOrReject);

const resolvedAndRejectedPromiseRace = Promise.race([
  createPromise(false, 500, 'resolvedAndRejectedPromiseRace - Promise rejected after 500ms!'),
  createPromise(true, 600, 'resolvedAndRejectedPromiseRace - Promise resolved after 600ms!')
])
  .then(handleResolveOrReject)
  .catch(handleResolveOrReject);
```
