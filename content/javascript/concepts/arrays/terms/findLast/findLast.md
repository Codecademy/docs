---
Title: '.findLast()'
Description: 'Returns the first value found in the array by starting the search from the end of the array to the beginning of the array.'
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

The `.findLast()` array method returns the first value found in the array by starting the search from the end of the array to the beginning of the array.

## Syntax

```js
array.findLast((element, index) => {...});
```

The function can be invoked with two arguments:

- `element`: The current element we are iterating through.
- `index` (optional): The index of the array element.

## Example

Find the value 200 in the array:

```js
const numbers = [10, 42, 53, 12, 45, 66, 33, 6, 10000, 200, 10];

const findNumber = numbers.findLast((value) => {
  return value === 200;
});

console.log(findNumber);
```

This results in the following output:

```shell
200
```

## Codebyte Example

In this example, we will showcase the difference on how .find() and .findLast() search for the age within the array.

```codebyte/js
// This is an example of using .find().

let age = [13,20,15,45,1,44,80]

console.log('find() method: ');

let findResult = age.find((value) => {
    console.log('Checking age: ', value);
    return value === 80
})

console.log(`Oldest age is ${findResult}`)

// Now we use .findLast().

age = [13,20,15,45,1,44,80]

console.log('findLast() method: ');

findResult = age.findLast((value) => {
    console.log('Checking age: ', value);
    return value === 80
})

console.log(`Oldest age is ${findResult}`)

```

> **Note:** If you ever need to search for an element within the array, and you know the value will be towards the end, using .findLast shortens the path to finding the element.
