---
Title: '.findLast()'
Description: 'Returns the last instance of an element in an array that meets the specified condition.'
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

The `.findLast()` array method returns the last instance of an element in an array that meets the specified condition. The array is searched in reverse: from the end of the array to the beginning.

## Syntax

```pseudo
array.findLast((element, index) => {expression});
```

The function can be invoked with the following arguments:

- `element`: The current element we are iterating through.
- `index` (optional): The index of the array element.
- `expression`: A specified condition or logic.

## Example

Find the value `200` in the array `numbers`:

```js
const numbers = [10, 42, 53, 12, 200, 66, 33, 6, 10000, 200, 10];

numbers.findLast((value, index) => {
  if (value === 200) {
    console.log(`There is an instance of ${value} at index ${index}`);
  }
});
```

This results in the following output:

```shell
There is an instance of 200 at index 9
There is an instance of 200 at index 4
```

> **Note:** If an element is known to be towards the end of an array, using `.findLast()` can shorten the path to finding the element.
