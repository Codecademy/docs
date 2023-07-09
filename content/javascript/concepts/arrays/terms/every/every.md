---
Title: '.every()'
Description: 'The every() function checks if all elements in the array satisfy the condition specified by the given function. It returns a Boolean value.'
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

The **`.every()`** method iterates over each element in an array and stops when a falsy value is returned by the provided callback function. If a falsy value is found, every() returns **`false`**. Otherwise, if the callback function returns a truthy value for all elements, every() returns **`true`**.

## Syntax

```js
`array.every(callbackFn)`

`array.every(callbackFn, thisArg)`
```
The **`.every()`** method needs an **`argument`**, wich is a **`callback function`**. There can be a second argument **`thisArg`**, which is optional and is needed in special cases.

The callback function can contain up to three arguments, wich are:

- **`element`** (the current element, wich is being processed by the actual iteration)
- **`index`** (the position of the current element inside of an array)
- **`array`** (the current array, processed by the .every() method)


## Examples

Check if any value of an array meets a condition:

```js
const findWord = (element, index, array) => element === 'enemy';
const arr = ['My', 'mind', 'is','my', 'friend', '!'];

console.log(arr.every(findWord)) // false

```

Method .every() doesn't read empty slots:

```js
const arr = [5, 9, , 29, 57, 1]
console.log(arr.every((i) => i !== undefined)); // true 

```

## Codebyte Example

The following example checks if all numbers in the array are even:

```
const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every(number => number % 2 === 0);

console.log(allEven); // Output: true
```