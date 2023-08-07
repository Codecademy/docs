---
Title: '.toSpliced()'
Description: 'Returns a new array with deleted, replaced, or inserted values at the given index.'
Subjects:
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**`.toSpliced()`** is a method that modifies multiple array elements. It has a start point (the first element to be modified) and an endpoint (the last element to be modified). `.toSpliced()` can make the following changes to an array:

- Extract element(s)
- Replace element(s)
- Insert element(s)

> **Note:** `.toSpliced()` returns the copy of an array with the given modifications. It does not mutate the parent array.

## Syntax

```pseudo
myArray.toSpliced(startIndex, count, elementN)
```

`.toSpliced` takes the following parameters:

- `startIndex`: The location of the first element to be altered. Defaults to 0.
- `count`: The number of elements that should be modified, beginning from `startIndex`. Defaults to 0.
- `elementN` (optiona): The updated value(s) for the array element(s). To insert multiple values, separate each value with a comma. 

## Examples

### Extract Array Elements With `.toSpliced`

```js
const colors = ['red', 'yellow', 'blue', 'orange', 'green', 'purple'];
// Indices:       0        1       2        3         4        5

// Extracting red, yellow, and blue. Start at index 3 and delete 3 elements
const primaryColors = colors.toSpliced(3, 3);

console.log(primaryColors);
// Output: 'red', 'yellow', 'blue'

console.log(colors);
// Output: 'red', 'yellow', 'blue', 'orange', 'green', 'purple'
```

### Replace Array Elements Using `.toSpliced()`

```js
const colors = ['red', 'yellow', 'blue', 'orange', 'green', 'purple'];

// Replacing red, green, and yellow. Start at index 0, and replace three items. 
const tertiaryColors = colors.toSpliced(0, 3, 'blue-green', 'red-violet', 'yellow-orange');

console.log(tertiaryColors);
// Output: 'blue-green', 'red-violet', 'yellow-orange', 'orange', 'green', 'purple'

console.log(colors);
// Output: 'red', 'yellow', 'blue', 'orange', 'green', 'purple'
```

### Insert New Items Into an Array Using `.toSpliced`

```js
const colors = ['red', 'yellow', 'blue', 'orange', 'green', 'purple'];

// Inserting new colors. Insert into index 3 and delete 0 elements. 
const allTheColors = colors.toSpliced(3, 0, 'blue-green', 'red-violet', 'yellow-orange');

console.log(allTheColors);
// Output: 'red', 'yellow', 'blue', 'blue-green', 'red-violet', 'yellow-orange', 'orange', 'green', 'purple' 

console.log(colors);
// Output: 'red', 'yellow', 'blue', 'orange', 'green', 'purple'
```
