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

The **`.fromEntries()`** method returns a new object with properties from a given list of key-value pairs.

## Syntax

```pseudo
Object.fromEntries(iterableObject);
```

The `iterableObject` is usually an array or Map.

## Example

Creating an object from an array of key-value pairs.

```js
const array = [
  ["0", 'Los Angeles'],
  ["1", 'Toronto'],
  ["2", 'Paris']
];

const newObject = Object.fromEntries(array);

console.log(newObject);
```

The output would be:

```shell
{ '0': 'Los Angeles', '1': 'Toronto', '2': 'Paris' }
```

## Codebyte Example

The following example demonstrates the object returned from `fromEntries()`.

```codebyte/js
const tvCharacters = new Map([
    ["Jerry Seinfeld", "Comedian"],
    ["Tim Taylor", "Television Host/Handyman"],
    ["Will Smith", "Student"],
    ["Dana Scully", "FBI Agent"]
]);

const tvCharacterObject = Object.fromEntries(tvCharacters);

console.log(tvCharacterObject);
```
