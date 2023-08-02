# Async/Await

`async/await` is a modern syntax feature of JavaScript, making it easier to write asynchronous code. It was introduced with ECMAScript 2017 (ES8), and allows developers to write promise-based code as if it were synchronous, while still being non-blocking.

## Asynchronous Functions

Asynchronous functions enable handling promises more comfortably. An `async` function returns a promise implicitly, and the resolved value of the promise will be the value returned by the function.

To declare an async function, simply use the `async` keyword before the function declaration:

```async
async function fetchData() {
  // ...
}
```

## The `await` Keyword

Inside an `async` function, you can use the `await` keyword before a promise to wait for its resolution:

```await
async function fetchData() {
  let response = await fetch('<https://api.example.com/data>');
  let data = await response.json();
  return data;
}
```

## Error Handling

Error handling can be done using try-catch blocks within an `async` function:

```try-catch
async function fetchData() {
  try {
    let response = await fetch('<https://api.example.com/data>');
    let data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
```

Read more about [Try/Catch](https://www.codecademy.com/resources/docs/javascript/try-catch).

Note: Using `await` outside an `async` function will lead to a syntax error.

## Concurrency

`async/await` also allows handling multiple promises concurrently. You can use `Promise.all` with `await` to wait for multiple promises:

```concurrency
async function fetchData() {
  let [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);
  // ...
}
```

## Real World Use

With `async/await`, writing complex asynchronous code is cleaner and more readable. It's widely supported in modern browsers and Node.js, making it a robust choice for contemporary web development.

## Further Reading

To get more insights and examples, you can refer to the MDN documentation for [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) and [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await).
