---
Title: '.lastIndexOf()'
Description: 'Returns the last index at which an element can be found. Returns -1 if element is not found.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Returns the last index at which an element can be found. Returns `-1` if element is not found. The array is searched backwards, starting at `fromIndex`.

## Syntax

```js
array.lastIndexOf(searchElement, fromIndex);
```

- `searchElement`: The element we are looking for.
- `fromIndex`: The index position to begin search from backwards. Optional.

A negative `fromIndex` will offset from the end of the array to begin search. The array is still searched from back to front.

## Examples

Find the last index of `2` in the `numbers` array:

```js
const numbers = [1, 2, 3];
const lastIndexOf2 = numbers.lastIndexOf(2);
console.log(lastIndexOf2);
// Output: 1
```

If element is not found the result will be `-1`:

```js
const fruits = ['apple', 'orange', 'peach'];
const lastIndexOfCherry = fruits.lastIndexOf('cherry');
console.log(lastIndexOfCherry);
// Output: -1
```

Check if color `'blue'` is in the `rainbow` array and before the fifth element:

```js
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const checkIndigo = rainbow.indexOf('indigo', 4);
console.log(checkIndigo);
// Output: -1
```

Multiple matches will only return the last index where a match occurs:

```js
const repeatGreeting = ['hello world', 'hello world', 'hello world'];
const lastGreeting = repeatGreeting.lastIndexOf('hello world');
console.log(lastGreeting);
// Output: 2
```
