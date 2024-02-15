---
Title: '.toString()'
Description: 'Returns a string with each of the array values, separated by commas. Does not mutate the original array.'
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

Returns a string with each of the array values, separated by commas. Does not mutate the original array.

## Syntax

```js
array.toString();
```

The `toString()` method does not have any parameters.

## Examples

```js
const numbers = [1, 2, 3];

console.log(numbers.toString());
// Output: '1,2,3'

console.log(numbers);
// Output: [1, 2, 3]
```

### Codebyte Example

The code below converts the array `fruits` to a string:

```codebyte/js

let fruits = ['Apple','Blueberries','Banana','Lemon','Mango','Orange','Grapes','Pineapple'];
let fruitsString = fruits.toString();
console.log(fruitsString);
```
