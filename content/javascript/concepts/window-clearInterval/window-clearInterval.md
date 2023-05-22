---
Title: 'clearInterval()'
Description: 'Cancels a timer previously stablished by setInterval().'
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

**`clearInterval`** receives a parameter called intervalId which is returned from the previously created `setInterval()` timer.

The provided sample code contains some examples of how `clearInterval` is composed:

```pseudo
clearInterval(intervalID)
```

## Example

```shell
let firstInterval = setInterval(firstTimer, 2000);

function firstTimer() {
  document.body.innerHTML = "Hello world from Javascript";
}

function stopTimer() {
  clearInterval(firstInterval);
}
```
