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
- `expression` (optional): A specified condition.
>**Note:** A function can also be passed as an argument when more complex logic is required.
## Example

Find the value 200 in the array:

```js
const numbers = [10, 42, 53, 12, 45, 66, 33, 6, 10000, 200, 10];

const findNumber = numbers.findLast((value) => value == 200);

console.log(findNumber);
```

This results in the following output:

```shell
200
```

> **Note:** If you ever need to search for an element within the array, and you know the value will be towards the end, using .findLast shortens the path to finding the element.
