---
 Title: 'array.prototype.with()'
Description: 'This teaches JavaScript developers how to use the array method .with()'
Subjects:
  - 'Web development'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  -'course/introduction-to-javascript'
  -'paths/front-end-engineer-career-path'
---

## .with()

The `.with()` **method** modifies the value of an element in an **array**. Since `.with()` is a **copying method**, it creates a new array. 

## Syntax:
>`arrayName.with(index, value);`

`.with()` takes the following parameters: 
1. The index of the array element
2. The new value for the array element.

## Example:

Create and modify an array of favorite colors. 

```js
let favoriteColors = [‘blue’, ‘red’, ‘brown’, ‘grey’];

// change red to purple

favoriteColors.with(1, ‘purple’);

console.log(favoriteColors);

//
Prints 'blue, red, brow, grey'. 
```

Notice that `.with()` should change 'red' to 'purple'. But `console.log(favouriteColors)` still prints red. The reason is that `.with()` does not modify an array, it returns a new array.

```js
// Create an array of favorite colors.  

const favoriteColors = [‘blue’, ‘red’, ‘brown’, ‘grey’];

console.log(favoriteColors.with(1, ‘purple’);

// Prints blue, purple, brown, grey. 

let favoriteColorsModified = favoriteColors.with(1, ‘purple’);

console.log(favoriteColorsModified);

// Prints 'blue, purple, brown, grey'. 
```

## Codebyte example: 

Change the even number in the numbers array to an odd number. 
```codebyte/javascript
const numbers = [1, 3, 5, 6, 9, 11]
const oddNumbers = oddNumbers.with(3, 7 )
console.log(oddNumbers)
```

