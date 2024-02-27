---
Title: '.keys()'
Description: 'Extracts keys from an object and returns them as an array'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Objects'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The `.keys()` static method extracts keys from an object and returns them as an array. It only returns the keys for the object's property and only for enumerable properties.

> **Note:** The order of the keys in the resulting array is not guaranteed to be the same as the order in which they were defined in the object.

## Syntax

The basic syntax is:

```pseudo
Object.keys(obj)
```

- `obj`: An object from which the keys are extracted.

## Example

Here's a simple example that extracts keys from an object and returns them as an array:

```js
const myObject = {
  name: 'John',
  age: 25,
  city: 'London',
};
const keysArray = Object.keys(myObject);
console.log(keysArray);
```

The above example will give the following output:

```shell
  ['name', 'age', 'city']
```
