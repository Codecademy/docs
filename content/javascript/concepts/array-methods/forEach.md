---
Title: ".forEach()"
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

Executes provided function once for each array element.

## Syntax

Note: `forEach()` does not mutate the array on which it is called.

```js
array.forEach((element, index, array) => {...});
```

A function can be invoked with three arguments: the value of the array element (required), the index of the array element and the array itself. 

## Examples

Logging each value in an array:

```js
['a', 'b', 'c'].forEach((letter) => console.log(letter));
// Output: a
// Output: b
// Output: c
```

Finding the sum of an array:

```js
const values = [7, 17, 34, 41, 22, 5];
let sumOfValues = 0;

values.forEach((value) => (sumOfValues += value));

console.log(sumOfValues);
// Output: 126
```
