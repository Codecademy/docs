---
Title: '.resolve()'
Description: 'Returns a new Promise object that turns into the value that was passed to the method.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Promise'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

Returns a new `Promise` object that turns into the value that was passed to the method.

## Syntax

```js
Promise.resolve(value);
```

The `value` can be most data types, including:

- numbers
- strings
- objects (even other `Promise` objects)

## Example #1

With non-promise values:

```js
const promiseA = Promise.resolve(1);

const promiseB = Promise.resolve({
  status: 'Success',
  message: 'The Promise was fulfilled!',
});

console.log(promiseA);
console.log(promiseB);
```

## Example #2

With promise values:

```js
const innerPromise = new Promise((resolve, reject) => {
  if (2 + 2 === 4) {
    resolve('Success!');
  } else {
    reject('Something went wrong..');
  }
});

const outerPromise = Promise.resolve(innerPromise);

outerPromise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Output: Success!
```
