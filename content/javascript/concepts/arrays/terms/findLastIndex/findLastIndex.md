---
Title: '.findLastIndex()'
Description: 'Iterates through the array in reverse order and returns the index that passes the provided testing function. If no item passes, returns -1.'
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

The `.findLastIndex()` iterates through the array in reverse order and returns the index that passes the provided testing function. If no item passes, returns -1.

## Syntax

```pseudo 
array.findLastIndex((element, index) => {...});
```

The function can be invoked with two arguments:

- `element`: The current element we are iterating through.
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

## Codebyte Example

```codebyte/js
// This is an example of using .findIndex().

let age = [13, 20, 15, 45, 1, 44, 80]

console.log('findIndex() method: ');

let findIndex = age.find((value, index) => {
    console.log('Checking age index: ', index);
    return value === 80
})


// Now we use .findLastIndex().

age = [13, 20, 15, 45, 1, 44, 80]

console.log('findLastIndex() method: ');

findIndex = age.findLastIndex((value, index) => {
    console.log('Checking age index: ', index);
    return value === 80
})
```

> **Note:** If ever needing to search for an element's index within the array, and knowing the value will be towards the end, using **.findLastIndex** shortens the iteration path.