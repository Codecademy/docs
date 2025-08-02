---
Title: '.entries()'
Description: 'Returns an iterator with key/value pairs for each index in the array.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Iterators'
  - 'JavaScript'
CatalogContent:
  - 'learn-javascript'
  - 'paths/web-development'
---

The **`entries()`** method returns a new array iterator object that contains key/value pairs for each index in the array. This is useful when both the index and value of array elements are needed during iteration.

## Syntax

```pseudo
array.entries()
```

**Parameters:**

The `entries()` method does not take any parameters.

## Return Value

A new `Array Iterator` object containing `[index, value]` pairs

## Example

In this example the `.entries()` method is used to iterate over an array of cat names, accessing both the index and value in each loop:

```js
const cats = ['Peche', 'Moana', 'Pintassilga'];
const iterator = cats.entries();

for (let [index, name] of iterator) {
  console.log(`Cat #${index}: ${name}`);
}
```

The output of this code is:

```shell
Cat #0: Peche
Cat #1: Moana
Cat #2: Pintassilga
```

## Codebyte Example

In this example the loop prints each index and corresponding fruit name by iterating through the key/value pairs returned by `.entries()`:

```codebyte/javascript
const fruits = ['apple', 'banana', 'cherry'];
const iterator = fruits.entries();

for (let [index, fruit] of iterator) {
  console.log(index, fruit);
}
```
