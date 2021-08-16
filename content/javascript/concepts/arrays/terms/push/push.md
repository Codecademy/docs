---
Title: ".push()"
Description: "Adds one or more elements to end of array and returns new length."
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



Adds one or more elements to end of array and returns new length.

## Syntax

The `.push()` method is not to be confused with returning an entirely new array with the passed object.

```js
array.push(item);
```

Multiple elements can be passed to end of array.

```js
array.push(item1, item2);
```

## Examples

Add one item to end of `colors` array:

```js
const colors = ['red', 'orange'];
colors.push('yellow');
// Output: 3

console.log(colors);
// Output: ['red', 'orange', 'yellow']
```

Add multiple items to end of `colors` array:

```js
const colors = ['red', 'orange', 'yellow'];
colors.push('green', 'blue'); 
// Output: 5

console.log(colors);
// Output: ['red', 'orange', 'yellow', 'green', 'blue']
```
