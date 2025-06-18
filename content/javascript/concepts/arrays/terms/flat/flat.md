---
Title: 'flat()'
Description: 'Creates a new array with all sub-array elements recursively concatenated into it up to the specified depth.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`flat()`** method creates a new [array](https://www.codecademy.com/resources/docs/javascript/arrays) with sub-array elements concatenated into it up to the specified depth. It is a non-mutating method, meaning it returns a new array without modifying the original one.

## Syntax

```pseudo
array.flat(depth);
```

**Parameters:**

- `depth` (optional): The number of levels to flatten. Defaults to `1`. Use `Infinity` to flatten all nested arrays completely.

**Return value:**

A new array with the sub-array elements flattened up to the specified depth. The original array remains unchanged.

## Example 1: Using `flat()` With Default Value

This example demonstrates using `flat()` with the default depth of 1:

```js
const arr = [1, 2, [3, 4]];
console.log(arr.flat());
```

The output of this code is:

```shell
[1, 2, 3, 4]
```

`arr.flat()` flattens one level deep, so the nested array `[3, 4]` is unpacked into the main array.

## Example 2: Using `flat()` on Deeper Nested Arrays

This example demonstrates using `flat()` with the default depth of 1, with multiple layers of nested sub-arrays:

```js
const arr = [1, 2, 3, [4, 5, [6, 7]]];
console.log(arr.flat());
```

The output of this code is:

```shell
[1, 2, 3, 4, 5, [6, 7]]
```

`arr.flat()` flattens the array one level deep. It unpacks the first-level nested array `[4, 5, [6, 7]]`, moving its elements into the main array. However, the inner array `[6, 7]` remains nested because it is at a deeper level.

## Example 3: Using `flat()` with a Specified Depth

This example demonstrates using `flat()` with a depth of 2, applied to an array with multiple layers of nested sub-arrays:

```js
const arr = [1, 2, 3, [4, 5, [6, 7]]];
console.log(arr.flat(2));
```

The output of this code is:

```shell
[
  1, 2, 3, 4,
  5, 6, 7
]
```

`arr.flat(2)` flattens the array two levels deep. First, it unpacks the first-level nested array `[4, 5, [6, 7]]`, moving its elements into the main array. Then, the inner array `[6, 7]` is unpacked, resulting in a fully flattened array with no nested sub-arrays.

## Example 4: Using `flat()` with `Infinity` Depth

This example demonstrates using `flat()` with a depth of `Infinity`, which fully flattens an array no matter how deeply nested its sub-arrays are:

```js
const arr = [1, [2, [3, [4, [5]]]]];
console.log(arr.flat(Infinity));
```

The output of this code is:

```shell
[1, 2, 3, 4, 5]
```

`arr.flat(Infinity)` recursively flattens the array to its deepest level. All nested sub-arrays, no matter how deeply they are nested, are unpacked into a single flat array. This is useful when the depth of nesting is unknown or highly variable.

## Example 5: Using `flat()` on Sparse Arrays with Empty Slots

This example demonstrates using `flat()` on sparse arrays:

```js
const arr = [1, 2, , [4, , 6], 7];
console.log(arr.flat());
```

The output of the code is:

```shell
[1, 2, 4, 6, 7]
```

`flat()` removes empty slots (holes) in sparse arrays during flattening, treating them as if they don't exist.

## Example 6: Flattening Arrays with Mixed Element Types

The `flat()` method only flattens nested arrays. Elements that are not arrays remain the same:

```js
const arr = [1, 'hello', [2, 3], { a: 4 }];
console.log(arr.flat());
```

The output of the code is:

```shell
[1, "hello", 2, 3, { a: 4 }]
```

## Codebyte Example

The following code demonstrates how different `.flat()` depths affect an array:

```codebyte/js
const arr = [1, 'hello', [2, 3, [4, [5, 'world']]], { a: 4 }];
console.log('depth = default (1) : ', arr.flat());
console.log('depth = 2 : ', arr.flat(2));
console.log('depth = Infinity : ', arr.flat(Infinity));
```
