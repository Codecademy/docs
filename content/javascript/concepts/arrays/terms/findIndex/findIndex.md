---
Title: '.findIndex()'
Description: "Returns the first index that passes the callback function's test. Returns -1 if no element passes the test."
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

The `.findIndex()` array method returns the first index that passes the callback function's test. Returns `-1` if no element passes the test.

## Syntax

```js
array.findIndex((element, index, array) => {...});
```

A function can be invoked with three arguments:

- `element`: The current element we are iterating through.
- `index` (optional): The index of the array element.
- `array` (optional): The array itself.

## Examples

Find the first element that satisfies the condition:

```js
const cats = ['Kiki', 'Leo', 'Milo', 'Cleo', 'Lily', 'Luna'];

const findLily = cats.findIndex((cat) => {
  return cat == 'Lily';
});

console.log(findLily);
// Output: 4
```

If no element satisfies the condition, the result will be `-1`:

```js
const cats = ['Kiki', 'Leo', 'Milo', 'Cleo', 'Luna'];

const findLily = cats.findIndex((cat) => {
  return cat == 'Lily';
});

console.log(findLily);
// Output: -1
```

## Codebyte Example

```codebyte/js
function checkAge(age) {
  return age < 21;
}

const peopleInLine = [21, 22, 20, 24, 22];

console.log(peopleInLine.findIndex(checkAge));
```
