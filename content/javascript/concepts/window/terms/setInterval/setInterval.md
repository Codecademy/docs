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
  - 'front-end-engineer-career-path'
  - 'introduction-to-javascript'
  - 'learn-intermediate-javascript'
---
**setInterval()** method is used to execute a function repeatedly at specified time intervals.
## Syntax
The `setInterval()` function is used to execute a function repeatedly at a specified interval (delay). It takes the following parameters:
1. The function to be executed. Alternatively code snippet.
2. Delay in milliseconds between each execution. This parameter is optional and if not provided defaults to 0.
3. Optional additional arguments, which are passed to the function once the timer expires.

After `setInterval()` execution, the function argument is first executed only after a given delay.
### Returned value
A numeric, non-zero value as `intervalID` of the timer created by the call to `setInterval()`. This `intervalID` value can be passed to `clearInterval()` to cancel the interval.
## Example 1
```
let i = 0;

setInterval(() => {
  i = i + 1;
  console.log('Hello number ' + i);
}, 1000)

// Expected results: outputs "Hello" to given number each second
```
## Example 2
```
function myFunc(arg1, argN) {
  console.log(Date(), arg1, argN)
}

setInterval(myFunc, 2000, "first argument", "n-th argument");

// Expected results: outputs current date and time following with additional arguments
```

