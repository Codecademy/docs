---
Title: ".splice()"
Description: "Modifies array by inserting, deleting, and/or replacing array elements then returns an array of deleted elements."
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Arrays"
  - "Methods"
CatalogContent:
  - "introduction-to-javascript"
  - "paths/front-end-engineer-career-path"
---



Modifies array by inserting, deleting, and/or replacing array elements then returns an array of deleted elements.

## Syntax

```js
array.splice(start);
```

- `start`: Specifies the array position at which the insertion and or deletion is to begin. 

If only the start index is provided then it will remove all the elements from start to the end of the array.

```js
array.splice(start, length);
```

- `start`: The array position.
- `length` (optional): The number of elements in the array to remove from start.

```js
array.splice(start, length, item1, item2, itemN);
```

- `start`: The array position.
- `length` (optional): The number of elements in the array to remove from start.
- `item1` (optional): Further argument may be provided to be inserted at the start position.

## Examples

Remove `'Saturday'` and `'Sunday'` from the `daysOfWeek` array:

```js
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const weekend = daysOfWeek.splice(5);

console.log(weekend);
// Output: ['Saturday', 'Sunday']

console.log(daysOfWeek);
// Output: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
```

Remove the months from the `daysOfWeek` array:

```js
const daysOfWeek = ['Monday', 'Tuesday', 'March', 'April', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

daysOfWeek.splice(2, 2);

console.log(daysOfWeek);
// Output: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
```

Replace `'WEDNESDAY'` with `'Wednesday'` in `daysOfWeek` array :

```js
const daysOfWeek = ['Monday', 'Tuesday', 'WEDNESDAY', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

daysOfWeek.splice(2, 1, 'Wednesday');

console.log(daysOfWeek);
// Output: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
```

Add `'Saturday'` and `'Sunday'` to the end of `daysOfWeek` array :

```js
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

daysOfWeek.splice(5, 0, 'Saturday', 'Sunday');

console.log(daysOfWeek);
// Output: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
```
