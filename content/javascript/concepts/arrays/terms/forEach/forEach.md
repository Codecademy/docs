---
Title: '.forEach()'
Description: 'Loops over the array, passing each item in the array into the callback function provided.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The `.forEach()` array method loops over the array, passing each item in the array into the callback function provided.

## Syntax

```js
array.forEach((value, index, array) => {...});
```

A function can be invoked with three arguments:

- `value`: The value of the array element.
- `index` (optional): The index of the array element.
- `array` (optional): The array itself.

**Note:** Unlike a regular `for` loop, `.forEach()` method does not provide a way to terminate iteration before all elements have been passed to the function.

## Example 1

Logging each value in an array:

```js
['a', 'b', 'c'].forEach((letter) => console.log(letter));
```

The output would be:

```shell
a
b
c
```

## Example 2

Finding the sum of an array:

```js
const values = [7, 17, 34, 41, 22, 5];
let sumOfValues = 0;

values.forEach((value) => (sumOfValues += value));

console.log(sumOfValues);
// Output: 126
```

## Codebyte Example

The following codebyte example multiplies all the values in an array and returns the product:

```codebyte/js
const values = [8, 12, 21, 58, 2, 3];
let productOfValues = 1;

values.forEach((value) => (productOfValues *= value));

console.log(productOfValues);
```
