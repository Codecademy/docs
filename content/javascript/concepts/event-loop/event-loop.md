---
Title: 'Event Loop' 
Description: 'An event loop allows Javascript to handle multiple tasks at once instead of executing one at a time.' 
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

Javascript is a single-threaded language meaning it can only execute one task at a time.  The **Event Loop** makes it possible for Javascript to execute multiple tasks at once.  The Event Loop is not a specific piece of Javascript code, but a runtime mechanism for asynchronous operations. 

## How the Event Loop Works

Function calls form a stack of frames. Objects are allocated to a heap which is a large, unstrucutred region of memory. Functions get processed until the stack is empty.  The event loop then processes messages in the other queues.

The event loop will execute code in order starting with syncronous code first, followed by microtasks and then macrotasks. Each set of tasks has it's own queue for prioritizing execution.

## Example
The exmple below shows that even though the pieces of code look like they will execute in order, the console logs, which are syncronous code will run first and then the promise callback will run. 


```codebyte/js
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise callback comes after");
});

console.log("End");
```
