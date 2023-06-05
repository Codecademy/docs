---
Title: '.slice()'
Description: 'Returns a shallow copy of part of array, while original array is not modified.'
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

The **`.slice()`** array method returns a shallow copy of all or part of an array without modifying the original. A shallow copy duplicates the contents of an object into a new instance by reference; which is why changes to the copy are not reflected in the original.

## Syntax

The returned array contains the element specified by the first argument and all subsequent elements up to, but not including, the element specified by the second argument.

```js
array.slice(start, end);
```

- `start`: The start index of the slice to be returned (optional)
- `end`: The end index of the slice to be returned (optional)

If only one argument is specified, the returned array contains all elements from the start position to the end of the array.

```js
array.slice(start);
```

If `start` and `end` values are not provided, the method will return a copy of the whole array.

```js
array.slice();
```

### Two Arguments

To create a subarray of `['Tuesday', 'Wednesday', 'Thursday']` from `weekDays` array:

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

### Negative Arguments

A negative index can be used, indicating an offset from the end of the sequence. For example:

```js
array.slice(-3, -1);
```

To create the same subarray as the one above with negative index values:

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

const outOutOffice = weekDays.slice(-6, -3);

console.log(outOutOffice);
// Output: ['Tuesday', 'Wednesday', 'Thursday']
```

### One Argument

To create a subarray of the last two elements from `weekDays`:

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

const weekend = weekDays.slice(5);

console.log(weekend);
// Output: ['Saturday', 'Sunday']
```

### Zero Arguments

To create an identical subarray of `weekDays`:

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

const anotherWeek = weekDays.slice();

console.log(anotherWeek);
// Output: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
```

### Codebyte Example

Below are several examples of slicing the `fruits` array:

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
