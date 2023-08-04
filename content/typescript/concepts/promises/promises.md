# Promises in TypeScrip

Description:Learn how to handle asynchronous operations in TypeScript using Promises, providing better control over the flow of code.
Subjects:

  -Web Developmen

Tags:

  -Promise
  -Async/awai
  -learn-typescrip
CatalogContent:
  -paths/full-stack-engineer-career-pat

## Creating Promises

To create a new Promise, you use the new keyword followed by Promise. The Promise constructor accepts a function which should take two parameters: a function to resolve the Promise and a function to reject it.

```typescript
const myPromise = new Promise((resolve, reject) => {
  // asynchronous code here
});
```

## Handling Promises

Once you have a Promise, you can use the `.then` and `.catch` methods to handle the success or failure of the asynchronous operation. The `.then` method is called when the Promise is resolved, while the `.catch` method is called when the Promise is rejected.

```typescript
myPromise.then((value) => {
  console.log('Promise resolved with value: ' + value);
}).catch((error) => {
  console.error('Promise rejected with error: ' + error);
});
```

## Async/Await

TypeScript also supports the async/await syntax, which is a more readable and easier way to handle Promises.

```typescript
async function myAsyncFunction() {
  try {
    const value = await myPromise;
    console.log('Promise resolved with value: ' + value);
  } catch (error) {
    console.error('Promise rejected with error: ' + error);
  }
}
```

The `async` keyword indicates that a function returns a Promise, and the `await` keyword is used to wait for the Promise to be resolved. The try/catch block is used to handle rejected Promises.

## Promise Types

In TypeScript, you can add a type annotation to the Promise to indicate the type of value it resolves to.

```typescript
const myPromise: Promise<string> = new Promise((resolve, reject) => {
  // this Promise resolves to a string
});
```

In this example, `myPromise` is a Promise that resolves to a string. If you try to resolve the Promise with a value of a different type, TypeScript will show an error.

Please note that the type annotation for Promises is used for the value the Promise is resolved to, not the value it is rejected with. All rejected Promises should be rejected with an `Error` to ensure consistency.
