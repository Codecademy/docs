---
Title: "Iterators" 
Subjects: 
  - "Web Development"
  - "Computer Science"
Tags:
  - "Iterators"
CatalogContent: 
  - "introduction-to-javascript"
  - "paths/front-end-engineer-career-path"
---

## For Each Iterator

Returns undefined, and executes a callback function for each element in the array it is called on.

```js
const cats = ["Kiki", "Leo", "Milo"];

cats.forEach(cat => {
  console.log(cat)
});
```

- Our collection, `cats`, is an array.
- The `forEach` is a method that iterates through the collection.
- Each `cat` in the `cats` array is taken as an argument and passed through the `console.log` function.

The output would be:

```
Kiki
Leo
Milo
```

## Map Iterator

Returns a new array with a callback executed on every element.

```js
const catAges = [2, 1, 3];

catAges.map(age => {
  return age * 2
});
```

- The `map` is a method that iterates through the `catAges` array and returns the elements in an array.
- The callback function is used to alter the value and return the values in a new array.

The output would be:

```
[4, 2, 6]
```

## Filter Iterator

Returns a new array with elements that pass the callback function's test.

```js
const cats = ["Kiki", "Leo", "Milo"];

cats.filter(cat => {
  return cat.length > 3
});
```

- The `filter` method iterates through the `cats` array.
- If the return value for the callback results in  `true`, the element will be added to the new array.
- If the return value results in `false`, the element will not be added to the new array.

The output would be:

```
["Kiki", "Milo"]
```

**Note**: The `forEach`, `map`, and `filter` methods, all take an optional second parameter of `index`. This refers to the numerical value of the element's position within the array. For example:

```js
const cats = ["Kiki", "Leo", "Milo"];

cats.forEach((cat, index) => {
  console.log(index)
});
```

This will output:

```
0
1
2
```

## Find Index Iterator

Returns the first index that passes the callback function's test.

```js
const cats = ["Kiki", "Leo", "Milo", "Cleo", "Lily", "Luna"];

const findLily = cats.findIndex(cat => {
  return cat == "Lily"
});

console.log(findLily);
```


- The variable `findLily`, will store the index value from the `findIndex` method.
- `findIndex` iterates through the `cats` array to check if the value satisfies the callback's test.

This will output:

```
4
```

## Reduce Iterator

Returns a single value after iterating through every element.

```js
const catAges = [2, 1, 3];

const sumOfCatAges = catAges.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
});

console.log(sumOfCatAges)
```

- Our collection `catAges`, is an array.
- `sumOfCatAges` is a variable that stores the returned value after invoking the `reduce` method on our array.
- The `accumulator` and `currentValue` parameters hold the value of the first and second element in the array, respectively.
- With each iteration, the `accumulator` will change to the callback's returned value.

The output would be:

```
// 2 + 1 + 3
6
```