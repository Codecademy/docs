---
Title: '.find()'
Description: 'Returns the first element in the array that satifies the given function.'
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

The `.find()` array method returns the first element in the array that satifies the given function.

## Syntax

```js
array.find((element) => element < 5);
```

If none of the elements in the array satisfy the function, `undefined` is returned.

## Example

Finding the first temperature that's over 90 °F:

```js
const temperature = [72, 87, 92, 90, 85, 88, 81];

const hot = temperature.find((element) => element >= 90);

console.log(hot);
// Output: 92
```

## Codebyte Example

```codebyte/js
const peopleInLine = [21, 22, 20, 24, 22];

const underAge = peopleInLine.find(element => element < 21);

console.log(underAge);
```
