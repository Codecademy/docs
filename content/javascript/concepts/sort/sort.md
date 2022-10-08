---
Title: 'Sort'
Description: 'Sorts the contents of an array and returns the sorted array. This sorting is done in place and affects the original array.'
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

In JavaScript, the **`.sort()`** method of an array sorts the contents of an array and returns the sorted array. This sorting is done in place and affects the original array. No copy is made. The default sort is in ascending string order.

The `.sort()` method allows the passing of a comparison function to change the ordering of the sort.

## Syntax

```pseudo
// Perform the default sort
someArray.sort()

// Perform the sort using an arrow function for comparisons
somearray.sort((A, B) => { ... } )

// Perform the sort with an inline compare function
somearray.sort(function compareFn(A, B) { ... })

// Perform the sort with a compare function
somearray.sort(compareFn)
```

- `compareFn` is the optional comparison function.
- `A` is the first array item being compared.
- `B` is the second array item being compared.

## Default Sort Order

If no comparison function are provided, the `.sort()` method will sort the array in ascending string order.

For items that are not strings, `.sort()` will convert them into strings before comparing them. This can lead to unexpected results:

```js
let numbers = [33, 16, 156, 2, 9, 5, 10];

numbers.sort();

console.log(numbers);
// Output: [10, 156, 16, 2, 33, 5, 9]
```

## Comparison Function

The comparison function, if provided, will determine the sorting of all non-`undefined` items in the array. All `undefined` items are sorted to the end of the array, and no `undefined` items are passed to the comparison function.

The comparison function determines the sort order as follows:

For the function `CompareFn(A, B)`:

- If the function returns a value greater than zero, sort `B` before `A`.
- If the function returns a value less than zero, sort `A` before `B`.
- If the function returns a value of zero, the positions of `A` and `B` remain unchanged.
- The function must return the same result for any specific pair of values `A` and `B` provided. Otherwise, the sort order is undefined.

To sort an array in numeric order rather than string order, the following function can be used as long as the array doesn't contain `Infinity` or `NaN`:

```js
function compareFn(A, B) {
  return A - B;
}
```

So we can fix the prior example:

```js
let numbers = [33, 16, 156, 2, 9, 5, 10];

numbers.sort(function compareFn(A, B) {
  return A - B;
});

console.log(numbers);
// Output: [2, 5, 9, 10, 16, 33, 156]
```
