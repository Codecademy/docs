---
Title: '.reduce()'
Description: 'Executes a reducer function on each element of an array, resulting in a single output value.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Methods'
  - 'JavaScript'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

JavaScript's **`.reduce()`** method is an array method that executes a reducer [function](https://www.codecademy.com/resources/docs/javascript/functions) on each element of an [array](https://www.codecademy.com/resources/docs/javascript/arrays), resulting in a single output value. It processes elements from left to right and accumulates values into a single result, making it ideal for operations like calculating sums, finding maximum values, or transforming arrays into objects.

## Syntax of JavaScript's `reduce()`

```pseudo
array.reduce(callback, initialValue)
```

**Parameters:**

- `callback`: A function that executes on each element in the array. It receives four arguments:
  - `accumulator`: The accumulated value previously returned in the last invocation of the callback
  - `currentValue`: The current element being processed in the array
  - `currentIndex` (optional): The index of the current element being processed
  - `array` (optional): The array reduce was called upon
- `initialValue` (optional): A value to use as the first argument to the first call of the callback

**Return value:**

JavaScript's `.reduce()` method returns the single value that results from running the reducer function to completion over the entire array.

## Example 1: `array.reduce()` for Basic Sum Calculation

This example demonstrates how `array.reduce` can calculate the sum of all numbers in an array:

```js
const numbers = [1, 2, 3, 4, 5];

// Use reduce to calculate the sum
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);
```

This example results in the following output:

```shell
15
```

The callback function adds each `currentValue` to the `accumulator`, starting with an initial value of 0.

## Example 2: Using `array.reduce()` to Calculate Shopping Cart Total

This example shows how `.reduce()` in JavaScript can calculate the total price of items in a shopping cart, a common real-world scenario:

```js
const cartItems = [
  { name: 'Laptop', price: 999.99 },
  { name: 'Mouse', price: 25.5 },
  { name: 'Keyboard', price: 75.0 },
];

// Calculate total price using reduce
const totalPrice = cartItems.reduce((total, item) => {
  return total + item.price;
}, 0);

console.log(`Total cart value: $${totalPrice.toFixed(2)}`);
```

This example results in the following output:

```shell
Total cart value: $1100.49
```

This demonstrates how `.reduce()` in arrays can work with objects to extract and sum specific properties.

## Codebyte Example: `array.reduce()` for Finding Maximum Value

This example illustrates using the `reduce()` array method to find the largest number in an array without using `Math.max()`:

```codebyte/javascript
const scores = [85, 92, 78, 96, 88, 91];

// Find the highest score using reduce
const highestScore = scores.reduce((max, current) => {
  // Return the larger of the two values
  return current > max ? current : max;
});

console.log(`Highest score: ${highestScore}`);
```

Note that when no `initialValue` is provided, the first array element becomes the initial `accumulator` value, and iteration starts from the second element.

## Frequently Asked Questions

### 1. What does `array.reduce()` do in JS?

The `array.reduce()` method in JavaScript processes each element of an array through a callback function, accumulating the results into a single value. It's commonly used for mathematical operations, data transformation, and aggregating array contents.

### 2. Can `.reduce()` return array?

Yes, JavaScript's `.reduce()` method can return an array. The return type depends on what you accumulate in the callback function. You can use reduce to filter, transform, or restructure arrays by returning array values from the reducer function.

### 3. Does `.reduce()` have an index?

Yes, the `.reduce()` JavaScript method provides access to the current index through the third parameter of the callback function (`currentIndex`). This optional parameter contains the index of the element currently being processed, starting from 0 or 1 depending on whether an initial value is provided.
