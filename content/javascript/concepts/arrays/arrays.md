---
Title: 'Arrays'
Description: 'Arrays are lists of ordered, stored data that can be of any data type.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Arrays are lists of ordered, stored data. They can hold items that are of any data type.

## Syntax

Arrays can be created by using square brackets, with individual elements separated by commas.

```js
// An array containing numbers
const numberArray = [0, 1, 2, 3];

// An array containing different data types
const mixedArray = [1, 'chicken', false];
```

Another way to creating a new instance of the `Array` class and passing the elements as a comma-separated list of arguments:

```js
const classArray = new Array(0, 1, 2, 3);
```

## Creating an Array

The most straightforward way to create an array is using an array literal as in the above example.

```js
const fruit = ['Apple', 'Orange', 'Banana'];
```

Whitespace is ignored and declarations can span multiple lines.

Arrays can also be created with the `Array` class by using the `new` keyword and passing in the elements as arguments:

```js
const fruit = new Array('Apple', 'Orange', 'Banana');
```

Though, because the effect is exactly the same, it is preferable to use the literal method for simplicity and execution speed.

## Accessing the Elements of an Array

Array elements are ordered by index values, starting at 0:

- Index 0 has the first element.
- Index 1 has the second element.
- Index 2 has the third element.
- Index n-1 has the nth element.

Individual elements in the array can be accessed using the array name and the element's index surrounded by square brackets.

This code accesses the value of the first element in the `fruit` array:

```js
const fruit = ['Apple', 'Orange', 'Banana'];

console.log(fruit[0]);
// Output: Apple
```

Array elements can be changed by accessing the element and assigning a new value to it.

```js
const fruit = ['Apple', 'Orange', 'Banana'];

fruit[1] = 'Mango';

console.log(fruit[1]);
// Output: Mango
```

Accessing an array using an unused index will return `undefined`. However, a new value can still be assigned to an unused index of an array. When doing so, any gaps in the assigned indices will remain `undefined`.

```js
const fruit = ['Apple', 'Orange', 'Banana'];

fruit[4] = 'Mango'; // a valid assignment

console.log(fruit[3]);
// Output: undefined
```

## Nested Arrays

Any object can be an element of an array, including other arrays. Arrays with one or more arrays as elements are referred to as "nested arrays". Similar to accessing the elements of a regular array, accessing elements within nested arrays requires the additional indices for referencing inner array elements.

```js
// Create a nested array
const food = [
  ['Apple', 'Orange', 'Banana'],
  ['Strawberry', 'Blueberry', 'Raspberry'],
  ['Potato', 'Carrot', 'Broccoli'],
];

// Retrieve the food string at index 2 of the array at index 1
console.log(food[1][2]);
// Output: Raspberry

// Retrieve the food string at index 1 of the array at index 0
console.log(food[0][1]);
// Output: Orange
```

The same process applies to nested arrays that themselves contain nested arrays. The more "nested" the array, the more indices, or bracket pairs `[ ]`, are required for accessing their elements.

```codebyte/js
// More levels of nesting
const nestedArray = [
  [
    [1, 2],
    [3, 4],
    [5, 6],
  ],
  [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
  ],
];

console.log(nestedArray[1][0][2]);
// Output: C

console.log(nestedArray[0][1][1]);
// Output: 4
```
