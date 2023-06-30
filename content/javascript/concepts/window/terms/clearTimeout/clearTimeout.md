---
Title: 'clearTimeout()'
Description: 'Clears a previously scheduled timeout function.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arguments'
  - 'Functions'
  - 'Parameters'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**`clearTimeout()`** is a window method that stops a previously scheduled [`setTimeout()`](https://www.codecademy.com/resources/docs/javascript/window/setTimeout) from running.

## Syntax

```pseudo
clearTimeout(timeoutID);
```

The `clearTimeout()` function receives a timeout ID as its argument, which is returned by the corresponding call of `setTimeout()`, and cancels its execution.

## Example

Below is a example of how `clearTimeout()` works.

```js
const timeoutID = setTimeout(() => {
  console.log('This will be canceled and it will not run.');
}, 3000);

// clearTimeout() will cancel the timeout when invoked
clearTimeout(timeoutID);
```

In the example above, a `setTimeout()` is invoked allowing to schedule the execution of that function after the 3-second delay (3000ms). However, to cancel that schedule timeout before it runs, the `clearTimeout()` is called, passing the timeout ID.
