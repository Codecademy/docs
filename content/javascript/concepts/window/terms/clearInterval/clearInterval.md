---
Title: 'clearInterval()'
Description: 'Cancels a timer previously established by setInterval().'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**`clearInterval()`** is a window method used to shut down the loop-calling process of a `setInterval()` execution when it must be stopped or aborted.

## Syntax

`clearInterval()` receives a parameter called `intervalId` which is returned from the previously created `setInterval()` timer.

The below is an example of how `clearInterval()` is composed:

```pseudo
clearInterval(intervalID)
```

## Example

The following code demonstrates the application of `clearInterval()` to cancel a previously added `setInterval()` call.

```js
let firstInterval = setInterval(firstTimer, 2000);

function firstTimer() {
  document.body.innerHTML = 'Hello world from Javascript';
  clearInterval(firstInterval);
}

firstTimer();
```

In the example above, a 2-second interval is added using `setInterval()`, but in the function call, `clearInterval()` cancels it.
