---
Title: '.with()'
Description: 'Returns a copy of an array with the given modification.'
Subjects:
  - 'Web development'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.with()`** method modifies the value of an element in an array. Since `.with()` is a copying method, it creates a new array.

## Syntax

```pseudo
arrayName.with(index, value);
```

`.with()` takes the following parameters:

- `index`: The location of the array element to be altered.
- `value`: The updated value for the array element.

## Examples

Create and modify an array of colors.

```js
let favoriteColors = ['blue', 'red', 'brown', 'grey'];

// Updating red to purple

favoriteColors.with(1, 'purple');

console.log(favoriteColors);
```

This results in the following output:

```shell
blue, red, brown, grey
```

> **Note:** `.with()` was used to change `'red'` to `'purple'` in the example above. However, `console.log(favoriteColors)` still prints `red`. The reason is that `.with()` does not modify an array, it returns a new array.

```js
// Create an array of favorite colors.

let favoriteColors = ['blue', 'red', 'brown', 'grey'];

console.log(favoriteColors.with(1, 'purple'));
```

This results in the following output:

```shell
blue, purple, brown, grey
```
