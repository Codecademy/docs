---
Title: 'Tuples'
Description: 'In TypeScript, tuple types are defined as array-like containers with a fixed sized and the types of each member element already set.'
Subjects:
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Tuples'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

In TypeScript, tuple types are defined as array-like containers with a fixed sized and the types of each member element already set.

They have two distinct features:

- They know their size as well as exactly how many elements it contains.
- They already know the data type of each element.

## Syntax

Tuples can have a mix of different data types and look like an array consisting of types as values inside:

```ts
type myTuple: [string, number, boolean] = ["1", 2, true];
```

They consist of a left square bracket `[`, comma-separated list of types, and a right square bracket `]`. The literal values, "1", 2, and `true`, must map to each element's types, `string`, `number`, and `boolean`, in the correct order.

## Destructuring a Tuple

Like arrays and objects, tuples can be deconstructed into new variables that represents each element and their type. For example, here is a variable, `popStar`, with a given tuple type. One the other line, the `popStar` is destructured into four separate variables through its tuple type:

```ts
const popStar: [string, number, string, boolean] = [
  'Lil Nas X',
  22,
  'Old Town Road',
  true,
];

const [popStarName, age, popSingle, stillActive] = popStar;

console.log(`${popStarName} is ${age} years old.`);

console.log(
  `They are ${
    stillActive
      ? 'still active in the industry'
      : 'no longer active in the industry'
  }.`
);

console.log(`One of their most famous songs is ${popSingle}.`);
```

Destructuring tuple types allows to be able to better interpolate their values and the output will be:

```
Lil Nas X is 22 years old.
They are still active in the industry.
One of their most famous songs is Old Town Road
```

## Storing Returned Values in Tuples

Tuples are particularly useful for representing multiple return values from functions, or groups of values that are meant to be used together.

In this example, the `positiveDifference()` function is declared as returning an array consisting of a `string` and a `boolean` function:

```ts
function positiveDifference(left: number, right: number): [number, boolean] {
  return left > right ? [left - right, true] : [right - left, false];
}

const [difference, isPositive] = positiveDifference(7, 49);

difference; // Type: number, Value: 42
isPositive; // Type: boolean, Value: false
```
