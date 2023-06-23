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

The `.lastIndexOf()` array method returns the last index at which an element can be found. Otherwise, it returns `-1` if the element is not found.

The array is searched backward, starting at `fromIndex`. If `fromIndex` is undefined, the search starts from the last index.

## Syntax

```js
array.lastIndexOf(searchElement, fromIndex);
```

- `searchElement`: The element we are looking for.
- `fromIndex` (optional): The starting index position that search begins.

A negative `fromIndex` will offset from the end of the array to begin search. The array is still searched backward.

**Note:** The default value of `fromIndex` is `array.length - 1`.

## Example 1

Find the last index of `2` in the `numbers` array:

```js
const numbers = [1, 2, 3];
const lastIndexOf2 = numbers.lastIndexOf(2);

console.log(lastIndexOf2);
// Output: 1
```

Since the `fromIndex` is not specified, the search will start at the end of the array. Then, iterating backward, the element we are searching for is found at index 1.

## Example 2

If the element is not found, the result will be `-1`:

```js
const fruits = ['apple', 'orange', 'peach'];

const lastIndexOfCherry = fruits.lastIndexOf('cherry');

console.log(lastIndexOfCherry);
// Output: -1
```

## Example 3

Check if the color 'blue' is in the `rainbow` array, before the fifth element:

```js
const rainbow = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

const checkIndigo = rainbow.lastIndexOf('indigo', 4);

console.log(checkIndigo);
// Output: -1
```

Since `fromIndex` is assigned to 4, the search will begin at `blue` and search all previous elements before it. The element `indigo` will not be found by the search because none of the elements after `blue` will be searched.

## Example 4

Multiple matches will only return the last index where a match occurs:

```js
const repeatGreeting = ['hello world', 'hello world', 'hello world'];

const lastGreeting = repeatGreeting.lastIndexOf('hello world');

console.log(lastGreeting);
// Output: 2
```

## Codebyte Example

The example below defines a new array `cities`. The array lists the city 'Berlin' twice. `lastIndexOf` array method finds Berlin's last position in the array.

```codebyte/javascript

const cities = ['London', 'New York', 'Sydney', 'Berlin', 'Paris', 'Berlin', 'Dublin'];

const findCityPosition = cities.lastIndexOf('Berlin', cities.length);

console.log(findCityPosition);
```
