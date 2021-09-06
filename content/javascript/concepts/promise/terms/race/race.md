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

Returns the first promise in an `iterableObject` that is either resolved or rejected.

## Syntax

```js
Promise.race(iterableObject);
```

## Example #1

If the `iterableObject` is empty, then the returned promise will be in "pending" forever and never resolve.

```js
const emptyPromises = [];

Promise.race(emptyPromises).then((result) => {
  console.log(result); // Nothing logged to the console
});
```

## Example #2

In the spirit of a race, ssing `setTimeout()` within two runners named `runnerA` and `runnerB`:

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
