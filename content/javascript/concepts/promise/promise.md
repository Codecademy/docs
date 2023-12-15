---
Title: 'Promise'
Description: 'A JavaScript Promise is an object that can be used to get the outcome of an asynchronous operation when that result is not instantly available.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Promise'
  - 'Objects'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

A JavaScript `Promise` is an object that can be used to get the outcome of an asynchronous operation when that result is not instantly available.

Since JavaScript code runs in a non-blocking manner, promises become essential when we have to wait for some asynchronous operation without holding back the execution of the rest of the code. Some common use cases for promises include using data from APIs and downloading images.

## Promise Object State

Promises are ideal for performing asynchronous JavaScript operations. This is supported by their use of three states:

- A `pending` state, where the promise has yet to resolve or be rejected.
- A `fulfilled` status, where asynchronous operations are complete and a value has been returned.
- A `rejected` state, where asynchronous operations have failed at some point.

### Syntax

A `Promise` object is returned from a function that accepts two unique functions: `resolve` and `reject`:

```js
let myPromise = new Promise((resolve, reject) => {
  // Promise code here
});
```

If `myPromise` yields a legitimate value, it will execute the `resolve()` function. However, if something were to go awry, such as bad data or a server error, the `reject()` function would execute, instead.

## Chaining

Chaining is a technique used to perform additional operations against a "fulfilled" promise. The following methods are used for promise chaining:

- `.then()`, which performs operations on a fulfilled promise object and returns a new value.
- `.catch()`, which handles any anticipated promise rejections and throws an error.
- `.finally()`, which executes without regard to whether the promise was fulfilled or rejected.

Below is a brief example of using chaining to produce a success message after the promise is fulfilled:

```js
const promise = new Promise((resolve, reject) => {
  const term1 = 2;
  const term2 = 2;
  const expression = term1 + term2;
  const answer = 4;
  const expressionIsCorrect = expression === answer;

  // 2 + 2 = 4, and 4 = 4, so this is true!
  if (expressionIsCorrect) {
    resolve('The promise was fulfilled!');
  } else {
    reject({
      errorType: 'ArithmeticError',
      message: "The expression didn't evaluate correctly.",
      originalExpression: `${term1} + ${term2} === ${answer}`,
    });
  }
});

promise
  .then((message) => {
    console.log(`Success: ${message}`);
  })
  .catch((err) => {
    console.log(
      `${err.errorType}: ${err.message} \nOriginal Expression: ${err.originalExpression}`
    );
  })
  .finally((message) => {
    console.log('Operations finished');
  });

// Output: Success: The promise was fulfilled!
```

## Async Await

Starting from ES2017, JavaScript introduced the keywords `async` and `await`, which are used to write promises in a cleaner way. This can be used as an alternative to other verbose solutions, such as promise chaining.

> **Note:** `await` is only usable in an asynchronous function, otherwise, it will throw a SyntaxError.

```js
function myPromise() {
  return new Promise((resolve) => {
    resolve('Successful promise!');
  });
}

function mySecondPromise() {
  return new Promise((resolve) => {
    resolve('Second successful promise!');
  });
}

async function someAsyncAwaitFunction() {
  try {
    const promise = await myPromise();
    const promiseTwo = await mySecondPromise();

    console.log(promise);
    console.log(promiseTwo);
  } catch (error) {
    console.log(`Error from async function: ${error}`);
  }
}

someAsyncAwaitFunction();
```

This example results in the following output:

```shell
Successful promise!
Second successful promise!
```
