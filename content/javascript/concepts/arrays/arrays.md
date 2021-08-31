---
Title: "Arrays"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags: 
  - "Arrays"
  - "Data Types"
CatalogContent:
  - "introduction-to-javascript"
  - "paths/front-end-engineer-career-path"
---

Arrays are lists of ordered, stored data. They can hold items that are of any data type. Arrays are created by using square brackets, with individual elements separated by commas.

```js
// An array containing numbers
const numberArray = [0, 1, 2, 3];
 
// An array containing different data types
const mixedArray = [1, 'chicken', false];
```

## Creating an Array

Using an array literal is the easiest way to create a JavaScript array.

```js
var cars = ['Saab', 'Volvo', 'BMW'];
```

Spaces and line breaks are not important. A declaration can span multiple lines:

```js
var cars = [
  'Saab',
  'Volvo',
  'BMW'
];
```

Using the JavaScript Keyword `new` is another way to create an array.

```js
var cars = new Array('Saab', 'Volvo', 'BMW');
```

## Access the Elements of an Array

JavaScript array elements are arranged by index values, starting at 0:

- Index 0 has the first element.
- Index 1 has the second element.
- Index 2 has the third element.
- ...and so on.

Elements can be accessed by their index using the array name and the index surround by square brackets.

```pseudo
array[index]
```

This statement accesses the value of the first element in the `cars` array:

```js
var cars = ['Saab', 'Volvo', 'BMW'];

console.log(cars[0]);
// Output: Saab
```

Array items can be changed by accessing the item and assigning it to a new value.

```js
var cars = ['aab', 'Volvo, 'BMW'];

cars[1] = 'Tesla';

console.log(cars[1]);
// Output: Tesla
```
