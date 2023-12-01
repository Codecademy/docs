---
Title: 'Functions'
Description: 'Functions are reusable pieces of code that perform tasks, process data, and possibly return values.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**Functions** are one of the fundamental building blocks in JavaScript. A function is a reusable set of statements to perform a task or calculate a value. Functions can be passed one or more values and can return a value at the end of their execution. In order to use a function, it must be defined somewhere in the scope in which it will be utilized.

## Function Declaration

Function declarations are used to create named functions. These functions can be called using their declared name. Function declarations are built from:

- The `function` keyword.
- The function name.
- An optional list of parameters separated by commas enclosed by a set of parentheses `()`.
- A function body enclosed in a set of curly braces `{}`.

The example code provided contains a function named `sum()` that takes in two values and prints their sum:

```js
function sum(number1, number2) {
  console.log(number1 + number2);
}
```

## Calling Functions

Functions can be called, or executed, elsewhere in code using parentheses following the function name. When a function is called, the code inside its function body runs. Arguments are values passed into a function when it is called.

```js
// Defining the function
function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function
console.log(sum(2, 4));
// Output 6
```

> **Note:** If multiple arguments, or a variable number of arguments, are required a function can use a [rest parameter](https://www.codecademy.com/resources/docs/javascript/rest-parameters) to pass an array of values.

## Optional Arguments

In JavaScript functions will run whether or not they have the intended number of arguments. If more than the number required are submitted, the function will use the required number and ignore the rest. If fewer arguments are provided than required, the other values will be set to `undefined`.

```js
console.log(sum(2, 4, 8));
// Output 6

console.log(sum(2));
// Output NaN
```

## Default Values

Functions can also be defined with default values for one, or all of the parameters. If no arguments are passed the default values are used, if arguments are included they will override the default values.

```js
// Defining the function with default values
function sum(num1 = 6, num2 = 1) {
  return num1 + num2;
}

// Calling the function
console.log(sum(8));
// Output 9
```

## Return Keyword

Functions return (pass back) values using the `return` keyword. `return` ends function execution and returns the specified value to the location where it was called.

A common mistake is to forget the `return` keyword, in which case the function will return undefined by default.

```js
// With return
function sum(num1, num2) {
  return num1 + num2;
}

// Without return, so the function doesn't output the sum
function sum(num1, num2) {
  num1 + num2;
}
```

## Arrow Functions

Arrow function expressions were introduced in ES6. These expressions are clean and concise. The syntax for an arrow function expression does not require the `function` keyword and uses a fat arrow `=>` to separate the parameter(s) from the body.

There are several variations of arrow functions:

- Arrow functions with a single parameter do not require `()` around the parameter list.
- Arrow functions with a single expression can use the concise function body which returns the result of the expression without the `return` keyword.

Arrow function with no arguments:

```js
const printHello = () => {
  console.log('hello');
};

printHello();
// Output: hello
```

Arrow function with a single argument:

```js
const checkWeight = (weight) => {
  console.log(`Baggage weight : ${weight} kilograms.`);
};

checkWeight(25);
// Output: Baggage weight : 25 kilograms.
```

Arrow function with two arguments:

```js
const sum = (firstParam, secondParam) => {
  return firstParam + secondParam;
};

console.log(sum(2, 5));
// Output: 7
```

Concise arrow function:

```js
const multiply = (a, b) => a * b;

console.log(multiply(2, 30));
// Output: 60
```

## Anonymous Functions

Anonymous functions in JavaScript do not have a name property. They can be defined using the `function` keyword, or as an arrow function. See the code example for the difference between a named function and an anonymous function.

```js
// Named function
function rocketToMars() {
  return 'BOOM!';
}

// Anonymous function
const rocketToMars = function () {
  return 'BOOM!';
};
```

## Void Functions

JavaScript uses the `void` keyword for denoting expressions that return a value of `undefined`. These expressions can be in the form of variables or functions. This allows functions to work as expressions and not declarations:

```codebyte/javascript
void function printHello() {
  console.log("Hello, Codecademy!");
}();
```

## Video Walkthrough

Watch this video to learn how to define basic functions and invoke them in JavaScript.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RwgA0W0kX-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
