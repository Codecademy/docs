---
Title: '.forEach()'
Description: 'Loops over a given array, passing each item in the array into the callback function provided.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Values'
  - 'Variables'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`.forEach()`** [method](https://www.codecademy.com/resources/docs/javascript/methods) loops over a given array, passing each item in the array into the [callback function](https://www.codecademy.com/resources/docs/javascript/callbacks) provided. It is a higher-order function that accepts a callback function as an argument.

## Syntax

```pseudo
array.forEach(function(currentValue, index, arr), thisValue);
```

**Parameters:**

- `value`: The value of the array element.
- `index` (Optional): The index of the array element.
- `array` (Optional): The array itself.
- `thisValue` (Optional): Value to use as this when executing callback.

> **Note:** Unlike a regular `for` loop, `.forEach()` method does not provide a way to terminate iteration before all elements have been passed to the function.

## Example 1: Basic Usage of `.forEach()`

This example uses the `.forEach()` method to print each element in an array:

```js
['a', 'b', 'c'].forEach((letter) => console.log(letter));
```

The output would be:

```shell
a
b
c
```

## Example 2: Summing Elements Using `.forEach()`

This example uses the `.forEach()` method to sum the elements in an array:

```js
const values = [7, 17, 34, 41, 22, 5];

let sumOfValues = 0;

values.forEach((value) => (sumOfValues += value));

console.log(sumOfValues);
```

The output would be:

```shell
126
```

## Codebyte Example: Multiplying Elements Using `.forEach()`

This codebyte example uses the `.forEach()` method to multiply the elements in an array:

```codebyte/javascript
const values = [8, 12, 21, 58, 2, 3];

let productOfValues = 1;

values.forEach((value) => (productOfValues *= value));

console.log(productOfValues);
```

## Frequently Asked Questions

### 1. What is the difference between `.map()` and `.forEach()`?

The main difference between `.map()` and `.forEach()` is that `.map()` returns a new array with transformed elements, while `.forEach()` performs operations on each element without returning anything.

Use `.map()` for data transformation and `.forEach()` for side effects like logging or DOM updates. Also, `.map()` is chainable, but `.forEach()` is not.

### 2. Is JavaScript `.forEach()` in order?

Yes, `.forEach()` executes its callback in order, from index `0` to the last element of the array. It is synchronous and does not skip elements (unless the array is modified during iteration).

### 3. Which is faster: `.map()` or `.forEach()`?

In general, `.forEach()` and `.map()` have very similar performance, but:

- `.forEach()` is usually slightly faster in most JavaScript engines.
- `.map()` creates a new array, which introduces a bit more overhead.

However, the performance difference is negligible for small to medium datasets. The key factor should be readability and intent, not raw speed.
