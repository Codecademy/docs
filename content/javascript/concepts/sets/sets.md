---
Title: 'Set'
Description: 'A set is a special object that stores unique values without a key.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Set'
  - 'Object'
  - 'Collections'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

A set is an object in JavaScript that is a collection of unique values.

A `Set` object can be created with the `Set()` constructor function.

```js
const set = new Set();
```

## Main methods

- `set.add(value)`: Adds a value to the set. If the value is already in the set, it doesn't do anything.
- `set.delete(value)`: Removes the given value, returns `true` if the value existed in the set, otherwise `false`.
- `set.has(value)`: Returns `true` if the value exists in the set, otherwise `false`.
- `set.clear()`: Deletes everything from the set.
- `set.size`: Returns the number of elements in the set.

## Adding value to a `Set`

```js
set.add(1); // Set { 1 }
set.add('text'); // Set { 1, 'text' }
set.add(1); // Still Set { 1, 'text' } because 1 is already in the set
```

## Determining whether a value is in a `Set`

```js
console.log(set.has(1)); // Output: true
console.log(set.has('text')); // Output: true
console.log(set.has(5)); // Output: false
```

## Retrieving the size of a `Set`

```js
console.log(set.size); // Output: 2
```

There are 2 values in `set`: `1` and `text`

## Removing values from a `Set`

```js
console.log(set.delete(1)); // Output: true, Set {'text'}
console.log(fruits.delete(5)); // Output: false, Set {'text'}
```

The first statement returns `true` because `set` contain `1` as a value and has removed it.
The second statement returns `false` because `5` is not a value in `set`.

## Removing everything from a `Set`

```js
set.size; // 1, {'text'}
set.clear(); // undefined, Set {size: 0} in chrome
```

## Initializing a `Set` using iterables (e.g. arrays)

```js
const mySet = new Set([2, true, 2, 'some string', { name: 'John' }]);
console.log(mySet); // Set {2, true, 'some string', {name: 'John'}}
mySet.size; // 4
```

## Codebyte Example

```codebyte/js
// Interesting usage of Sets is that
// we can use Set to filter out duplicate values from an array

const duplicateArray = [1, 2, 1, 5, 1, 7, 2, 1, 8, 1];
const uniqueArray = [...new Set(duplicateArray)];
console.log(uniqueArray) // [1, 2, 5, 7, 8]
```
