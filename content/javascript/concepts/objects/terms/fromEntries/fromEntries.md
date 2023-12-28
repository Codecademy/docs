---
Title: '.fromEntries()'
Description: 'Returns a new object with properties from a given iterable.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Objects'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The **`.fromEntries()`** method returns a new object with properties from a given list. A single element in a list can be an array with two elements. The first element in this array will be the `key` and the second element will be the `value` for a single property in the returned object.

## Syntax

```pseudo
Object.fromEntries(iterableObject);
```

The `iterableObject` is usually an Array or a Map.

## Example

Creating an object from an array of key-value pairs.

```js
const array = [
  ['0', 'Los Angeles'],
  ['1', 'Toronto'],
  ['2', 'Paris'],
];

const newObject = Object.fromEntries(array);

console.log(newObject);
```

The output would be:

```shell
{ '0': 'Los Angeles', '1': 'Toronto', '2': 'Paris' }
```

## Codebyte Example

Following is a runnable example that demonstrates the `.fromEntries()` method.

```codebyte/javascript
const tvCharacters = new Map([
  ["Jerry Seinfeld", "Comedian"],
  ["Tim Taylor", "Television Host/Handyman"],
  ["Will Smith", "Student"],
  ["Dana Scully", "FBI Agent"]
]);

const tvCharacterObject = Object.fromEntries(tvCharacters);

console.log(tvCharacterObject);
```
