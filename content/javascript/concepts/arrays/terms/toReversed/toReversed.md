---
Title: '.toReversed()'
Description: 'Reverses the elements within the array and returns a new copy of the array.'
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

The **`.toReversed()`** reverses the elements within the array and returns a new copy of the array.

## Syntax

The `.toReversed()` method does not take any parameters.

```pseudo
array.toReversed();
```

## Example

Reverse the elements within the array without mutating the original array.

```js
const points = [1, 2, 3, 4, 5];
const reversedPoints = points.toReversed();

console.log('Original', points);
console.log('Copy', reversedPoints);
```

```shell
Original [1,2,3,4,5]
Copy [5,4,3,2,1]
```
