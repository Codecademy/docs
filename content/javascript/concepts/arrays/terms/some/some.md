---
Title: '.some()'
Description: 'Run a conditional through an array and returns a boolean if any value fulfills the conditional.'
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

The **`.some()`** method tests whether at least one item in the array passes the test implemented by the provided function. It returns true if any item in the array succeeds the test, otherwise it reuturns false.

## Syntax

```js
array.some(callback);
```

- `callback`: A function that takes in an element as a parameter. The element is then determined if it passes or fails the test.

## Example

Pass in a callback function as a conditional check.

```js
const numbers = [2, 4, 5, 7, 8];
const callback = (element) => element % 2 === 0

console.log(numbers.some(callback))
// Returns true
```

```js
const numbers = [2, 4, 5, 7, 8];
const callback = (element) => element % 6 === 0

console.log(numbers.some(callback))
// Returns false
```

### Codebyte Example

Below are several examples of running the some method through the `numbers` array:

```codebyte/js
let numbers=[1, 2, 3, 4, 5, 6];

// Returns true
let callback = (element) => element % 3 === 0;
let isDivisibleByThree = numbers.some(callback);
console.log(isDivisibleByThree);

// Returns false
let callback = (element) => element % 7 === 0;
let isDivisibleBySeven = numbers.some(callback);
console.log(isDivisibleBySeven);
```
