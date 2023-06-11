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

## Example 1

Following code outputs "Hello" 3 times to given number each second

```js
let i = 1; // initial count
const iMax = 3; // max count

// function passed to `setInterval()` method
function sayHello() {
  console.log('Hello number ' + i);
  i = i + 1;
  if (i > iMax) {
    clearInterval(intervalID); // canceling the repeating action of `setInterval()` method
  }
}

const intervalID = setInterval(sayHello, 1000); // calling `setInterval()` method with given function and delay and capturing it's identifier `intervalID`
```

Expected output:

```shell
Hello number 1
Hello number 2
Hello number 3
```

## Example 2

Following code outputs current date and time followed by additional arguments.

```js
let i = 1; // initial count
const iMax = 3; // max count

function myFunc(arg1, argN) {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  console.log(timeString, arg1, argN);
  i = i + 1;
  if (i > iMax) {
    clearInterval(intervalID); // canceling the repeating action of `setInterval()` method
  }
}

const intervalID = setInterval(myFunc, 1000, "first argument", "n-th argument"); // calling `setInterval()` method with given function, delay, additional arguments and capturing it's identifier `intervalID`
```

Expected output (example):

```shell
09:45:34 PM first argument n-th argument
09:45:35 PM first argument n-th argument
09:45:36 PM first argument n-th argument
```
