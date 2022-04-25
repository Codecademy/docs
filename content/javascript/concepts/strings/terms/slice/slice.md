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

The `.slice()` method selects and returns a selected portion of a string.

## Syntax

```pseudo
string.slice(start);

string.slice(start, stop);
```

- The `start` index is optional and begins at zero (inclusive).
- The `stop` index is also optional and defaults to the length of the string (not inclusive).

## Example

```js
let smoothie = 'mango strawberry pineapple';

let berry = smoothie.slice(6, 16);

console.log(fruit);
// Output: mango strawberry pineapple

console.log(berry);
// Output: strawberry
```

## Codebyte Example

In the example below, the `animals` array is created. Then the `birds` array is created to extract the birds "eagles" and "owls". Lastly, the `birds` array is used to output a sentence.

```codebyte/javascript
let animals = 'elephants, eagles, owls, and tigers';

console.log(`${animals.slice(11,17)} and ${animals.slice(19,23)} are cool birds`);
```
