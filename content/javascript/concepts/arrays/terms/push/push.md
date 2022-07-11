---
Title: '.push()'
Description: 'Adds one or more elements to the end of the array and returns the new length.'
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

The **`.push()`** method adds one or more elements to the end of an array and returns the new length.

## Syntax

```js
array.push(item1, item2, ...itemN);
```

A comma-separated list of items ([strings](https://www.codecademy.com/resources/docs/javascript/strings), [variables](https://www.codecademy.com/resources/docs/javascript/variables), or [functions](https://www.codecademy.com/resources/docs/javascript/functions)) can be passed to the end of the `array`. The `.push()` method is not to be confused with returning an entirely new array with the passed object.

## Example

Add one item to the end of the `colors` array:

```js
const colors = ['red', 'orange'];
colors.push('yellow');

console.log(colors);
```

This will output the following:

```shell
["red", "orange", "yellow"]
```

## Codebyte Example

The following example adds multiple colors to the `colors` array:

```codebyte/javascript
const colors = ["red", "orange", "yellow"];
colors.push("green", "blue");

console.log(colors);
```
