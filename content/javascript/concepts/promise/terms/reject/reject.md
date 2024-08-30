---
Title: '.reject()'
Description: 'Returns a rejected Promise object with a given reason.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Promise'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

Returns a rejected `Promise` object with a given `reason`.

## Syntax

```js
Promise.reject(reason);
```

The `reason` can be most data types, including:

- numbers
- strings
- objects ( ones of type `Error` recommended for improved error-catching)

## Example

A new Promise, `myPromise`, is rejected with an `Error` message by default. Lastly, the error message, `err.message`, is logged to the console through the catch-block.

```js
const myPromise = Promise.reject(new Error('Promise rejected'));

myPromise.catch((err) => {
  console.log(err.message); // Output: Promise rejected
});
```

## Codebyte Example

The example below demonstrates rejecting a promise with a string value as the given reason.

```codebyte/js
const rejectedPromise = Promise.reject('Did not make the cut!');

rejectedPromise.catch((rejectedValue) => console.log('The reason for rejection: ' + rejectedValue));
```
