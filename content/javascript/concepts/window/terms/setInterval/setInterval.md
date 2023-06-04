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

The **setInterval()** method is used to execute a function repeatedly at specified time intervals.

## Syntax

The `setInterval()` function is used to execute a function repeatedly at a specified interval (delay).

```pseudo
intervalID = setInterval(function, delay, arg0, arg1, /* … ,*/ argN)
```

It takes the following parameters:

- The `function` to be executed or, alternatively, a code snippet.
- The `delay` in milliseconds between each execution. This parameter is optional and if not provided defaults to 0.
- Optional additional arguments (`arg0`, `arg1` ... `argN`), which are passed to the `function` once the timer expires.

After `setInterval()` execution, the `function` argument is first executed only after a given `delay`.

It returns A numeric, non-zero value as `intervalID` of the timer created by the call to `setInterval()`. This `intervalID` value can be passed to `clearInterval()` to cancel the interval.

## Example 1

Following code outputs "Hello" to given number each second.

```js
let i = 0;

setInterval(() => {
  i = i + 1;
  console.log('Hello number ' + i);
}, 1000);
```

## Example 2

Following code outputs current date and time followed by additional arguments.

```js
function myFunc(arg1, argN) {
  console.log(Date(), arg1, argN);
}

setInterval(myFunc, 2000, "first argument", "n-th argument");
```
