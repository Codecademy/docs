---
Title: '.keys()'
Description: 'Returns a new array iterator object containing the keys for each index in the array.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Iterators'
  - 'JavaScript'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.keys()`** method returns a new array iterator object containing the keys (indices) for each index in the array.

## Syntax

```pseudo
array.keys();
```

**Parameters:**

- This method does not take any parameters.

**Return value:**

- A new array iterator object containing the keys (indices) of the array.

## Example 1: Using `.keys()` to Get Array Indices

In this example, the `.keys()` method creates an iterator over the indices of the array:

```js
const cats = ['Sundae', 'Gandalf', 'Campanita'];
const catsIterator = cats.keys();

for (const cat of catsIterator) {
  console.log(cat);
}
```

Here is the output:

```shell
0
1
2
```

## Example 2: Converting the `.keys()` Iterator to an Array

In this example, the spread operator (`...`) with `.keys()` is used to convert the index iterator into a full array of indices:

```js
const colors = ['red', 'black', 'white'];
const indices = [...colors.keys()];

console.log('Array indices: ', indices);
console.log('First index: ', indices[0]);
```

Here is the output:

```shell
Array indices:  [0, 1, 2]
First index:  0
```

## Codebyte Example: Using `.keys()` with Sparse Arrays

In this codebyte example, `.keys()` is used on a sparse array. Even though some elements are missing, `.keys()` still returns all valid indices:

```codebyte/javascript
const sparseArray = ['Lia', , 'ny', , '💖'];
const keys = [...sparseArray.keys()];

console.log('Keys:', keys);
console.log('Length:', sparseArray.length);
```
