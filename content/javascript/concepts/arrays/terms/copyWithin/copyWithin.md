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

The **`.copyWithin()`** method returns a shallow copy of an array where one subarray replaces another part without modifying the original length. However, since it is a mutating method, `.copyWithin()` will change the array's contents and create or delete properties if necessary.

## Syntax

```pseudo
myArray.copyWithin(target);
myArray.copyWithin(target, start);
myArray.copyWithin(target, start, end);
```

The following parameters can be applied to the `.copyWithin()` method:
- `target` (required): A zero-based index to copy the sequence to. 
  - If  `target` is negative, it counts back from `myArray.length` and `target + myArray.length` is used.
  - If `target` is < `myArray.length * -1`, `0` is used.
  - If `target` is >= `myArray.length`, nothing is copied. 
  - If, after `myArray` is normalized, the `target` is positioned after `start`, copying only occurs until the end of `myArray.length`(i.e., `copyWithin()` never extends the `myArray`).
- `start` (optional): A zero-based index at which to start copying the elements from.
  - If `start` is negative, it counts back from the end of `myArray` and `start + myArray.length` is used.
  - If `start` < `myArray.length * -1` or it is omitted, `0` is used. 
  - If `start` >= `myArray.length`, nothing is copied. 
- `end` (optional):  A zero-based index at which to end copying elements from (non-inclusive).
  - If `end` is negative, it counts back from the end of `myArray` and `end + myArray.length` is used.
  - If `end` < `myArray.length * -1`, `0` is used.
  - If `end` >= `myArray.length` or it is omitted, `myArray.length` is used and all elements until the end are copied.
  - If `end` is positioned before or at `start` after normalization, nothing is copied.

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

Using the `copyWithin()` method to copy the element at index 1 (the second element, or 'b') to the index 3 (the fourth element).

```codebyte/javascript
let letters = ['a', 'b', 'c', 'd', 'e'];

letters.copyWithin(3, 1, 2);

console.log(letters);
```
