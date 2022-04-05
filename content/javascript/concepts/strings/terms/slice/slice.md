---
Title: '.slice()'
Description: 'Returns a selected portion of a string.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Elements'
  - 'Methods'
  - 'Arrays'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The JavaScript method `.slice()` returns a selected portion of a string.

## Syntax

```pseudo
slice(start)
slice(start, stop)
```

- `start` utilizes zero based indexing and represents the starting index of the extraction (inclusive). This is optional and the default is 0.
- `stop` utilizes zero based indexing and represents the ending index of the extraction (not inclusive). This is optional and the default is the rest of the array (`arr.length`).

## Example

```js
let fruits = ['Mango', 'Apple', 'Strawberry', 'Blueberry', 'Pineapple'];

let berries = fruits.slice(2, 4);

console.log(fruits);
// Output: ['Mango', 'Apple', 'Strawberry', 'Blueberry', 'Pineapple']

console.log(berries);
// Output: ['Strawberry', 'Blueberry']
```

## Codebyte Example

In the example below the animals array is created. Then the birds array is created to extract the birds "eagles" and "owls". Lastly, the birds array is used to output a sentence.

```codebyte/javascript
let animals = ['elephants', 'eagles', 'owls', 'tigers'];

let birds = animals.slice(1, 3);

console.log(`${birds[0]} and ${birds[1]} are cool birds`);
```
