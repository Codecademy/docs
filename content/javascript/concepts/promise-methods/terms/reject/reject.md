---
Title: ".reject()"
Subjects:
  - "Web Development"
Tags:
  - "Methods"
  - "Promise"
Catalog Content:
  - "https://www.codecademy.com/learn/introduction-to-javascript"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition

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
const myPromise = Promise.reject(new Error("Promise rejected"));

myPromise.catch((err) => {
  console.log(err.message); // Output: Promise rejected
});
```
