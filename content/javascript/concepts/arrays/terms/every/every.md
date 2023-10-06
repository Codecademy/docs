---
Title: '.every()'
Description: 'Checks if all elements in an array satisfy the condition specified by the given function.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Iterators'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.every()`** method iterates over each element in an array and stops when a falsy value is returned by the provided callback function. If a falsy value is found, `.every()` returns `false`. Otherwise, the function will return `true`.

## Syntax

```pseudo
array.every(callbackFn);

array.every(callbackFn, thisArg);
```

The `.every()` method needs an argument `callbackFn`, which is a callback function executed on each element in the list. There can be a second argument `thisArg`, which is optional and is needed in [special cases](https://www.codecademy.com/resources/docs/javascript/this).

The `callbackFn` function can contain up to three arguments, which are:

- `element`: The element being processed in the current iteration.
- `index`: The position of the current element inside of the array.
- `array`: The current array, processed by the `.every()` method.

## Examples

Check if all words in the array have more than 3 characters:

```js
const words = ['apple', 'banana', 'cherry', 'date'];
const allLongWords = words.every((word) => word.length > 3);

console.log(allLongWords);
```

This example results in the following output:

```shell
true
```

Verify whether every element in the array is defined :

```js
const arr = [5, 9, , 29, 57, 1];
console.log(arr.every((i) => i !== undefined));
```

This example results in the following output:

```shell
true
```

> **Note:** `.every()` does not read empty slots.

## Codebyte Example

The following example checks if all numbers in the array are even:

```js
const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every((number) => number % 2 === 0);

console.log(allEven);
```
