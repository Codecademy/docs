---
Title: '.reject()'
Description: 'Returns a rejected promise object with a given reason.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Promise'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

Returns a rejected promise object with a given `reason`.

## Syntax

```js
Promise.reject(reason);
```

The `reason` can be most data types, including:

- numbers
- strings
- objects ( ones of type `Error` are recommended for improved error-catching)

## Codebyte Example

A new promise, `myPromise`, is rejected with an `Error` message by default. Lastly, the error message, `err.message`, is logged to the console through the catch-block.

```codebyte/js
const myPromise = Promise.reject(new Error('Promise rejected'));

myPromise.catch((err) => {
  console.log(err.message);
});
```
