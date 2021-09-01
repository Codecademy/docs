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

<!-- Define iterators  -->

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
const catsAge = [2, 1, 3];

catsAge.map(age => {
  return age * 2
});
```

- The `map` is a method that iterates through the `catsAge` array and returns the elements in an array.
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
- If the return value for the callback results to  `true`, the element will be added to the new array.
- If the reuturn value results to `false`, the element will not be added to the new array.

The output would be:

```
["Kiki", "Milo"]
```

## Fourth Iterator



**Note:** There are required and optional parameters.

Add sufficient spacing, and explain each iterator and what it does before writing out the code snippet. Try keeping paragraphs a short; 3-4 sentences maximum.

```js
const variable = "";
// Output:
```