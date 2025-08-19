---
Title: '.values()'
Description: 'Returns an array containing the values of an object’s own enumerable properties.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'JavaScript'
  - 'Methods'
  - 'Objects'
  - 'Properties'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`Object.values()`** method returns an array containing the values of an object's own enumerable properties. It's useful when you only need the values, not the keys.

## Syntax

```pseudo
Object.values(obj)
```

**Parameters:**

- `obj`: The object whose own enumerable property values needs to be retrieved.

**Return value:**

- An array of the object’s own enumerable property values, ordered by integer keys first (ascending), then string keys in insertion order.

## Example 1: Basic usage of `Object.values()`

In this example, `Object.values()` creates an array of property values from an object:

```js
const teamA = {
  firstName: 'Liany',
  animal: 'cat',
  age: 30,
};

const values = Object.values(teamA);
console.log(values);
```

This example results in the following output:

```shell
["Liany", "cat", 30]
```

## Example 2: Iterating over values

In this example, `Object.values()` is used with a `for...of` loop to iterate through numeric values in an object:

```js
const scores = { teamLiany: 100, teamWife: 106, teamPrincess: 142 };

for (const value of Object.values(scores)) {
  console.log(value);
}
```

This example results in the following output:

```shell
100
106
142
```

## Codebyte Example: `Object.values()` with `.filter()` method to detect booleans in a config object

In this example, `Object.values()` is combined with `.filter()` to extract only boolean values from an object:

```codebyte/javascript
const catObject = {
  ears: true,
  nose: "little",
  beans: true,
  wings: false,
  tails: 1,
}

const booleanValues = Object.values(catObject).filter((value) => typeof value === "boolean");

console.log(booleanValues);
```
