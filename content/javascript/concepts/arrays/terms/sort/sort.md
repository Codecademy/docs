---
Title: ".sort()"
Description: "Sorts the elements of an array in place and returns the sorted array."
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



Sorts the elements of an array in place and returns the sorted array.

## Syntax

When `.sort()` is called with no arguments, it sorts the array element in alphabetical order.

```js
array.sort();
```

To sort in an order other than alphabetical, pass an optional comparison function as an argument.

```js
array.sort((element1, element2) => element1 - element2);
```

## Examples

Sort strings in an array alphabetically:

```js
const letters = ['d', 'b', 'e', 'a', 'c'];
const alphabeticalOrder = letters.sort();

console.log(alphabeticalOrder);
// Output: ['a', 'b', 'c', 'd', 'e']
```

Sort numbers in ascending value:

```js
const values = [4, 3, 2, 1];
const ascendingValues = values.sort((a, b) => a - b);

console.log(ascendingValues);
// Output: [1, 2, 3, 4]
```

Sort numbers in descending value:
```js
const values = [1, 2, 3, 4];
const descendingValues = values.sort((a, b) => b - a);

console.log(descendingValues);
// Output: [4, 3, 2, 1]
```
