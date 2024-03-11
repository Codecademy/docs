---
Title: '.slice()'
Description: 'Creates a partial copy of an array without altering the original array.'
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

The **`.slice()`** method in JavaScript is utilized to select a segment of an array and generate a new array(**Shallow Copy**) from this selection. Importantly, this operation does not modify the original array.

## Understanding Shallow Copy

When you use `.slice()`, you're making what's called a **shallow copy**. Think of it as taking a photo of your original array. This photo (the new array) looks exactly like the original, but it's a separate entity.

Here's the key part: if your original array has primitive type elements like numbers and strings, then changing these items in your new array (the shallow copy) won't affect the original array at all. It's like modifying the photo doesn't change the original scene.

However, if your original array contains objects or arrays, the shallow copy will reference these objects rather than duplicating them. Consequently, modifications to the object elements in the shallow copy will impact the original array's objects. This happens because both the original and the new arrays are linked to the same objects, not separate copies of them.

## Syntax

```js
array.slice(start, end);

array.slice(start);

array.slice();
```

The syntax `array.slice(start, end)` allows specification of the segment of the array to be copied, dictated by `start` and `end` indices:

- `start` (optional): The index at which to begin copying. If omitted, the copy starts from the array's first element.
- `end` (optional): The index before which the method will stop copying. The element located at this index is not copied to the new array.

## Examples

### With Two Arguments

Creates a new array containing elements from index 1 to index 3.

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

const outOutOffice = weekDays.slice(1, 4);

console.log(outOutOffice);
// Output: ['Tuesday', 'Wednesday', 'Thursday']
```

### With One Argument

Creates a new array containing all elements from index 4.

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
// Output: ['Friday', 'Saturday', 'Sunday']
```

### Without Arguments

Using `.slice()` without any arguments creates a complete copy of the original array. This is particularly useful when you want to work with a full array but need to ensure the original array remains unchanged. Since this operation creates a shallow copy, remember that changes to non-primitive elements (like objects or arrays within the array) will reflect in both the original and copied arrays.

```js
const originalArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const copyOfArray = originalArray.slice();

console.log(copyOfArray);
// Output: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
```

### Using Negative Arguments

The `.slice()` method accepts negative indices as arguments. A negative index is treated as an offset from the end of the array.
For example, -1 refers to the last element of the array, -2 to the second last, and so on. This feature is particularly useful for selecting elements from the end of an array without needing to calculate their absolute positions.

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
// Output: ['Saturday', 'Sunday']

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
// Output: ['Elderberry', 'Fig']
```

### Codebyte Example

Here is a codebyte example for slicing the `fruits` array:

```codebyte/js
let fruits=['Banana','Orange','Grapefruit','Apple','Mango'];

// Two arguments:
let citrusFruits = fruits.slice(1,3);
console.log(citrusFruits);

// Negative arguments:
let lastTwo = fruits.slice(-2);
console.log(lastTwo);

// One argument:
let fromOrange = fruits.slice(1);
console.log(fromOrange);

// Zero arguments:
let allFruits = fruits.slice();
console.log(allFruits);
```
