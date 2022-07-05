---
Title: '.find()'
Description: 'Returns the first element in the array that satisfies the given function.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.find()`** method returns the first element in the array that satisfies the given function.

## Syntax

```pseudo
array.find(function);
```

The `function` is a [callback](https://www.codecademy.com/resources/docs/javascript/callbacks) that is applied to each element as the `array` is traversed. If no valid element is found, `undefined` is returned.

## Example

Finding the first temperature that's over 90&deg;:

```js
const temperature = [72, 87, 92, 90, 85, 88, 81];

const hot = temperature.find((element) => element >= 90);

console.log(hot);
// Output: 92
```

## Codebyte Example

The following example finds the first person under 21 years old in the `peopleInLine` array:

```codebyte/javascript
const peopleInLine = [21, 22, 20, 24, 22];

const underAge = peopleInLine.find(element => element < 21);

console.log(underAge);
```
