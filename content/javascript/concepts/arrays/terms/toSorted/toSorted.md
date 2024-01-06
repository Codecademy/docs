---
Title: '.toSorted()'
Description: 'Takes an array and returns a new array with all the elements sorted in ascending order.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Comparison'
  - 'Functions'
  - 'Methods'
  - 'Sort'
  - 'Unicode'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.toSorted()`** method takes an array and returns a new array with the elements sorted in ascending order. It does not mutate the original array. All undefined elements are sorted to the end of the array.

The sorting is done by converting array elements to [strings](https://www.codecademy.com/resources/docs/javascript/strings) and comparing them by [Unicode](https://www.codecademy.com/resources/docs/general/unicode) code point value.

## Syntax

```pseudo
// Functionless

array.toSorted();

// Arrow function
// 'a' is the first element for comparison and 'b' is the second.

array.toSorted((a, b) => { /* Code for a compare function. */ });

// Compare function
// 'compareFn' specifies a function that defines the sort order.

function compareFn() {
  /* Code for a compare function. */
};

array.toSorted(compareFn);

//  Inline compare function

array.toSorted(function compareFn(a, b) { /* … */ });
```

## Example 1

In the example below, the `.toSorted()` method is applied to the arrays `sports` and `numbers`.

```js
const sports = [
  'baseball',
  'basketball',
  'tennis',
  'pickleball',
  undefined,
  '',
];
const numbers = [-3, 4, 1, 9, 3, 2, 1, 200, 2159.2, 959, undefined, ''];

let sportsSorted = sports.toSorted();
let numbersSorted = numbers.toSorted();

console.log('Sports: ' + sportsSorted);
console.log('Numbers: ' + numbersSorted);
```

Which outputs:

```shell
Sports: ,baseball,basketball,pickleball,tennis,
Numbers: ,-3,1,1,2,200,2159.2,3,4,9,959,
```

`sports` was sorted alphabetically but `numbers` was sorted by unicode value. Remember that `toSorted()` converts elements to strings and compares them using Unicode code point value.

Additionally, `undefined` values were sorted to the end and empty strings (Unicode value of 0) were sorted to the beginning for both arrays.

To sort by **numerical** values, we require a comparison function. The code below takes the `numbers` array and sorts it two ways - ascending then descending. It then saves the new arrays to two variables and logs those.

```js
const numbers = [-3, 4, 1, 9, 3, 2, 1, 200, 959, 2159.2];

let ascending = numbers.toSorted(function compareFn(a, b) {
  return a - b;
});

let descending = numbers.toSorted(function compareFn(a, b) {
  return b - a;
});

console.log('Numbers Ascending: ' + ascending);
console.log('Numbers Descending: ' + descending);
```

Which outputs:

```shell
Numbers Ascending: -3,1,1,2,3,4,9,200,959,2159.2
Numbers Descending: 2159.2,959,200,9,4,3,2,1,1,-3
```

## Example 2

The following example demonstrates the use of an arrow function in the `toSorted()` method:

```js
// Array of book objects
const books = [
  { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { title: '1984', author: 'George Orwell' },
  { title: 'Pride and Prejudice', author: 'Jane Austen' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

// Using an arrow function to sort books by their title
let sortedBooks = books.toSorted((a, b) =>
  a.title < b.title ? -1 : a.title > b.title ? 1 : 0
);

console.log('Sorted Books by Title:');
sortedBooks.forEach((book) => console.log(book.title + ' by ' + book.author));
```

The example above will result in the following output:

```shell
Sorted Books by Title:
1984 by George Orwell
Pride and Prejudice by Jane Austen
The Hobbit by J.R.R. Tolkien
To Kill a Mockingbird by Harper Lee
```

> **Note:** The `toSorted()` method only works with **Node.js Version 20 or above**. Please ensure that your compiler supports that or else it will result in an error.
