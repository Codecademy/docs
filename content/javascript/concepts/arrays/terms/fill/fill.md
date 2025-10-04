---
Title: '.fill()'
Description: 'Changes all elements within a range of indices in an array to a static value.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'JavaScript'
  - 'Methods'
  - 'Range'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

JavaScript's **`array.fill()`** method changes all elements within a range of indices in an [array](https://www.codecademy.com/resources/docs/javascript/arrays) to a static value. It modifies the original array and returns the modified array, making it a mutating method that provides an efficient way to populate array elements with the same value.

## Syntax

```pseudo
array.fill(value, start, end)
```

**Parameters:**

- `value`: The value to fill the array elements with. All elements in the specified range will be set to this exact value.
- `start` (optional): The zero-based index at which to start filling. If negative, it is treated as `array.length + start`. Defaults to `0`.
- `end` (optional): The zero-based index at which to end filling (exclusive). If negative, it is treated as `array.length + end`. Defaults to `array.length`.

**Return value:**

The `.fill()` method returns the modified array with elements filled according to the specified parameters.

## Example 1: Basic Array Filling Using `array.fill()`

This example demonstrates the fundamental usage of the `.fill()` method by replacing all elements in an array with a single value:

```js
// Create an array with different values
const numbers = [1, 2, 3, 4, 5];

// Fill all elements with the value 0
numbers.fill(0);

console.log(numbers);
```

The output of this code is:

```shell
[0, 0, 0, 0, 0]
```

The `.fill()` method replaces every element in the array with the specified value, transforming the original array `[1, 2, 3, 4, 5]` into `[0, 0, 0, 0, 0]`.

## Example 2: Creating Default User Profiles Using `array.fill()`

This example shows how `.fill()` can be used in a real-world scenario to initialize an array of user profile objects with default values:

```js
// Create an array to hold 3 user profiles
const userProfiles = new Array(3);

// Fill with default user profile objects
userProfiles.fill({
  name: 'New User',
  email: 'user@example.com',
  status: 'inactive',
});

// Update one user's information
userProfiles[0].name = 'John Doe';
userProfiles[0].email = 'john@example.com';

console.log(userProfiles);
```

The output of this code is:

```shell
[
  { name: 'John Doe', email: 'john@example.com', status: 'inactive' },
  { name: 'John Doe', email: 'john@example.com', status: 'inactive' },
  { name: 'John Doe', email: 'john@example.com', status: 'inactive' }
]
```

When using objects with `.fill()`, all array elements reference the same object. Modifying one element affects all elements because they share the same reference.

## Codebyte Example: Using `array.fill()` to Initialize Game Board Sections

This example demonstrates using `.fill()` with start and end parameters to initialize specific sections of a game board array:

```codebyte/javascript
// Create a game board with 10 positions
const gameBoard = new Array(10).fill('empty');

// Fill positions 2-5 with player pieces
gameBoard.fill('player1', 2, 6);

// Fill positions 7-8 with obstacles
gameBoard.fill('obstacle', 7, 9);

console.log(gameBoard);
console.log(`Board length: ${gameBoard.length}`);
```

By specifying start and end indices, the `.fill()` method allows precise control over which elements to modify, making it ideal for initializing specific ranges within larger data structures.

## Frequently Asked Questions

### 1. How to fill an array in JS?

Use the `.fill()` method on an existing array: `array.fill(value)`. For new arrays, create them first with `new Array(length)` or `Array(length)`, then apply `.fill()`: `new Array(5).fill('default')`.

### 2. How to fill array with unique values in JavaScript?

The `.fill()` method creates identical values, not unique ones. For unique values, use `Array.from()` with a mapping function: `Array.from({length: 5}, (_, index) => index + 1)` creates `[1, 2, 3, 4, 5]`.

### 3. Does .fill() change the original array?

Yes, `.fill()` is a mutating method that modifies the original array directly. If you need to preserve the original array, create a copy first using `[...array].fill(value)` or `Array.from(array).fill(value)`.
