---
Title: 'Event Loop'
Description: 'The event loop in JavaScript manages the execution of asynchronous callbacks, allowing non-blocking operations and keeping the main thread responsive.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Events'
  - 'Loops'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

JavaScript is a single-threaded language, meaning it executes one task at a time. The **Event Loop** enables JavaScript to handle asynchronous operations efficiently by managing the execution of callbacks without blocking the main thread. It is not a specific piece of JavaScript code but a runtime mechanism for scheduling tasks.

## Working of the Event Loop

Function calls form a call stack, where each function execution is pushed and popped in a Last In, First Out (LIFO) manner. Objects are allocated in the heap, a large, unstructured memory region. The JavaScript engine processes functions until the call stack is empty, after which the event loop begins processing tasks from various queues.

The event loop executes code in the following order:

- **Synchronous code** (executed immediately in the call stack).
- **Microtasks** (e.g., [`Promise.then()`](https://www.codecademy.com/resources/docs/javascript/promise/then), `MutationObserver` - executed before rendering updates).
- **Macrotasks** (e.g., [`setTimeout`](https://www.codecademy.com/resources/docs/javascript/window/setTimeout), [`setInterval`](https://www.codecademy.com/resources/docs/javascript/window/setInterval), `setImmediate`, I/O tasks - executed after microtasks).

Each type of task has its own queue, ensuring efficient scheduling and execution.

## Example

The example below shows that even though the code appears to execute sequentially, synchronous console logs will run first. The `Promise` callback, which is an asynchronous microtask, will execute only after all synchronous code has finished running:

```js
console.log('Start');

Promise.resolve().then(() => {
  console.log('Promise callback comes after');
});

console.log('End');
```

The code above generates:

```shell
Start
End
Promise callback comes after
```
