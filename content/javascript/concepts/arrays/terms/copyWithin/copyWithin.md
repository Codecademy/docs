---
Title: '.copyWithin()'
Description: 'Copies part of an array to another location in the same array and returns it without modifying its length.'
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

The `.copyWithin()` copies part of an array to another location in the same array and returns it without modifying its length.

## Syntax

The `.copyWithin()` method is a mutating method. It does not alter the length of the array, but it will change the content of the array and create new properties or delete existing properties, if necessary.

```pseudo
array1.copyWithin(target);
array1.copyWithin(target, start);
array1.copyWithin(target, start, end);
```

### Parameters

- `target`: Zero-based index at which to copy the sequence to. 
  - Negative index counts back from the end of the array — if `target < 0`, `target + array.length` is used.
  - If `target < -array.length`, `0` is used.
  - If `target >= array.length`, nothing is copied. 
  - If `target` is positioned after `start` after normalization, copying only happens until the end of `array.length`(in other words, `copyWithin()` never extends the array).

- `start` (optional): Zero-based index at which to start copying the elements from.
  - Negative index counts back from the end of the array — if `start < 0`, `start + array.length` is used.
  - If `start < -array.length` or `start` is omitted, `0` is used. 
  - If `start >= array.length`, nothing is copied. 

- `end` (optional): Zero-based index at which to end copying elements from. `copyWithin()` copies up to the end of the array if `end` is not included.
  -  Negative index counts back from the end of the array — if `end < 0`, `end + array.length` is used.
  - If `end < -array.length`, `0` is used.
  - If `end >= array.length` or `end` is omitted, `array.length` is used, causing all elements until the end to be copied.
  - If `end` is positioned before or at `start` after normalization, nothing is copied.

## Return value

The modified array.

## Example 1

Using `copyWithin()`

```js
console.log([1, 2, 3, 4, 5].copyWithin(-2));
//output: [1, 2, 3, 1, 2]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
//output:output: [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
//output: [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
//output: [1, 2, 3, 3, 4]
```

## Example 2

Using `copyWithin()` on sparse arrays

```js
console.log([1, , 3].copyWithin(2, 1, 2)); 
//output: [1, empty, empty]

```

## Codebyte Example

Useing the `copyWithin()` method to copy the element at index 1 (the second element, or 'b') to the index 3 (the fourth element).

```codebyte/js
let letters = ['a', 'b', 'c', 'd', 'e'];

letters.copyWithin(3, 1, 2);

console.log(letters);
```
