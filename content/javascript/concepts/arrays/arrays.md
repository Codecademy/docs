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

In JavaScript, an **Array** is a list of ordered, stored data. It can hold items that are of any data type (e.g. string, boolean, number, etc.) and it can hold different data types together in a single array.

## Syntax

Arrays can be created by using square brackets `[]`, with individual elements separated by commas:

```js
// An array containing numbers
const numberArray = [0, 1, 2, 3];

// An array containing different data types
const mixedArray = [1, 'chicken', false];
```

## Creating an Array

Run the code block below to see how to create an array using an array literal and print it to the console:

```codebyte/javascript
const musicGenres = ['Rock', 'Pop', 'Country'];

console.log(musicGenres);
```

> **Note:** Whitespace is ignored and declarations can span multiple lines.

Arrays can also be created with the `Array` class by using the `new` keyword and passing in the elements as comma-separated arguments:

```js
const musicGenres = new Array('Rock', 'Pop', 'Country');
```

Though, because the outcome is exactly the same, it is preferable to use the literal method for simplicity and execution speed.

An array can also be created as empty and have its values added later through the help of the `.push()` function:

```js
const musicGenres = [];
musicGenres.push('Rock');

console.log(musicGenres); // Output: ['Rock']
```

When creating an array, not only primitive data types can be passed as elements but also declared variables holding these data types. Run the code block below to see how an array can be created using the values of already declared variables.

```codebyte/javascript
const genreOne = 'Rock';
const genreTwo = 'Pop';
const genreThree = 'Country';

const musicGenres = [genreOne, genreTwo, genreThree];
console.log(musicGenres)
```

## Accessing the Elements of an Array

Array elements are ordered by index values, starting at 0:

- Index 0 has the first element.
- Index 1 has the second element.
- Index 2 has the third element.
- Index n-1 has the nth element.

Individual elements in the array can be accessed/changed using the array name and the element's index surrounded by square brackets.

Run the code below to see how the element at index `0` in the `musicGenres` array can be accessed and have its value updated:

```codebyte/javascript
const musicGenres = ['Rock', 'Pop', 'Country'];

// Accesses element at index zero
console.log(musicGenres[0]);

// Assigns new value to the element at index zero
musicGenres[0] = 'Soul';

console.log(musicGenres[0]);
```

Accessing an array using an unused index will return `undefined`. However, a new value can still be assigned to an unused index of an array. When doing so, any gaps in the assigned indices will remain `undefined`.

```js
const musicGenres = ['Rock', 'Pop', 'Country'];
musicGenres[4] = 'Hip Hop'; // a valid assignment

console.log(musicGenres[3]); // Output: undefined
```

## Nested Arrays

Any object can be an element of an array, including other arrays. Arrays with one or more arrays as elements are referred to as "nested arrays". Similar to accessing the elements of a regular array, accessing elements within nested arrays requires the additional indices for referencing inner array elements.

```js
// Create a nested array
const musicGenres = [
  ['Rock', 'Pop', 'Country'],
  ['Soul', 'Hip Hop', 'Reggae'],
  ['Folk', 'Classical', 'Electronic'],
];

// Retrieve the genre at index 2 of the array at index 1
console.log(musicGenres[1][2]);
// Output: Reggae

// Retrieve the genre at index 1 of the array at index 0
console.log(musicGenres[0][1]);
// Output: Pop
```

The same process applies to nested arrays that themselves contain nested arrays. The more "nested" the array, the more indices, or square bracket pairs `[ ]`, are required for accessing their elements.

Run the code below to see how elements in nested arrays can be accessed.

```codebyte/javascript
// More levels of nesting
const nestedArray = [
  [
    ['Rock', 'Pop'],
    ['Country', 'Hip Hop'],
  ],
  [
    ['Soul', 'Classic'],
    ['Electronic', 'Folk'],
  ],
];

console.log(nestedArray[1][0][1]);

console.log(nestedArray[0][1][1]);
```
