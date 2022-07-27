---
Title: '.splice()'
Description: 'Modifies an array by inserting, deleting, and/or replacing array elements then returns an array of deleted elements.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Lists'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.splice()`** method modifies an array in place by inserting, removing, and/or replacing array elements then returning an array of removed elements.

## Syntax

```pseudo
array.splice(start, itemCount, item1, item2, ..., itemN);
```

- `start`: The array index at which the insertion and/or removal is to begin.
- `itemCount` (optional): The number of elements in the array to remove beginning at `start`.
- `item1, item2,..., itemN` (optional): The elements that will be inserted into the array at `start`.

If only the start index is provided then it will remove all the elements from `start` to the end of the array.

A negative `start` value indicates an offset from the end of the array.

## Example

The following example adds `'Saturday'` and `'Sunday'` to the end of the `daysOfWeek` array:

```js
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

daysOfWeek.splice(5, 0, 'Saturday', 'Sunday');

console.log(daysOfWeek);
```

The output will look like this:

```shell
[
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]
```

## Codebyte Example

The following example removes the months and then replaces `'Wednesday'` with `'WEDNESDAY'` in the `daysOfWeek` array:

```codebyte/javascript
const daysOfWeek = [
  'Monday',
  'Tuesday',
  'March',
  'April',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

daysOfWeek.splice(2, 2);
daysOfWeek.splice(2, 1, 'WEDNESDAY');

console.log(daysOfWeek);
```
