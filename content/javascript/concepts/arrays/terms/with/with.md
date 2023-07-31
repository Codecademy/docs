---
 Title: '.with()'
Description: 'Returns a new updated array with the given value at the specified index.'
Subjects:
  - 'Web development'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---
## .with()
The **`.with()`** method modifies the value of an element in an array. Since `.with()` is a copying method, it creates a new array. 

## Syntax
```pseudo
arrayName.with(index, value);

`.with()` takes the following parameters: 

1. Index: The index of the array element to be altered.
2. Value: The updated value for the array element.


## Example

Create and modify an array of favorite colors. 

```js
let favoriteColors = [‘blue’, ‘red’, ‘brown’, ‘grey’];

// Updating red to purple

favoriteColors.with(1, ‘purple’);

console.log(favoriteColors);

//Prints 'blue, red, brow, grey'. 
```

> **Note:** `.with()` was used to change `'red'` to `'purple'` in the example above. However, `console.log(favouriteColors)` still prints `red`. The reason is that `.with()` does not modify an array, it returns a new array.

```js
// Create an array of favorite colors.  

const favoriteColors = [‘blue’, ‘red’, ‘brown’, ‘grey’];

console.log(favoriteColors.with(1, ‘purple’);

// Prints blue, purple, brown, grey. 

let favoriteColorsModified = favoriteColors.with(1, ‘purple’);

console.log(favoriteColorsModified);

// Prints 'blue, purple, brown, grey'. 
```