---
Title: '.indexOf()'
Description: 'Searches a string for a given value and returns the first index if found.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Searches a string for a given value and returns the first index if found. Returns `-1` if not found.

## Syntax

```pseudo
string.indexOf(value, startSearch);
```

- `value` is the value to search for in a string.
- `startSearch` (optional), indicates the index to start the search at.

## Examples

Find the index of string:

```js
const gingerbreadRhyme = `You can't catch me! I'm the Gingerbread Man!`;

const captureGingerbreadMan = gingerbreadRhyme.indexOf('Gingerbread Man');

console.log(captureGingerbreadMan);
// Output: 28
```

Find the first occurrence of a string:

```js
const baseballChant =
  'Hey batter, batter, batter, batter, batter! Swing, batter!';

const firstBatter = baseballChant.indexOf('batter');

console.log(firstBatter);
// Output: 4
```

Use second parameter to start search later in string:

```js
const baseballChant =
  'Hey batter, batter, batter, batter, batter! Swing, batter!';

const latterBatter = baseballChant.indexOf('batter', 18);

console.log(latterBatter);
// Output: 20
```

Return `-1` if not found:

```js
const people = ['Dominic', 'Marshawn', 'Alexis', 'Shannon'];

const didYouFindWaldo = people.indexOf('Waldo');

console.log(didYouFindWaldo);
// Output: -1
```

## Codebyte Example

The following is runnable, and demonstrates the use of the `.indexOf()` method:

```codebyte/javascript
// Declaring a string
const myString = 'I love JavaScript! ';

// Case 1: Target value exists
console.log(myString.indexOf('love'));

// Case 2: Target value does not exist
console.log(myString.indexOf('hate'));
```
