---
Title: '.entries()'
Description: 'Returns a new Array Iterator object that contains key/value pairs for each index in the array.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Iterators'
  - 'JavaScript'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

# entries()

The `entries()` method returns a new Array Iterator object that contains the key/value pairs for each index in the array. This method does not modify the original array.

## Syntax

```javascript
array.entries()
```

- **Returns:** A new `Array Iterator` object.
- Each item in the iterator is an array `[index, value]`.
- Can be used with loops like `for...of` or destructured using iterator protocols.

## Example

```javascript
const array = ['a', 'b', 'c'];
const iterator = array.entries();

for (let [index, element] of iterator) {
  console.log(index, element);
}
// Output:
// 0 'a'
// 1 'b'
// 2 'c'
```

## Codebyte

```codebyte/javascript
const fruits = ['apple', 'banana', 'cherry'];
const iterator = fruits.entries();

for (let [index, value] of iterator) {
  console.log(`Index ${index}: ${value}`);
}
```
