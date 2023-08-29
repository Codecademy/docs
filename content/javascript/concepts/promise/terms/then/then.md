---
Title: '.then()'
Description: 'Returns a new Promise object.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Promise'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

Returns a new `Promise` object.

## Syntax

```js
Promise.prototype.then(resolvedPromiseCallback, rejectedPromiseCallback);
```

The `resolvedPromiseCallback` function handles any resolved data from the previously fulfilled promise. The other argument, `rejectedPromiseCallback`, is optional and executes if the previous Promise was rejected.

## Example

```js
const myPromise = new Promise((resolve, reject) => {
  if (2 + 2 === 3) {
    resolve('Success!');
  } else {
    reject({
      errorType: 'ArithmeticError',
      message: "The numbers don't add up!",
    });
  }
});

myPromise.then(
  (result) => {
    console.log(result);
  },
  (reason) => {
    console.log(`${reason.errorType}: ${reason.message}`); // ArithmeticError: The numbers don't add up!
  }
);
```

## Codebyte Example

The following example shows a .then() method executed for a successful result only by passing the resolve argument as the callback function.

```codebyte/javascript
let person = new Promise(function(resolve){
    resolve('I am a gamer');
});
person.then(console.log);
```
