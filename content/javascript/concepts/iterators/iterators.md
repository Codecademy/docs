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

```js
const cats = [
  {
    name: "Kiki", 
    age: 2
  }, 
  {
    name: "Leo",
    age: 1,
  }, 
  {
    name: "Milo",
    age: 3
  }
];

cats.map(cat => {
  cat.age * 2
});
```

The output would be:

```
4
2
6
```

## Filter Iterator

```js
const cats = [{

}];
// Output:
```

## Fourth Iterator



**Note:** Notes are written this way.

Add sufficient spacing, and explain each iterator and what it does before writing out the code snippet. Try keeping paragraphs a short; 3-4 sentences maximum.

```js
const variable = "";
// Output:
```

- Use dash to explain code snippet.
- `variable` is set to an empty string.