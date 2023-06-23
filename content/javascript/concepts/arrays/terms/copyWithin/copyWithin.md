---
Title: '.copyWithin()'
Description: 'Returns a mutated array with part of it copied to another location in the same array, and its length unchanged.'
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
  - If `target` is negative, it counts back from `myArray.length` and `target + myArray.length` is used.
  - If `target` is < `myArray.length * -1`, `0` is used.
  - If `target` is >= `myArray.length`, nothing is copied.
  - If, after `myArray` is normalized, the `target` is positioned after `start`, copying only occurs until the end of `myArray.length`(i.e., `.copyWithin()` never extends the `myArray`).
- `start` (optional): A zero-based index at which to start copying the elements from.
  - If `start` is negative, it counts back from the end of `myArray` and `start + myArray.length` is used.
  - If `start` < `myArray.length * -1` or it is omitted, `0` is used.
  - If `start` >= `myArray.length`, nothing is copied.
- `end` (optional): A zero-based index at which to end copying elements from (non-inclusive).
  - If `end` is negative, it counts back from the end of `myArray` and `end + myArray.length` is used.
  - If `end` < `myArray.length * -1`, `0` is used.
  - If `end` >= `myArray.length` or it is omitted, `myArray.length` is used and all elements until the end are copied.
  - If `end` is positioned before or at `start` after normalization, nothing is copied.

### Sparse Arrays

If the `.copyWithin()` method is applied to a sparse array that contains empty slots, it will populate them with an `undefined` value:

```js
console.log([1, , 3].copyWithin(2, 1, 2));
// Output: [1, undefined, undefined]
```

## Example

The following examples has a few calls to the `.copyWithin()` method, applying combinations of the available parameters:

```js
// copy elements starting from the second-to-last index
console.log([1, 2, 3, 4, 5].copyWithin(-2));

// copy to index 0 all elements index 3 to the end
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));

// copy to index 0 the element at index 2
console.log([1, 2, 3, 4, 5].copyWithin(0, 2, 3));

// copy to second-to-last index elements starting from index 2 until end of array
console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
```

This will produce the following output:

```shell
[ 1, 2, 3, 1, 2 ]
[ 4, 5, 3, 4, 5 ]
[ 3, 2, 3, 4, 5 ]
[ 1, 2, 3, 3, 4 ]
```

## Codebyte Example

The following example uses the `.copyWithin()` method to copy the second element at index 1 ('b') to the fourth element at index 3:

```codebyte/javascript
let letters = ['a', 'b', 'c', 'd', 'e'];

letters.copyWithin(3, 1, 2);

console.log(letters);
```
