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

## Array Methods

Introduce some commonly used array methods in JavaScript, such as push, pop, shift, unshift, slice, splice, concat, and indexOf. Provide examples of how each method works and when to use them.

```js
// Example: Using array methods
const numbers = [1, 2, 3, 4, 5];

// Adding elements to the end of the array
numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// Removing the last element from the array
numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Adding elements to the beginning of the array
numbers.unshift(0);
console.log(numbers); // Output: [0, 1, 2, 3, 4, 5]

// Removing the first element from the array
numbers.shift();
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Slicing the array to create a new array
const slicedArray = numbers.slice(1, 4);
console.log(slicedArray); // Output: [2, 3, 4]
```

## Array Iteration

Introduce array iteration methods like forEach, map, filter, and reduce. Provide examples to demonstrate how these methods can be used for various tasks.

```js
// Example: Using array iteration methods
const numbers = [1, 2, 3, 4, 5];

// Iterating over each element using forEach
numbers.forEach((num) => {
  console.log(num * 2);
});

// Creating a new array with map
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Filtering elements based on a condition
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Reducing the array to a single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15
```
