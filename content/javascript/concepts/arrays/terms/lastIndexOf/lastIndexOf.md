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

## Syntax

```pseudo
array.lastIndexOf(searchElement, fromIndex);
```

- `searchElement`: The element we are looking for.
- `fromIndex` (optional): The starting index position that search begins. The default value of `fromIndex` is `array.length - 1`. Therefore, if undefined, the search starts from the last index.

A negative `fromIndex` will offset from the end of the array to begin search. The array is still searched backward.

## Examples

If the element is not found, the result will be `-1`:

```js
const fruits = ['apple', 'orange', 'peach'];

const lastIndexOfCherry = fruits.lastIndexOf('cherry');

console.log(lastIndexOfCherry);
// Output: -1
```

If the color blue is in the `rainbow` array, before the fifth element:

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

Since `fromIndex` is assigned to 4, the search will begin at `blue` and search all previous elements before it. The element `indigo` will not be found by the search because none of the elements after `blue` will be searched.

## Codebyte Example

The example below defines a new array `cities`. The array lists the city 'Berlin' twice (multiple matches will only return the last index within the index range where a match occurs):

```codebyte/javascript
const cities = ['London', 'New York', 'Sydney', 'Berlin', 'Paris', 'Berlin', 'Dublin'];

const findCityPosition = cities.lastIndexOf('Berlin', cities.length - 3);

console.log(findCityPosition);
```
