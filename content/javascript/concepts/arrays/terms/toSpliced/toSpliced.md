---
 Title: '.toSpliced()'
Description: 'Returns a new array with deleted, replaced, or inserted values at the given index.'
Subjects:
  - 'Web development'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

## .toSpliced()

**`.toSpliced()`** is a method that modifies multiple array elements in one go. It usually has a start point (the first element to be modified) and an end point (the last element to be modified). `.toSpliced()` alters array elements in the following ways: 

- Delete element(s)
- Replace element(s)
- Insert element(s)

> **Note:** `.toSpliced()` returns the copy of an array with the given modifications. It does not mutate the parent array.


## Syntax
```pseudo
array.toSpliced(startIndex, count, elementN)
```

`.toSpliced` takes the following parameters:

- `startIndex`: the location of the first element to be altered.

- `count`: the number of elements that should be modified, beginning from `startIndex`

- `elementN`: the updated value(s) for the array element(s). To insert multiple values, seperate each value with a comma. 


## Examples
#### Delete array elements with `.toSpliced`

```js
const colors = ['red', 'yellow', 'blue', 'orange', 'green', 'purple'];

// Removing  red, yellow, and blue. Start and index 0 and delete 3 elements
const primaryColors = colors.toSpliced(0, 3);

console.log(primaryColors);
//Prints 'red', 'yellow', 'blue'

console.log(colors);
// Prints 'red', 'yellow', 'blue', 'orange', 'green', 'purple'
```

#### Replace array elements using `.toSpliced()`

```js
const colors = ['red', 'yellow', 'blue', 'orange', 'green', 'purple'];

//Replacing red, green and yellow. Start at index 0, and replace three items. 

const tertiaryColors = colors.toSpliced(0, 3, 'blue-green', 'red-violet', 'yellow-orange');

console.log(tertiaryColors);
//Prints 'blue-green', 'red-violet', 'yellow-orange', 'orange', 'green', 'purple'

console.log(colors);
// Prints 'red', 'yellow', 'blue', 'orange', 'green', 'purple'
```

#### Insert new items into an array using `.toSpliced`
```js
const colors = ['red', 'yellow', 'blue', 'orange', 'green', 'purple'];

//Inserting new colors. Insert into index 2 and delete 0 elements. 

const allTheColors = colors.toSpliced(2, 0, 'blue-green', 'red-violet', 'yellow-orange');

console.log(allTheColors);
//Prints 'red', 'yellow', 'blue', 'blue-green', 'red-violet', 'yellow-orange', 'orange', 'green', 'purple' 

console.log(colors);
// Prints 'red', 'yellow', 'blue', 'orange', 'green', 'purple'
```

 



