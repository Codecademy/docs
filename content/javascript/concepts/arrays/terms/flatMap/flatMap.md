---
Title: '.flatMap()'
Description: 'Returns a new array formed by applying a callback function to each element of the original array, then flattening the result by one level.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'JavaScript'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`.flatMap()`** method returns a new [array](https://www.codecademy.com/resources/docs/javascript/arrays) formed by applying a callback function to each element of the original array, then flattening the result by _one level_. It is a combination of the [`.map()`](https://www.codecademy.com/resources/docs/javascript/arrays/map) and [`.flat()`](https://www.codecademy.com/resources/docs/javascript/arrays/flat) methods and is slightly more efficient than calling them separately, as it performs both operations (mapping and flattening) in a single step.

> **Note:** To flatten more than one level of nesting, chain the `.flat()` method after `.flatMap()`, as `.flatMap()` only flattens one level.

## Syntax

```pseudo
array.flatMap(callbackFunc, thisArg);
```

**Parameters:**

- `callbackFunc`: A function to execute on each element in the array. It takes the following arguments:
  - `element` (required): The current element being processed.
  - `index` (optional): The index of the current element being processed.
  - `array` (optional): The array `.flatMap()` was called upon.
- `thisArg` (optional): A value to use as `this` when executing `callbackFunc`.

**Return value:**

Returns a new array formed by applying the callback function to each element of the original array, then flattening the result by one level.

## Example 1: Creating a words array

In this example, the `words` variable contains every word from the `phrases` array, using a single argument for the callback function. Each element is split using a space character as the separator (creating sub-arrays of words) and then flattened one level deep:

```js
const phrases = ['Hello world', 'JavaScript is awesome', 'flatMap is useful'];

const words = phrases.flatMap((phrase) => phrase.split(' '));

console.log(words);
```

The code will produce this output:

```shell
[
  'Hello',      'world',
  'JavaScript', 'is',
  'awesome',    'flatMap',
  'is',         'useful'
]
```

## Example 2: Printing every argument

This example prints every argument of the callback function and the result array. The `array` argument is converted to a [`JSON`](https://www.codecademy.com/resources/docs/javascript/json) string using the [`.stringify()`](https://www.codecademy.com/resources/docs/javascript/json/stringify) method for clarity:

```js
const numbers = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8],
];

const result = numbers.flatMap((element, index, array) => {
  console.log(
    `Element: ${element}, Index: ${index}, Original Array: ${JSON.stringify(
      array
    )}`
  );
  return element;
});

console.log(''); //Line Break
console.log(result);
```

The code will produce this output:

```shell
Element: 1,2,3, Index: 0, Original Array: [[1,2,3],[4,5],[6,7,8]]
Element: 4,5, Index: 1, Original Array: [[1,2,3],[4,5],[6,7,8]]
Element: 6,7,8, Index: 2, Original Array: [[1,2,3],[4,5],[6,7,8]]

[
  1, 2, 3, 4,
  5, 6, 7, 8
]
```

## Codebyte Example

In this codebyte example, the variable `largeArray` contains a list of one million numbers, created using the `.from()` method of the array instance. The `console.time()` and `console.timeEnd()` methods are used to measure how long a block of code takes to execute:

```codebyte/js
const largeArray = Array.from({ length: 1000000 }, (value, index) => index);

console.time('flatMap');
const resultFlatMap = largeArray.flatMap((num) => [num, num * 2]);
console.timeEnd('flatMap');

console.time('map + flat');
const resultMapFlat = largeArray.map((num) => [num, num * 2]).flat();
console.timeEnd('map + flat');
```

The difference is that `.flatMap()` is faster because it performs mapping and flattening in a single pass, while `.map()` followed by `.flat()` performs two separate operations, making it slightly slower.
