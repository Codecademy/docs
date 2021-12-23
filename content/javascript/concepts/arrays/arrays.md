---
Title: 'Arrays'
Description: 'Arrays are lists of ordered, stored data. They can hold items that are of any data type. Arrays are created by using square brackets, with individual elements separated by commas. js // An array containing numbers const numberArray = [0, 1, 2, 3]; // An array containing different data types const mixedArray = [1, chicken, false]; '
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

Arrays are lists of ordered, stored data. They can hold items that are of any data type. Arrays are created by using square brackets, with individual elements separated by commas.

```js
// An array containing numbers
const numberArray = [0, 1, 2, 3];

// An array containing different data types
const mixedArray = [1, 'chicken', false];
```

## Creating an Array

The most straightforward way to create an array is using an array literal.

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

JavaScript array elements are arranged by index values, starting at 0:

- Index 0 has the first element.
- Index 1 has the second element.
- Index 2 has the third element.
- ...and so on.

Individual elements in the array can be accessed using the array name and the element's index surrounded by square brackets.

```pseudo
array[index]
```

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

Any object can be an element of an array. This includes other arrays. When an array has one or more arrays as elements, it is referred to as a "nested array". Accessing the elements of a nested array is similar to accessing the elements of a regular array. It just requires the additional index to reference the element in the inner array.

```js
// Create a nested array
const food = [
  ['Apple', 'Orange', 'Banana'],
  ['Strawberry', 'Blueberry', 'Raspberry'],
  ['Potato', 'Carrot', 'Broccoli'],
];

// Retrieve the object at index 2 of the array at index 1
console.log(food[1][2]);
// Output: Raspberry

// Retrieve the object at index 1 of the array at index 0
console.log(food[0][1]);
// Output: Orange
```

The same process applies to arrays that themselves contain nested arrays. To access the elements in the "bottom" array requires an additional index for each level of nesting.

```js
// More levels of nesting
const nested = [
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

console.log(nested[1][0][2]);
// Output: C

console.log(nested[0][1][1]);
// Output: 4
```
