---
Title: 'setTimeout()'
Description: 'Allows users to execute callbacks after a period of time expressed in milliseconds.'
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

**`setTimeout()`** is a function serviced globally by the window object provided by the user's browser. It allows users to execute callbacks after a period of time expressed in milliseconds.

## Syntax

`setTimeout()` is capable of receiving multiple parameters where the first is a callback function. The second parameter receives a number that represents the time in milliseconds (1s = 1000ms), which defines the time needed for the callback to execute. The third parameter onwards will be the parameters that the callback function would take in case arguments are defined within the callback.

Below are some examples of how `setTimeout()` is composed:

```pseudo
setTimeout(callback)

setTimeout(callback, delay)

setTimeout(callback, delay, param)
```

## Example 1

The following example uses the `setTimeout()` function to set a timer to execute the `sayHello()` function:

```js
// Defining the function
function sayHello() {
  console.log('Hello from Codecademy');
}

// Calling the function using setTimeout.
setTimeout(sayHello, 4000);
```

The output will be displayed after 4 seconds:

```shell
Hello from Codecademy
```

## Example 2

The following example uses [arrow functions](https://www.codecademy.com/resources/docs/javascript/arrow-functions). Instead of declaring the function using the keyword `function`, it is created using `() =>`.

```js
// Defining the function
setTimeout(() => {
  console.log('Hello World from Codecademy');
}, 2000);
```

The output from the arrow function will be displayed after 2 seconds:

```shell
Hello World from Codecademy
```

## Codebyte Example

In the following code example, `setTimeout()` is used to call the `sayHello()` function after 3 seconds.

```codebyte/javascript
// Defining the function
function sayHello(a, b) {
  console.log('hello ' + a);
  console.log('Welcome to ' + b);
}

setTimeout(sayHello, 3000, 'Student', 'Codecademy');

console.log('This message is shown first');
```
