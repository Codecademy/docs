---
Title: '.reduce()'
Description: 'Combines each element of an array, using a reducer function you specify, and returns a single value.'
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

The `.reduce()` array method combines each element of an array, using a reducer function you specify, and returns a single value.

## Syntax

```js
array.reduce((accumulator, currentValue, index, array) => {...}, initialValue)
```

The reducer function takes four arguments:

- `accumulator` is the returned value from the function.
- `currentValue` is the element being iterated over.
- `index` (optional) is the index of the `currentValue`.
- `array` (optional) is the array the `.reduce()` was called on.

The `accumulator`'s value accumulates with each iteration through the array, resulting in a single value.

`.reduce()` takes two arguments:

- The first, is the reducer function that performs the reduction operation.
- The second (optional) argument is an initial value to pass to the function.

For example:

```js
array.reduce((acc, curr) => acc + curr, 10);
```

## Example 1

Add strings in an array.

```js
const a = ['a', 'b', 'c', 'd', 'e'];

console.log(a.reduce((acc, curr) => acc + curr));
// Output: 'abcde'
```

## Example 2

Add the values of each element together with an initial value.

```js
const a = ['b', 'c', 'd', 'e'];

console.log(a.reduce((acc, curr) => acc + curr, 'a'));
// Output: 'abcde'
```

## Example 3

Subtract numbers in an array with initial value provided:

```js
const monthlyBudget = 3000;
const expenses = [300, 200, 454, 225, 1200];

bankBalance = expenses.reduce((acc, curr) => acc - curr, monthlyBudget);

console.log(bankBalance);
// Output: 621
```
