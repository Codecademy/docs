---
Title: '.all()'
Description: 'Returns a new Promise that resolves to an array of values once all input promises are fulfilled.'
Subjects:
  - 'Code Foundations'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Promise'
  - 'Values'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The JavaScript **`Promise.all()`** [method](https://www.codecademy.com/resources/docs/javascript/methods) returns a new `Promise` [object](https://www.codecademy.com/resources/docs/javascript/objects) that can be accessed as an [array](https://www.codecademy.com/resources/docs/javascript/arrays) of resolved values of fulfilled promises. It takes an [iterable](https://www.codecademy.com/resources/docs/javascript/iterators) object, such as an `Array`, that contains one or more `Promise` objects. This is ideal when working with promises that depend on one another's completion.

## JavaScript `Promise.all()` Syntax

```pseudo
Promise.all(iterableObject);
```

**Parameters:**

- `iterableObject`: An iterable (such as an array) of promises or values.

**Return value:**

Returns a new `Promise` object that can be accessed as an array of resolved values of fulfilled promises.

## Example 1: Working with Two Promises

This example demonstrates how two promises resolve successfully and how JavaScript `Promise.all()` returns their values as an array:

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

```shell
Results from Promise.all(): [23,144]
Operations for Promise.all() have finished.
```

## Example 2: Using `Promise.all()` with Asynchronous Tasks

In this example, asynchronous API calls are simulated using `setTimeout()`. All promises resolve at different times, but JavaScript `Promise.all()` waits until all are resolved before returning results:

```js
function fakeApiCall(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name} finished in ${delay}ms`);
    }, delay);
  });
}

const task1 = fakeApiCall('Task 1', 1000);
const task2 = fakeApiCall('Task 2', 2000);
const task3 = fakeApiCall('Task 3', 500);

Promise.all([task1, task2, task3])
  .then((results) => {
    console.log('All tasks completed:');
    console.log(results);
  })
  .catch((err) => {
    console.log('At least one task failed:', err);
  });
```

Here is the output:

```shell
All tasks completed:
[
  'Task 1 finished in 1000ms',
  'Task 2 finished in 2000ms',
  'Task 3 finished in 500ms'
]
```

## Codebyte Example: Mixing Resolved and Rejected Promises

This codebyte example demonstrates that the promise returned from JavaScript `Promise.all()` resolves only if all promises resolve. The resolved value is an array containing the values of each resolved promise.

If at least one promise was rejected, `Promise.all()` rejects with the value of the first rejected promise it encounters:

```codebyte/javascript
function getPromise(shouldResolve, value) {
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(value);
    } else {
      reject(value);
    }
  });
}

function onResolve(value) {
  console.log('Resolved: ' + value);
}

function onReject(value) {
  console.log('Rejected: ' + value);
}

const resolvedPromise1 = getPromise(true, 'Resolved promise 1');
const resolvedPromise2 = getPromise(true, 'Resolved promise 2');
const rejectedPromise1 = getPromise(false, 'Rejected promise 1');
const rejectedPromise2 = getPromise(false, 'Rejected promise 2');

Promise.all([resolvedPromise1, resolvedPromise2])
  .then(onResolve)
  .catch(onReject);

Promise.all([rejectedPromise1, resolvedPromise1, rejectedPromise2, resolvedPromise2])
  .then(onResolve)
  .catch(onReject);
```

## Frequently Asked Questions

### 1. What is the difference between JavaScript `Promise.all()` and `Promise.any()`?

- JavaScript `Promise.all()` resolves only when all promises resolve. If one fails, it rejects immediately.
- `Promise.any()` resolves as soon as one of the promises resolves. It rejects only if all promises fail.

### 2. What is the purpose of JavaScript `Promise.all()`?

The main purpose of JavaScript `Promise.all()` is to run multiple async operations in parallel and proceed only when all of them have completed successfully. This is useful for:

- Fetching data from multiple APIs simultaneously
- Running independent async tasks and waiting for all results before continuing

### 3. Does JavaScript `Promise.all()` have a limit?

JavaScript itself does not enforce a strict limit on the number of promises that can be passed to `Promise.all()`. However:

- Extremely large arrays may cause performance or memory issues.
- Practical limits depend on the runtime environment (browser, Node.js) and system resources.
