---
Title: ".filter()"
Description: "Returns a new array with elements that pass the callback function's test."
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Arrays"
  - "Methods"
CatalogContent:
  - "introduction-to-javascript"
  - "paths/front-end-engineer-career-path"
---

Returns a new array with elements that pass the callback function's test.

## Syntax

```js
array.filter((element, index, array) => {...});
```

A function can be invoked with three arguments: 

- `element`: The current element we are iterating through.
- `index` (optional): The index of the array element.
- `array` (optional): The array itself.

## Examples

Return an array of the elements that meet the callback's condition:

```js
const catAges = [2, 1, 3];

const youngCats = catAges.filter(age => {
  return age < 3
});

console.log(youngCats);
// Output: [2, 1]
```

If no elements match the condition, the result will be an empty array:

```js
const catAges = [2, 1, 3];

const adultCats = catAges.filter(age => {
  return age > 5
});

console.log(adultCats);
// Output: []
```