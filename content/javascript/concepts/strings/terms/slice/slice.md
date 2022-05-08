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

- The `start` index is optional and begins at zero (inclusive) by default.
- The `stop` index is also optional and defaults to the length of the string (not inclusive).

## Example

In the example below, a `smoothie` string is created. Next, the `.slice()` method is used to extract substrings for the berry variable:

```js
let smoothie = 'mango strawberry pineapple';

let berry = smoothie.slice(6, 16);

console.log(smoothie);

console.log(berry);
```

The output will look like the following:

```shell
mango strawberry pineapple
strawberry
```

## Codebyte Example

In the example below, an `animals` string is created. Next, the `.slice()` method is used to pick out substrings of certain animals, specifically birds:

```codebyte/javascript
let animals = 'elephants, eagles, owls, and tigers';

console.log(`${animals.slice(11,17)} and ${animals.slice(19,23)} are cool birds`);
```
