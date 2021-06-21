---
Title: ".slice()"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Arrays"
  - "Methods"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-javascript"
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition

Returns a shallow copy of part of array, while original array is not modified.

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

If `start` and `end` values are not provided, the slicing of array will be from `start` to the very end of the array.

```js
array.slice();
```

### Two Arguments

To create a subarray of `['Tuesday', 'Wednesday', 'Thursday']` from `weekDays` array:

```js
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const workingRemote = weekDays.slice(1, 4);

console.log(workingRemote);
// Output: ['Tuesday', 'Wednesday', 'Thursday']
```

### Negative Arguments

A negative index can be used, indicating an offset from the end of the sequence. For example:

```js
array.slice(-3, -1);
```

To create the same subarray as above with negative index values:

```js
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const workingRemote = weekDays.slice(-6, -3);

console.log(workingRemote);
// Output: ['Tuesday', 'Wednesday', 'Thursday']
```

### One Argument

To create a subarray of `['Saturday', 'Sunday']` from `weekDays`:

```js
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weekend = weekDays.slice(5);

console.log(weekend);
// Output: ['Saturday', 'Sunday']
```

### Zero Arguments

To create an identical subarray of `weekDays`:

```js
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const anotherWeek = weekDays.slice();

console.log(anotherWeek);
// Output: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
```
