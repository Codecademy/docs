---
Title: '.resolve()'
Description: 'Returns a new promise object that turns into the value that was passed to the method.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Promise'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

Returns a new promise object that turns into the value passed to the method.

## Syntax

```js
Promise.resolve(value);
```

The `value` can be most data types, including:

- numbers
- strings
- objects (even other `Promise` objects)

## Codebyte Example

With non-promise values:

```codebyte/js
const promiseA = Promise.resolve(1);

const promiseB = Promise.resolve({
  status: 'Success',
  message: 'The Promise was fulfilled!',
});

console.log(promiseA);
console.log(promiseB);
```

## Example

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
    console.log(result); // Output: Success!
  })
  .catch((err) => {
    console.log(err);
  });
```
