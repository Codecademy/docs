---
Title: '.some()'
Description: 'Runs a conditional through an array and returns a boolean if any value fulfills the conditional.'
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

The **`.some()`** method tests whether at least one item in the array passes the test implemented by the provided function. It returns true if any item in the array succeeds the test, otherwise it returns false.

## Syntax

```pseudo
array.some(callback);
```

- `callback`: A function that takes in an element as a parameter. The element is then determined if it passes or fails the test.

## Example

In the example below the `.some()` function is used to determine if any of the values in the array are even (divisible by 2).

```js
const numbers = [2, 4, 5, 7, 8];
const callback = (element) => element % 2 === 0;

console.log(numbers.some(callback));
```

This example results in the following output:

```shell
true
```

## Codebyte Example

Below are two examples of running the `.some()` function on the `numbers` array:

```codebyte/js
let numbers=[1, 2, 3, 4, 5, 6];

let test1 = (element) => element % 3 === 0;
let isDivisibleByThree = numbers.some(test1);
console.log(isDivisibleByThree);

let test2 = (element) => element % 7 === 0;
let isDivisibleBySeven = numbers.some(test2);
console.log(isDivisibleBySeven);
```
