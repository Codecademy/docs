---
Title: ".concat()"
Description: "Merges, or concatenates, two or more arrays."
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Arrays"
  - "Methods"
Catalog Content:
  - "https://www.codecademy.com/learn/introduction-to-javascript"
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition 

Merges, or concatenates, two or more arrays.

## Syntax

The `.concat()` method does not change the existing arrays, but instead returns a new array.

```js
array.concat(array2)
```

It can also concatenates more than two arrays:

```js
array.concat(array2, array3, array4)
```

## Examples

Concatenating two arrays:

```js
const grocery1 = ['blueberries', 'eggs', 'artichoke'];
const grocery2 = ['milk', 'cookies'];

const grocery = grocery1.concat(grocery2);

console.log(grocery);
// Output: [ 'blueberries', 'eggs', 'artichoke', 'milk', 'cookies' ]
```

Concatenating three arrays:

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```
