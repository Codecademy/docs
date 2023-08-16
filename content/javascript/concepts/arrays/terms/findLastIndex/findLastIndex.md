---
Title: '.findLastIndex()'
Description: 'Iterates through the array in reverse order and returns the index that passes the provided testing function.'
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

The **`.findLastIndex()`** iterates through the array in reverse order and returns the index that passes the provided testing function. If no item passes, it returns `-1`.

## Syntax

```pseudo
array.findLastIndex((element, index) => {...});
```

The function can be invoked with two arguments:

- `element`: The current element in the iteration.
- `index` (optional): The index of the array element.

## Example

The following examples highlight the difference in how `.findIndex()` and `.findLastIndex()` iterate through an array:

```js
let age = [13, 20, 15, 45, 1, 44, 80];

console.log('findIndex() method: ');

let findIndex = age.find((value, index) => {
  console.log('Checking age index: ', index);
  return value === 80;
});
```

```shell
findIndex() method:
Checking age index: 0
Checking age index: 1
Checking age index: 2
Checking age index: 3
Checking age index: 4
Checking age index: 5
Checking age index: 6
```

```js
// Now .findLastIndex().

age = [13, 20, 15, 45, 1, 44, 80];

console.log('findLastIndex() method: ');

findIndex = age.findLastIndex((value, index) => {
  console.log('Checking age index: ', index);
  return value === 80;
});
```

```shell
findLastIndex() method:
Checking age index: 6
```

> **Note:** If an element is known to be at the end of an array, using `.findLastIndex` can shorten the iteration path.
