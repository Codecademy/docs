---
Title: 'Promises'
Description: 'In TypeScript, promises handle asynchronous operations, providing better control over the flow of code.'
Subjects:
  - 'Web Development'
Tags:
  - 'Promise'
  - 'Async Await'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

In TypeScript, **promises** handle asynchronous operations, providing better control over the flow of code.

## Creating Promises

To create a new promise, use the `new` keyword followed by `Promise`. The `Promise` constructor accepts a function which should take two parameters:

- A function to resolve the promise.
- A function to reject the promise.

```pseudo
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous code here
});
```

### Return Types

In TypeScript, add a type annotation to a `Promise` to indicate the type of value it resolves to. If not defined, it defaults to `any`. For example, to indicate a type of `string`:

```ts
const myPromise: Promise<string> = new Promise((resolve, reject) => {
  // This Promise resolves to a string
});
```

Here, `myPromise` is a promise that resolves to a string. If a different type is used to resolve the promise, an error will occur.

> **Note**: The type annotation for promises is used for the value the promise is resolved to, not the value it is rejected with. All rejected promises should be rejected with an `Error` to ensure consistency.

## Handling Promises

Once a promise is declared, use the `.then()` and `.catch()` methods to handle the success or failure of the asynchronous operation. The `.then()` method is called when the `Promise` is resolved, while the `.catch()` method is called when it is rejected.

```ts
myPromise
  .then((value) => {
    console.log('Promise resolved with value: ' + value);
  })
  .catch((error) => {
    console.error('Promise rejected with error: ' + error);
  });
```

## `async`/`await`

TypeScript also supports the `async`/`await` syntax, which is a more readable and an alternative way to handle promises.

```ts
async function myAsyncFunction() {
  try {
    const value = await myPromise;
    console.log('Promise resolved with value: ' + value);
  } catch (error) {
    console.error('Promise rejected with error: ' + error);
  }
}
```

The `async` keyword indicates that a function returns a `Promise`, and the `await` keyword is used to wait for the promise to be resolved. The `try`/`catch` block is used to handle rejected promises.
