---
Title: '.lastIndexOf()'
Description: 'Returns the last index at which an element can be found.'
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

## Syntax

```pseudo
array.lastIndexOf(searchElement, fromIndex);
```

- `searchElement`: The target element in the search.
- `fromIndex` (optional): The starting index position that search begins. The default value of `fromIndex` is `array.length - 1`. Therefore, if undefined, the search starts from the last index.

> **Note:** A negative `fromIndex` will offset from the end of the array to begin the search. The array is still searched backwards.

## Examples

Searching for an element not in the given array:

```js
const fruits = ['apple', 'orange', 'peach'];

const lastIndexOfCherry = fruits.lastIndexOf('cherry');

console.log(lastIndexOfCherry);
// Output: -1
```

Searching for the element `indigo` in an array of colors:

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

const checkIndigo = rainbow.lastIndexOf('indigo');

console.log(checkIndigo);
// Output: 5
```

## Codebyte Example

The example below defines a new array `cities`. The array lists the city `'Berlin'` twice (multiple matches will only return the last index within the index range where a match occurs):

```codebyte/javascript
const cities = ['London', 'New York', 'Sydney', 'Berlin', 'Paris', 'Berlin', 'Dublin'];

const findCityPosition = cities.lastIndexOf('Berlin', cities.length - 3);

console.log(findCityPosition);
```
