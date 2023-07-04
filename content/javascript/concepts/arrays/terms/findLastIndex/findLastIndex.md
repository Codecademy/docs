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

Find the index with a value of 200 in the array:

```js
const numbers = [10, 42, 53, 12, 45, 66, 33, 6, 10000, 200, 10];

const findIndexResult = numbers.findLastIndex((value, index) => {
  return value === 200;
});

console.log(findIndexResult);
```

This results in the following output:

```shell
9
```

## Example 2

This example showcases the difference in the how `.findIndex()` and `.findLastIndex()` iterate through the array:

```js
let age = [13, 20, 15, 45, 1, 44, 80];

console.log('findIndex() method: ');

let findIndex = age.find((value, index) => {
  console.log('Checking age index: ', index);
  return value === 80;
});
```

```shell
0, 1, 2, 3, 4, 5, 6, 7, 8
```

```js
Now we use .findLastIndex().

age = [13, 20, 15, 45, 1, 44, 80]

console.log('findLastIndex() method: ');

findIndex = age.findLastIndex((value, index) => {
    console.log('Checking age index: ', index);
    return value === 80
})
```

```shell
6
```

> **Note:** If an element is known to be at the end of an array, using `.findLastIndex` can shorten the iteration path.
