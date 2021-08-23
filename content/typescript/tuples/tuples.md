---
Title: 'Tuples'
Subjects:
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Tuples'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/web-development'
---

A _tuple_ is an array of a fixed size.
Tuples are particularly useful for representing multiple return values from functions, or groups of values that are meant to be used together.

Tuple types look like an array consisting of types as values inside.
They consist of a `[` left array bracket, comma-separated list of types, and a `]` right array bracket.

In this example, the function `positiveDifference` is declared as returning an array consisting of a `string` and a `boolean` function:

```ts
function positiveDifference(left: number, right: number): [number, boolean] {
  return left > right ? [left - right, true] : [right - left, false];
}

const [difference, positive] = positiveDifference(7, 49);

difference; // Type: number
positive; // Type: boolean
```
