---
Title: 'setTimeout'
Description: 'setTimeout is a function serviced globally by the window object provided by the user's browser.'
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

**setTimeout** is a function serviced globally by the window object provided by the user's browser, it is not part of JavaScript because it is not a JavaScript function.
## Syntax

 **setTimeout** is capable of receiving multiple parameters where the first is a callback function, the second parameter receives a number that represents the time in milliseconds **(1s = 1000ms)**, that defines the time needed for the callback to execute, the third parameter onwards will be the parameters that the callback function would take in case arguments are defined within the callback.

The provided sample code contains some examples of how setTimeout is composed:

```js
setTimeout(function)

setTimeout(function, delay)

setTimeout(function, delay, param)
```

## Usage example

The following pieces of code will show some examples about the setTimeout implementation:

```js
// Defining the function

function sayHello(){

    console.log('Hello from Codecademy');
}

// Calling the function using setTimeout.

setTimeout(sayHello, 4000);
```

As we're calling our function with `setTimeout` the output will be displayed after 4 seconds:

```output
Hello from Codecademy
```

An example based on [Arrow Functions](https://www.codecademy.com/resources/docs/javascript/arrow-functions) would be:

```js
// Defining the function

setTimeout(() => {

  console.log('HelloWorld from Codecademy');

}, 2000);
```

As we're calling our function with `setTimeout` the output will be displayed after 2 seconds:

```output
HelloWorld from Codecademy
```

##### Example using a parameters

```js

// Defining the function

function sayHello(a, b) {

    console.log('hello ' + a);
    console.log('Welcome to ' + b);
}

setTimeout(sayHello, 3000, 'Student', 'Codecademy');

console.log('This message is shown first');

```

As we're calling our function with `setTimeout` the output will be displayed after 3 seconds:

```output
This message is shown first
hello Student
Welcome to Codecademy
```