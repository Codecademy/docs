---
Title: ".valueOf()"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Arrays"
  - "Methods"
Catalog Content:
  - "https://www.codecademy.com/learn/introduction-to-javascript"
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition

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
