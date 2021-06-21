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

Returns a copy of part of array, or subarray, while original array is not modified.

## Syntax

```js
array.slice(start, end);
```

Its two arguments specify the start and end of the slice to be returned. The returned array contains the element specified by the first argument and all subsequent elements up to, but not including, the element specified by the second argument.

```js
slice(-3, -1);
```

A negative index can be used, indicating an offset from the end of the sequence.

```js
slice();
```

If start and end values are not provided the slicing of array will be from start to end. 

```js
slice(start);
```

If only one argument is specified, the returned array contains all elements from the start position to the end of the array.

## Examples

To create a subarray of `['Tuesday', 'Wednesday', 'Thursday']` from `weekDays` array:

```js
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const subarray1 = weekDays.slice(1, 4);

console.log(subarray1);
// Output: ['Tuesday', 'Wednesday', 'Thursday']
```

To create the same subarray as above with negative index values:
```js
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const subarray2 = weekDays.slice(-6, -3);

console.log(subarray2);
// Output: ['Tuesday', 'Wednesday', 'Thursday']
```

To create an identical subarray of `weekDays`:
```js
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const subarray3 = weekDays.slice();

console.log(subarray3);
// Output: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
```

To create a subarray of `['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']` from `weekDays`:
```js
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const subarray4 = weekDays.slice(2);

console.log(subarray4);
// Output: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
```
