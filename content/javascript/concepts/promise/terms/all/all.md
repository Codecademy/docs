---
Title: '.all()'
Description: "Returns a new Promise that can be accessed as an array of resolved values of fulfulled Promises. It takes an iterable object, such as an Array, that contains one or more Promise objects. This is ideal when working with Promises that depend on one another's completion."
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Promise'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The `.all()` method returns a new Promise that can be accessed as an array of resolved values of fulfulled Promises. It takes an iterable object, such as an `Array`, that contains one or more Promise objects. This is ideal when working with Promises that depend on one another's completion.

## Syntax

```js
Promise.all(iterableObject);
```

The `iterableObject` is usually an array of Promise objects. If the array is empty, a Promise object that resolves into an empty array will be returned.

## Example

Working with two Promise objects, `promiseA` and `promiseB`:

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

```plaintext
Results from Promise.all(): [23,144]
Operations for Promise.all() have finished.
```
