---
Title: '.valueOf()'
Description: 'Returns a new array with all the items of the original array. '
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

Returns a new array with all the items of the original array.

## Syntax

```js
array.valueOf();
```

**Note:** This method will not change the original array.

## Examples

Create a new array with the same elements as `programmingLanguages`:

```js
const programmingLanguages = ['JS', 'Python', 'Java', 'C++'];
const newArray = programmingLanguages.valueOf();

console.log(newArray);
// Output: ['JS', 'Python', 'Java', 'C++']
```
