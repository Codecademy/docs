---
Title: '.shift()'
Description: 'Removes and returns the first element of the array. All subsequent elements will shift down one place.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Removes and returns the first element of the array. All subsequent elements will shift down one place.

## Syntax

```js
array.shift();
```

## Example

The following example shows how to shift the `daysOfWeeks` array and remove the first element:

```js
const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const removed = daysOfWeek.shift();

console.log('Removed day:', removed);

console.log('Rest of week:', daysOfWeek);
```

This will produce the following output:

```shell
Removed day: Monday
Rest of week: [ 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]
```

## Codebyte Example

The instructions of the `alfredoRecipe` array are followed by a `while` [loop](https://www.codecademy.com/resources/docs/javascript/loops) that prints each step of the recipe to the console:

```codebyte/javascript
const alfredoRecipe = [
  "1. Heat water to a boil, then add pasta (stirring occasionally).",
  "2. Grate pecorino (or parmesan) cheese as finely as possible in a small bowl.",
  "3. Slowly heat butter in a saucepan on 'Low'.",
  "4. Drain pasta (but reserve some pasta water).",
  "5. Combine cheese and water with pasta and mix until creamy.",
];

while(alfredoRecipe.length > 0) {
  console.log(alfredoRecipe.shift())
}

console.log("Enjoy!")
```
