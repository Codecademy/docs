---
Title: '.sort()'
Description: 'Returns an array with its items sorted in place.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Comparison'
  - 'Functions'
  - 'Methods'
  - 'Sort'
  - 'Unicode'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.sort()`** method returns an array with its items sorted in place.

## Syntax

```pseudo
// No parameters
array.sort();

// With optional function
array.sort((firstElement, secondElement) => { /* function body */ };
```

If the `.sort()` method is used with no arguments, all items with `undefined` values are shifted to the end of the array while the remaining items are converted to [strings](https://www.codecademy.com/resources/docs/javascript/strings) and sorted by [Unicode code point value](https://en.wikipedia.org/wiki/Code_point).

An optional function is used to define how items are sorted. This is done by iterating over the `array` and comparing every `firstElement` and `secondElement` in the `/* function body */`.

## Example

In the following example, the `.sort()` method is applied to two arrays, `letters` and `numbers` (a mix of floats and integers):

```js
const letters = ['d', 'b', 'e', 'a', 'c'];
const numbers = [5, 2, 123, 5.01, 43.5];

console.log('Letters: ', letters.sort());
console.log('Numbers: ', numbers.sort());
```

This results in the following output:

```shell
Letters: [ 'a', 'b', 'c', 'd', 'e' ]
Numbers: [ 123, 2, 43.5, 45, 5, 5.01 ]
```

The `letters` were sorted in alphabetical order. The items in `numbers` were sorted based on the leading number in the item's value (e.g., their Unicode value). Sorting numerical values more strictly requires a custom comparison function.

## Codebyte Example

The following example showcases how the optional `callback` argument can be used to sort a `numbers` array in ascending and descending order:

```codebyte/javascript
const numbers = [5, 2, 123, 5.01, 43.5];

const ascending = numbers.sort((a, b) => a - b);
console.log("Ascending order: ", ascending);

const descending = numbers.sort((a, b) => b - a);
console.log("Descending order: ", descending);
```
