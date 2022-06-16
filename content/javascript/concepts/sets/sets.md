---
Title: 'Sets'
Description: 'A Set is a special object that stores unique values without a key.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Sets'
  - 'Objects'
  - 'Collections'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

A `Set` is an object in JavaScript that is a collection of unique values.

## Syntax

```pseudo
const mySet = new Set();
```

A `Set` object can be created with the `Set()` constructor function.

## Initializing With Iterable Objects

Sets can also be created with [iterators](https://www.codecademy.com/resources/docs/javascript/iterators) passed to the `Set()` constructor, as shown below:

```js
const newSet = new Set([2, true, 2, 'some string', { name: 'John' }]);

console.log(newSet);
console.log(newSet.size);
```

The output will look like this:

```shell
Set(4) { 2, true, 'some string', { name: 'John' } }
4
```

## Codebyte Example

An interesting usage of `Set` is that we can use it to filter out duplicate values from an array:

```codebyte/javascript
const duplicateArray = [1, 2, 1, 5, 1, 7, 2, 1, 8, 1];
const uniqueArray = [...new Set(duplicateArray)];
console.log(uniqueArray);
```
