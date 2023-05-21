---
Title: 'setTimeout()'
Description: 'Allows users to execute callbacks after a period of time expressed in milliseconds'
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

**`setTimeout()`** is a function serviced globally by the window object provided by the user's browser.

## Syntax

**`setTimeout()`** is capable of receiving multiple parameters where the first is a callback function, the second parameter receives a number that represents the time in milliseconds **(1s = 1000ms)**, that defines the time needed for the callback to execute, the third parameter onwards will be the parameters that the callback function would take in case arguments are defined within the callback.

The provided sample code contains some examples of how `setTimeout()` is composed:

```pseudo
setTimeout(callback)

setTimeout(callback, delay)

setTimeout(callback, delay, param)
```

## Example 1

The following piece of code will shows an example of the `setTimeout()` implementation:

```shell
// Defining the function
function sayHello() {
  console.log('Hello from Codecademy');
}

// Calling the function using setTimeout.
setTimeout(sayHello, 4000);
```

The output will be displayed after 4 seconds:

```output
Hello from Codecademy
```

## Example

The following example can be done by using arrow functions, in which case, instead of declaring it using the word `function`, we can just create it by using `() =>`, for more information visit [arrow functions](https://www.codecademy.com/resources/docs/javascript/arrow-functions).

```shell
// Defining the function
setTimeout(() => {
  console.log('HelloWorld from Codecademy');
}, 2000);
```

The output from the arrow function will be displayed after 2 seconds:

```shell
Helloworld from Codecademy
```

## Codebyte Example

```shell
// Defining the function
function sayHello(a, b) {
  console.log('hello ' + a);
  console.log('Welcome to ' + b);
}

setTimeout(sayHello, 3000, 'Student', 'Codecademy');

console.log('This message is shown first');
```
