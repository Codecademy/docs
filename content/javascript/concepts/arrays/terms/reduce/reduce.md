---
Title: '.reduce()'
Description: 'Combines each element of an array, using a specified reducer function, and returns a single value.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.reduce()`** method combines each element of an array, using a specified reducer function, and returns a single value.

## Syntax

```pseudo
array.reduce((accumulator, currentValue, index, array) => {...}, initialValue)
```

`.reduce()` takes two arguments:

- The first, is the reducer function that performs the reduction operation and takes four arguments:
  - `accumulator` is the returned value from the function.
  - `currentValue` is the element being iterated over.
  - `index` (optional) is the index of the `currentValue`.
  - `array` (optional) is the array the `.reduce()` was called on.
- The second (optional) argument is an `initialValue` to pass to the function.

The `accumulator`'s value accumulates with each iteration through the array, resulting in a single value.

## Example

```js
const arrayOne = ['a', 'b', 'c', 'd', 'e'];

// Add strings in an array.
console.log(
  'Adding strings:',
  arrayOne.reduce((acc, curr) => acc + curr)
);

// Add the values of each element together with an initial value.
const arrayTwo = ['b', 'c', 'd', 'e'];

console.log(
  'Adding with initial value:',
  arrayTwo.reduce((acc, curr) => acc + curr, 'a')
);

// Add the values of each object inside an array.
const arrayThree = [{ x: 1 }, { x: 2 }, { x: 4 }];

console.log(
  'Adding object values:',
  arrayThree.reduce((acc, curr) => acc + curr.x, 0)
);
```

This will yield the following output:

```shell
Adding strings: abcde
Adding with initial value: abcde
Adding object values: 7
```

## Codebyte Example

The following example uses `.reduce()` to subtract numbers in an `expenses` array from the initial `monthlyBudget` provided:

```codebyte/javascript
const monthlyBudget = 3000;
const expenses = [300, 200, 454, 225, 1200];

bankBalance = expenses.reduce((acc, curr) => acc - curr, monthlyBudget);

console.log(bankBalance);
```
