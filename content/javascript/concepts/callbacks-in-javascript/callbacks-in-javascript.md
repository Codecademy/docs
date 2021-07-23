---
Title: "Callbacks in JavaScript"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags: 
  - "Functions"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-javascript"
  - "https://www.codecademy.com/learn/paths/web-development"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

Callback functions are functions that are passed as arguments in other functions. A callback function can then be invoked during the execution of that higher order function (that it is an argument of).

In JavaScript, functions can be passed as arguments because functions are objects.

Say we have two functions, `functionA` and `functionB`.

```js
function functionA(num1, num2) {
  return num1 + num2
}

function functionB(callback) {
  return callback(2, 4) * 2
}

console.log(functionB(functionA)) // Output: 12
```

In the code above, `functionA` accepts two arguments `num1` and `num2`. The other function, `functionB`, accepts a single argument `callback`. When `functionB` is executed, the value of the executed `callback` argument is returned. In the the log statment, we pass `functionA` as the callback to `functionB` and 12 is logged to the console.
