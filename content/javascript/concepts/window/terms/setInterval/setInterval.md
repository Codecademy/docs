---
Title: 'setinterval()'
Description: 'Executes a function repeatedly at specified intervals.'
Subjects:
  - 'Web Development'
Tags:
  - 'Time'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'paths/front-end-engineer-career-path'
  - 'introduction-to-javascript'
---

The **`setInterval()`** method is used to execute a function repeatedly at specified time intervals.

## Syntax

The `setInterval()` function is used to execute a function repeatedly at a specified interval (delay).

```pseudo
intervalID = setInterval(function, delay, arg0, arg1, /* … ,*/ argN)
```

`setInterval()` takes the following parameters:

- The `function` to be executed or, alternatively, a code snippet.
- The `delay` in milliseconds between each execution. This parameter is optional and if not provided defaults to 0.
- Optional additional arguments (`arg0`, `arg1` ... `argN`), which are passed to the `function` once the timer expires.

After `setInterval()` is executed, the `function` argument is executed only after the given `delay`.

It returns a numeric, non-zero value as `intervalID` of the timer created by the call to `setInterval()`. This `intervalID` value can be passed to `clearInterval()` to cancel the interval.

## Example

Following code outputs "Hello" 3 times to given number each second

```js
let i = 1; // Initial count
const iMax = 3; // Max count

// Function passed to `setInterval()` method
function sayHello() {
  console.log('Hello number ' + i);
  i = i + 1;
  if (i > iMax) {
    clearInterval(intervalID); // Canceling the repeating action of the `setInterval()` method
  }
}

const intervalID = setInterval(sayHello, 1000); // Calling the `setInterval()` method
```

Expected output:

```shell
Hello number 1
Hello number 2
Hello number 3
```
