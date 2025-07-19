---
Title: '.keys()'
Description: 'Returns a new Array Iterator object that contains the keys (indices) for each index in the array.'
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

The **`.keys()`** method returns a new Array Iterator object that contains the keys (indices) for each index in the array.

## Syntax

```pseudo
array.keys();
```

The `.keys()` method takes no parameters and returns an Array Iterator object containing the indices of the array. When used on sparse arrays, iterates empty slots as if they have the value _undefined_.

## Examples

Using `.keys()` to get array indices:

```js
const cats = ['Sundae', 'Gandalf', 'Campanita'];
const catsIterator = cats.keys();

for (const cat of catsIterator) {
  console.log(cat);
}
```

This produces the following output:

```shell
0
1
2
```

Converting the iterator to an array using spread operator:

```js
const colors = ['red', 'black', 'white'];
const indices = [...colors.keys()];

console.log('Array indices: ', indices);
console.log('First index: ', indices[0]);
```

This produces the following output:

```shell
Array indices:  [0, 1, 2]
First index:  0
```

## Codebyte Example

The following example demonstrates using `.keys()` with sparse arrays:

```codebyte/javascript
const sparseArray = ['Lia', , 'ny', , '💖'];
const keys = [...sparseArray.keys()];

console.log('Keys:', keys);
console.log('Length:', sparseArray.length);
```
