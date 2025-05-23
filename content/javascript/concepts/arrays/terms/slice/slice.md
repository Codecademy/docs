---
Title: '.slice()'
Description: 'Returns a shallow copy of a part of an array. It contains references to the sliced elements in the original array, not the elements themselves.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.slice()`** [method](https://www.codecademy.com/resources/docs/javascript/methods) in JavaScript returns a partial copy of an array, otherwise known as a shallow copy, without altering the original array.

A shallow copy can be imagined as a photo of the original array. This photo (the new array) looks exactly like the original, but it's a separate entity.

## Syntax

```pseudo
array.slice(start, end);
```

- `array`: The name of the array to be sliced.
- `start` (optional): The index at which the method will begin copying. If omitted, the process of copying elements starts with the array's first element.
- `end` (optional): The index before which the method will stop copying. The element located at this index is not copied to the new array.

## Example 1: Using the `.slice()` Method With Two Arguments

In the following example, the `.slice()` method creates a new array containing elements from index `1` to index `3` in the original array:

```js
const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const outOfOffice = weekDays.slice(1, 4);

console.log(outOfOffice);
```

The above example produces the following output:

```shell
[ 'Tuesday', 'Wednesday', 'Thursday' ]
```

### Example 2: Using the `.slice()` Method With One Argument

In the next example, the `.slice()` method creates a new array containing all the elements from index `4` to the end of the original array:

```js
const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const weekend = weekDays.slice(4);

console.log(weekend);
```

Here is the output for the above example:

```shell
[ 'Friday', 'Saturday', 'Sunday' ]
```

### Example 3: Using the `.slice()` Method Without Arguments

Using `.slice()` without any arguments creates a complete copy of the original array. This is particularly useful when there is a need to work with a full array but also ensure that the original array remains unchanged. Since this operation creates a shallow copy, any changes to non-primitive elements (like objects or arrays) will reflect in both the original and the copied array:

```js
const originalArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const copyOfArray = originalArray.slice();

console.log(copyOfArray);
```

The above example gives the following output:

```shell
[ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]
```

### Example 4: Using the `.slice()` Method With Negative Arguments

The `.slice()` method also accepts negative indices as arguments. A negative index is treated as an offset from the end of the array.

For example, `-1` refers to the last element of the array, `-2` to the second last, and so on. This feature is particularly useful for selecting elements from the end of an array without needing to calculate their absolute positions:

```js
const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

// Using negative indices to select the weekend days
const weekend = weekDays.slice(-2);

console.log(weekend);

const fruits = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
];

const selectedFruits = fruits.slice(-3, -1);

console.log(selectedFruits);
```

Following is the output for the above example:

```shell
[ 'Saturday', 'Sunday' ]
[ 'Elderberry', 'Fig' ]
```

## Codebyte Example

Here is a codebyte example for the `.slice()` method:

```codebyte/js
let fruits=['Banana','Orange','Grapefruit','Apple','Mango'];

// Two arguments
let citrusFruits = fruits.slice(1,3);
console.log(citrusFruits);

// Negative argument
let lastTwo = fruits.slice(-2);
console.log(lastTwo);

// One argument
let fromOrange = fruits.slice(1);
console.log(fromOrange);

// Zero arguments
let allFruits = fruits.slice();
console.log(allFruits);
```

## Frequently Asked Questions

### 1. Is JavaScript `.slice()` a deep copy?

No, slice() creates a shallow copy, not a deep copy. This means primitive values (like strings, numbers) are copied, but objects, arrays, or functions within the array are copied by reference, not value. So, changes to nested objects in the copied array will reflect in the original array.

### 2. Does `.slice()` copy an array in JavaScript?

Yes, `.slice()` can be used to copy all or part of an array.

- Calling `.slice()` without any arguments (`array.slice()`) returns a copy of the entire array.
- It's commonly used to avoid mutating the original array.

### 3. Which is better: `.slice()` or `.substring()`?

It depends on the data type:

- Use `.slice()` for arrays and strings.
- Use `.substring()` only for strings.

When working with arrays, `.slice()` is the appropriate method. For strings, both `.slice()` and `.substring()` can extract substrings, but `.slice()` is more versatile (it supports negative indices).

### 4. How to pick the last element of an array in JavaScript?

You can use:

```js
const last = array[array.length - 1];
```

Or with `.slice()`:

```js
const last = array.slice(-1)[0];
```

Both return the last element of the array.

### 5. What is the difference between `array.splice()` and `array.slice()`?

| Feature        | `.slice()`                       | `.splice()`                    |
| -------------- | -------------------------------- | ------------------------------ |
| Mutates array? | No (non-destructive)             | Yes (destructive)              |
| Return value   | A new array                      | An array of removed elements   |
| Usage          | To copy/extract without changing | To remove/replace/add elements |

Example illustrating the difference between `.splice()` and `.slice()` is as follows:

```js
let arr = [1, 2, 3, 4];

// slice
let sliced = arr.slice(1, 3); // [2, 3]
console.log(arr); // [1, 2, 3, 4] - unchanged

// splice
let spliced = arr.splice(1, 2); // [2, 3]
console.log(arr); // [1, 4] - original array modified
```
