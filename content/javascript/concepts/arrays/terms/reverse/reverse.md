---
Title: '.reverse()'
Description: 'Reverses the order of the elements of an array in place and returns the reversed array.'
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

Reverses the order of the elements of an array in place and returns the reversed array.

## Syntax

The `reverse()` method does not take any parameters.

```pseudo
array.reverse();
```

## Example

Reverse the elements in an array:

```js
const numbers = [5, 2, 9];
numbers.reverse();

console.log(numbers);
```

This results in the following output:

```shell
[9, 2, 5]
```

## Codebyte Example

The following example below uses `.reverse()` on an array, `sports`, to reverse the order of the elements.

```codebyte/js
const sports = ['baseball', 'basketball', 'football', 'soccer'];
console.log(sports)

const reversedSports = sports.reverse()
console.log(reversedSports)
```
