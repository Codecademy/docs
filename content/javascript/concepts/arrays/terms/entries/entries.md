---
title: "Array.prototype.entries()"
slug: "javascript-array-entries"
category: "reference"
tags:
  - javascript
  - method
  - arrays
---

## Description

The `entries()` method returns a new Array Iterator object that contains the key/value pairs for each index in the array. It allows you to loop through both the **index** and the **value** of each element in a structured way.

## Syntax

```javascript
array.entries()
```

## Parameters

This method does **not** take any parameters.

## Return Value

Returns a new Array Iterator object that can be used in a `for...of` loop or manually.

## Examples

```javascript
const cats = ['Peche', 'Moana', 'Pintassilga'];
const iterator = cats.entries();

for (let [index, name] of iterator) {
  console.log(`Cat #${index}: ${name}`);
}

// Output:
// Cat #0: Peche
// Cat #1: Moana
// Cat #2: Pintassilga
```

## Codebyte

```codebyte/javascript
const fruits = ['apple', 'banana', 'cherry'];
const iterator = fruits.entries();

for (let [index, fruit] of iterator) {
  console.log(index, fruit);
}
```

## Notes

- Often used with `for...of` loops.
- Helpful when both the index and value of elements are needed.
- The iterator object returned can also be converted using `Array.from()`.

## See Also

- [Array.prototype.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
- [Array.prototype.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values)
- [MDN Docs - entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
