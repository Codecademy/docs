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

A `Set` object can be created with the `Set()` constructor function.

```js
const mySet = new Set();
```

## Main methods

- `mySet.add(value)`: Adds a value to the set. If the value is already in the set, it doesn't do anything.
- `mySet.delete(value)`: Removes the given value, returns `true` if the value existed in the set, otherwise `false`.
- `mySet.has(value)`: Returns `true` if the value exists in the set, otherwise `false`.
- `mySet.clear()`: Deletes everything from the set.
- `mySet.size`: Returns the number of elements in the set.

## Adding value to a `Set`

```js
mySet.add(1); // Set { 1 }
mySet.add('text'); // Set { 1, 'text' }
mySet.add(1); // Still, Set { 1, 'text' } because 1 is already in the set
```

## Determining whether a value is in a set

```js
console.log(mySet.has(1)); // Output: true
console.log(mySet.has('text')); // Output: true
console.log(mySet.has(5)); // Output: false
```

## Retrieving the size of a set

```js
console.log(mySet.size); // Output: 2
```

There are 2 values in `mySet`: `1` and `text`

## Removing values from a set

```js
console.log(mySet.delete(1)); // Output: true, Set { 'text' }
console.log(mySet.delete(5)); // Output: false, Set { 'text' }
```

The first statement returns `true` because `mySet` contain `1` as a value and has removed it.
The second statement returns `false` because `5` is not a value in `mySet`.

## Removing everything from a set

```js
mySet.size; // 1, Set { 'text' }
mySet.clear(); // undefined, Set { size: 0 } in chrome
```

## Initializing a set using iterables (e.g. arrays)

```js
const newSet = new Set([2, true, 2, 'some string', { name: 'John' }]);
console.log(newSet); // Set { 2, true, 'some string', { name: 'John' } }
newSet.size; // 4
```

## Codebyte Example

An interesting usage of `Set` is that we can use it to filter out duplicate values from an array.

```codebyte/js
const duplicateArray = [1, 2, 1, 5, 1, 7, 2, 1, 8, 1];
const uniqueArray = [...new Set(duplicateArray)];
console.log(uniqueArray) // [1, 2, 5, 7, 8]
```
