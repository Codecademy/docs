---
Title: '.all()'
Description: 'Takes a group of tasks (Promises) and returns a new Promise.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Promise'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The **`.all()`** method in JavaScript Promises helps in working with multiple tasks at once. It takes a group of tasks (Promises) and returns a new Promise.

When using `.all()`, all the tasks start together, and `.all()` waits for all of them to finish. It returns a Promise that contains the results of all the tasks.

If any of the tasks fail (reject), the .all() Promise immediately fails with the reason of the first failed task.

## Syntax

```js
Promise.all(iterableObject);
```

The `iterableObject` is usually an array of Promise objects. If the array is empty, a Promise object that resolves into an empty array will be returned.

## Example

Working with multiple Promise objects to perform parallel API requests:

```js
const fetchUserData = () => {
  return new Promise((resolve) => {
    // Simulating API call
    setTimeout(() => {
      const userData = { id: 1, name: 'John Doe', email: 'john.doe@example.com' };
      resolve(userData);
    }, 2000);
  });
};

const fetchProductData = () => {
  return new Promise((resolve) => {
    // Simulating API call
    setTimeout(() => {
      const productData = { id: 123, name: 'Example Product', price: 19.99 };
      resolve(productData);
    }, 1500);
  });
};

const fetchOrderData = () => {
  return new Promise((resolve) => {
    // Simulating API call
    setTimeout(() => {
      const orderData = { id: 456, products: ['Example Product'], total: 19.99 };
      resolve(orderData);
    }, 1000);
  });
};

Promise.all([fetchUserData(), fetchProductData(), fetchOrderData()])
  .then((results) => {
    const [userData, productData, orderData] = results;
    console.log('User Data:', userData);
    console.log('Product Data:', productData);
    console.log('Order Data:', orderData);
  })
  .catch((error) => {
    console.log('Error occurred:', error);
  });

```
In this example, we have three functions (fetchUserData(), fetchProductData(), and fetchOrderData()) that simulate API calls with a delay using setTimeout(). Each function returns a Promise that resolves with the respective data.

We use Promise.all() to execute these promises in parallel and wait for all of them to resolve. The .then() callback receives an array of resolved values in the same order as the input promises. We destructure the array to extract the user data, product data, and order data, and log them to the console.

The output would be:

```plaintext
User Data: { id: 1, name: 'John Doe', email: 'john.doe@example.com' }
Product Data: { id: 123, name: 'Example Product', price: 19.99 }
Order Data: { id: 456, products: [ 'Example Product' ], total: 19.99 }
```
