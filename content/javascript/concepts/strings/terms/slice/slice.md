---
Title: '.slice()'
Description: 'Returns a selected portion of a string.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Elements'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The `.slice()` method selects and returns a portion of a string.

## Syntax

```pseudo
string.slice(start);

string.slice(start, stop);
```

- The `start` index is optional and begins at zero (inclusive).
- The `stop` index is also optional and defaults to the length of the string (not inclusive).

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
