---
Title: ".allSettled()"
Description: "Returns a new Promise object that resolves to an array after all Promises in iterableObject have been resolved or rejected. This is ideal when working with multiple Promises that are independent of one another's completion. Each element in the resolved array will be the result of the Promises in iterableObject."
Subjects:
  - "Web Development"
Tags:
  - "Methods"
  - "Promise"
CatalogContent:
  - "introduction-to-javascript"
  - "paths/full-stack-engineer-career-path"
---

The `.allSettled()` method returns a new Promise object that resolves to an array _after_ all Promises in `iterableObject` have been resolved or rejected. This is ideal when working with multiple Promises that are independent of one another's completion. Each element in the resolved array will be the result of the Promises in `iterableObject`.

## Syntax

```js
Promise.allSettled(iterableObject);
```

The `iterableObject` is usually an array of Promise objects. If the array is empty, a Promise object that resolves into an empty array will be returned.

## Example #1

With an empty array

```js
Promise.allSettled([]).then((values) => {
  console.log(values); // Ouput: []
});
```

## Example #2

With an array of Promises

```js
const promiseA = new Promise((resolve, reject) => {
  resolve(23);
});

const promiseB = new Promise((resolve, reject) => {
  const connectionGood = false;
  if (connectionGood) {
    resolve("Success! promiseB is resolved!");
  } else {
    reject({
      errorType: "Network Error",
      message: "Bad Connection. Check network settings on all devices.",
    });
  }
});

const promiseC = new Promise((resolve, reject) => {
  if (2 + 2 === 4) {
    resolve("Success! promiseC is resolved!");
  } else {
    reject({
      errorType: "Unknown Error",
      message: "Invalid Data Used.",
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
    console.log("Operations for Promise.allSettled() have finished.");
  });
```

The outpput would be:

```shell
{ status: 'fulfilled', value: 23 }
{
  status: 'rejected',
  reason: {
    errorType: 'Network Error',
    message: 'Bad Connection. Check network settings on all devices.'
  }
}
{ status: 'fulfilled', value: 'Success! promiseC is resolved!' }
Operations for Promise.allSettled() have finished.
```
