---
Title: 'Callbacks'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Callback functions are functions that are passed as arguments in other functions. A callback function can then be invoked during the execution of that higher order function (that it is an argument of).

In JavaScript, functions can be passed as arguments because functions are objects.

Suppose there are two functions, `functionA()` and `functionB()`:

```js
function functionA(num1, num2) {
  return num1 + num2;
}

function functionB(callback) {
  return callback(2, 4) * 2;
}

console.log(functionB(functionA)); // Output: 12
```

In the code above, `functionA()` accepts two arguments `num1` and `num2`. The other function, `functionB()`, accepts a single argument `callback`. When `functionB()` is executed, the value of the executed `callback` argument is returned.

In the log statment, we pass `functionA()` as the callback to `functionB()` and 12 is logged to the console.
