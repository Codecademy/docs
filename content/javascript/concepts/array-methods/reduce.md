---
Title: ".reduce()"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Arrays"
  - "Methods"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-javascript"
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition

Combines each element of an array, using a reducer function you specify, and returns a single value.

## Syntax

The reducer function takes four arguments. The currentValue (required) being iterated over. The returned value is assigned to the accumulator (required). The accumulator's value accumulates with each iteration through the array, resulting in a single value.

```js
array.reduce((accumulator, currentValue, index, array) => {...}, initialValue)
```

`.reduce()` takes two arguments. The first, is the reducer function that performs the reduction operation.

```js
array.reduce((acc, curr) => acc + curr);
```

The second (optional) argument is an initial value to pass to the function.

```js
array.reduce((acc, curr) => acc + curr, 10);
```

## Examples

Add strings in an array. 

```js
const a = ['a', 'b', 'c', 'd', 'e'];

console.log(a.reduce((acc, curr) => acc + curr));
// Output: 'abcde'

```

Add the values of each element together with an initial value.

```js
const a = ['b', 'c', 'd', 'e'];

console.log(a.reduce((acc, curr) => acc + curr, 'a'));
// Output: 'abcde'
```

Subtract numbers in an array with initial value provided:

```js
const monthlyBudget = 3000;
const expenses = [300, 200, 454, 225, 1200];

bankBalance = expenses.reduce((acc, curr) => acc - curr, monthlyBudget);

console.log(bankBalance);
// Output: 621
```