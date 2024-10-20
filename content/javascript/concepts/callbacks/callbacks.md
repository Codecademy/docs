---
Title: 'Callbacks'
Description: 'A callback is a function passed as an argument to another function.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

A callback is a function passed as an argument to another function. In JavaScript, functions can be passed as arguments because functions are objects.

A callback function gets invoked during the execution of the higher order function (that it is an argument of). They are used in asynchronous operations like network requests or DOM events to avoid waiting for the response until the async process is completed.

## Example

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

console.log(doubleResult(4, 2, add));
console.log(doubleResult(4, 2, multiply));
```

The output will look like this:

```shell
12
16
```

In the code above, `doubleResult` accepts three arguments `num1`, `num2`, and `calc`. `num1` and `num2` are the numbers which the user wants to be used in the calculation. `calc` is a function which the user passes as the third argument into the `doubleResult` function and contains the calculation code.

`add` and `multiply` functions are two basic functions which add or multiply the two numbers passed into them as arguments.

In the log statements, the `doubleResult()` function is invoked with numbers as first and second arguments. The function `add` or `multiply` is passed as the third argument.

In the above example `doubleResult` is called a **higher order function** while `add` and `multiply` are called **callback functions**.

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

## Callbacks in Asynchronous JavaScript

Callbacks are often used in asynchronous operations like fetching data from an API or listening for a DOM Event, where users don’t want to block the main thread while waiting for the response.

### Example

The following example demonstrates how to make an API call using callbacks:

```js
function fetchData(url, callback) {
  var xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
  xhr.open('GET', url, true); // Initialize a request

  xhr.onload = function () {
    if (xhr.status === 200) {
      // Check if the request was successful
      callback(null, xhr.responseText); // Call the callback function with data
    } else {
      callback('Error: ' + xhr.status, null); // Pass error message if request failed
    }
  };

  xhr.onerror = function () {
    callback('Request failed', null); // Handle network errors
  };

  xhr.send(); // Send the request
}

// Callback function to handle the response
function handleResponse(error, data) {
  if (error) {
    console.error(error); // Handle error case
  } else {
    console.log('Data received:', data); // Handle success case
  }
}

// Usage
var url = 'https://jsonplaceholder.typicode.com/posts/1'; // Sample API endpoint
fetchData(url, handleResponse); // Call the fetch function and pass the callback
```

In the code above, the `fetchData` function takes two arguments `url` and `handleResponse`. `url` is the API url from which we have to get the data. `handleResponse` is the callback funtion that gets executed when the network request returns either data or an error.

The output will look like this:

```shell
Data received: {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit..."
}
```

### Codebyte Example

The following codebyte example shows how to make an API call using callbacks:

```codebyte/javascript
const https = require('https');

function fetchData(url, callback) {
  https.get(url, res => {
    let data = '';
    res.on('data', chunk => {
      data += chunk;
    });
    res.on('end', () => {
      data = JSON.parse(data);
      handleResponse(null, data);
    })
  }).on('error', err => {
    handleResponse(err, null);
  });
}

// Callback function to handle the response
function handleResponse(error, data) {
  if (error) {
    console.error('Error', error.message); // Handle error case
  } else {
    console.log('Data received:', data); // Handle success case
  }
}

// Usage
var url = 'https://jsonplaceholder.typicode.com/posts/1'; // Sample API endpoint
fetchData(url, handleResponse);  // Call the fetch function and pass the callback
```

## Callback Hell

When multiple asynchronous operations are nested using callbacks, it can lead to complex code and might lead to errors and difficult to debug, often referred to as _callback hell_:

```js
doSomethingFirst(function () {
  doSomethingSecond(function () {
    doAnotherThird(function () {
      // and so on...
    });
  });
});
```

To avoid this, **promises** or **async/await** can be used, which make the code more readable and maintainable.
