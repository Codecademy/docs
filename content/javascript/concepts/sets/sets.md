---
Title: 'Set'
Description: 'Set is a special object without keys which can only store unique values.'
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

`Set` is an object in JavaScript that is a collection of unique values.

A set object can be created with the `Set()` constructor function.

```js
const set = new Set();
```

## Main methods

- `set.add(value)` - adds a value to the set. If the value is already in the set, it doesn't do anything.
- `set.delete(value)` - removes the given value, returns `true` if the value existed in the set, otherwise `false`.
- `set.has(value)` - returns `true` if the value exists in the set, otherwise `false`.
- `set.clear()` - deletes everything from the set.
- `set.size` - returns the number of elements in the set.

## Adding value to Set

```js
set.add(1); // Set {1}
set.add('text'); // Set {1, 'text'}
set.add(1); // still Set {1, 'text'} because 1 is already in the set
```

## Determining Whether Value is in Set

```js
console.log(set.has(1)); // Output: true
console.log(set.has('text')); // Output: true
console.log(set.has(5)); // Output: false
```

## Retrieving the Size of a Set

```js
console.log(set.size); // Output: 2
```

There are 2 values in `set`: `1` and `text`

## Removing Value from Set

```js
console.log(set.delete(1)); // Output: true, Set {'text'}
console.log(fruits.delete(5)); // Output: false, Set {'text'}
```

The first statement returns `true` because `set` contain `1` as a value and has removed it.
The second statement returns `false` because `5` is not a value in `set`.

## Removing everything from Set

```js
set.size; // 1, {'text'}
set.clear(); // undefined, Set {size: 0} in chrome
```

## Intializing Set using iterables (e.g. arrays)

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
