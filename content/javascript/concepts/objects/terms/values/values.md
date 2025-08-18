---
Title: '.values()'
Description: 'Returns an array of a given object’s own enumerable property values.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Objects'
  - 'Properties'
  - 'Methods'
  - 'JavaScript'
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

- An array of values corresponding to the object's own enumerable properties, ordered according to JavaScript's property ordering rules (integer keys first, then string keys in insertion order).

## Example 1: Basic usage of `Object.values()`

```js
const perfectWife = {
  firstName: 'Liany',
  animal: 'cat',
  age: 30,
};

const values = Object.values(perfectWife);
console.log(values);
```

This example results in the following output:

```shell
["Liany", "cat", 30]
```

## Example 2: Iterating over values

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

```codebyte/javascript
const catObject = {
  ears = true,
  nose = "little",
  beans = true,
  wings = false,
  tails = 1,
}

const booleanValues = Object.values(catObject).filter((value) => typeof value === "boolean");

console.log(booleanValues);
```

## Frequently Asked Questions

- What is the difference between `Object.keys()`, `Object.values()`, and `Object.entries()`?

  - `Object.keys(obj)` returns an array of property names (keys).
  - `Object.values(obj)` returns an array of values.
  - `Object.entries(obj)` returns an array of [key, value] pairs.

- Does `Object.values()` include inherited properties?

  - No. It only returns the object's own enumerable properties (not those from the prototype).

- What order are the returned values in?

  - They follow the same property ordering as `Object.keys()`/`Object.entries()`: integer keys in numeric order, then string keys in insertion order.

- Does it work with `Map` or `Set`?
  - `Map` has its own `map.values()` method (an iterator). `Object.values()` only works on objects.
