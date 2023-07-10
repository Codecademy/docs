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

The **`toSorted()`** method takes an array and returns a new array with the elements sorted in ascending order. It does not mutate the original array. All undefined elements are sorted to the end of the array.

It does this by converting array elements to [strings](https://www.codecademy.com/resources/docs/javascript/strings) and comparing them by [Unicode code point value](https://en.wikipedia.org/wiki/Code_point). 

## Syntax

**Functionless**
```pseudo
array.toSorted();
```

**Arrow function**
'a' is the first element for comparison and 'b' is the second.

```pseudo
array.toSorted((a, b) => { /* Code for a compare function. */ });
```

**Compare function**
'compareFn' specifies a function that defines the sort order.

```pseudo
function compareFn() {
  /* Code for a compare function. */
};

array.toSorted(compareFn);
```

**Inline compare function**
```pseudo
array.toSorted(function compareFn(a, b) { /* … */ });
``` 

## Example

In the below example, there are two arrays - `numbers`, containing integers & floats (a number with a decimal place), and `sports`, containing strings.

```js
const sports = ["baseball", "basketball", "tennis", "pickleball", undefined, ""]
const numbers = [-3, 4, 1, 9, 3, 2, 1, 200, 2159.20, 959, undefined, ""];

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

`sports` was sorted alphabetically but `numbers` was sorted by unicode value. Remember that `toSorted()` converts elements to strings and compares them using Unicode Code Point value.

Additionally, `undefined` values were sorted to the end and empty strings (Unicode value of 0) were sorted to the beginning for both arrays.

To sort by numerical values, we require a comparison function.

## Codebyte Example

The code below takes the `numbers` array and sorts it two ways - ascending then descending. It then saves the new arrays to two variables and logs those. 

```codebyte/js
const numbers = [-3, 4, 1, 9, 3, 2, 1, 200, 959, 2159.20];

let ascending = numbers.toSorted(function compareFn(a, b) {
  return a-b});

let descending = numbers.toSorted(function compareFn(a, b) {
  return b-a});

console.log('Numbers Ascending: ' + ascending); 
console.log('Numbers Descending: ' + descending); 
```
