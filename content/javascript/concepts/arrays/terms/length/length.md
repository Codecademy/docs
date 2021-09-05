---
Title: '.length'
Description: 'Returns the specific number of elements in the array.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Properties'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The `.length` array property returns the specific number of elements in the array.

## Syntax

```js
array.length;
```

Setting the length with a positive value that is lower than the actual array length will delete items at end.

## Examples

```js
const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const lengthOfWeek = daysOfWeek.length;

console.log(lengthOfWeek);
// Output: 7
```

Iterating over an array using length:

```js
const numbers = [10, 20, 30, 40, 50];

const length = numbers.length;

for (let i = 0; i < length; i++) {
  numbers[i] *= 2;
}

console.log(numbers);
// Output: [20, 40, 60, 80, 100]
```

Shortening an array:

```js
const colors = ['purple', 'orange', 'yellow', 'green', 'blue'];

console.log(colors.length);
// Output: 5

colors.length = 3;

console.log(colors);
// Output: ['purple', 'orange', 'yellow']
```
