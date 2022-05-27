---
Title: 'Callbacks'
Description: 'Callback functions are functions that are passed as arguments in other functions. A callback function can then be invoked during the execution of that higher order function (that it is an argument of). In JavaScript, functions can be passed as arguments because functions are objects. Suppose there are two functions, functionA() and functionB(): js function functionA(num1, num2) { return num1 + num2; }'
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

Suppose a function is created which makes a calculation and doubles the results of that calculation:

```js
function doubleResult(num1, num2, calc) {
  return calc(num1, num2) * 2;
}

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(doubleResult(4, 2, add)); // Output: 12
console.log(doubleResult(4, 2, multiply)); // Output: 16
```

In the code above, `doubleResult` accepts three arguments `num1`, `num2`, and `calc`. `num1` and `num2` are the numbers which the user wants to be used in the calculation. `calc` is a function which the user passes as the third argument into the `doubleResult` function and contains the calculation code.

`add` and `multiply` functions are just two basic functions which add OR multiply the two numbers passed into them as arguments.

In the log statments, we envoke `doubleResult()` function and pass two numbers as first and second arguments. We pass `add` OR `multiply`, as the third argument, to `doubleResult()` and 12 OR 16 is logged to the console depending on the third argument.

In the above example `douleResult` is called a **higher order function** while `add` and `multiply` are called **callback functions**.

## Codebyte Example

Here, `createNewArray` function returns a new array based on array and callback function passed to it as arguments.

```codebyte/javascript
function createNewArray(arr, callback) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i]));
  };
  return output;
}

function double(input) { return input * 2; };
function divide(input) { return input / 2; };
function increment(input) { return input + 1 };

const array = [1, 2, 3];

console.log(createNewArray(array, double));
console.log(createNewArray(array, divide));
console.log(createNewArray(array, increment));
```
