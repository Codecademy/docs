---
Title: 'structuredClone()'
Description: 'Creates a deep clone of a JavaScript value, preserving circular references and handling complex objects.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arguments'
  - 'Functions'
  - 'Parameters'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`structuredClone()`** [method](https://www.codecademy.com/resources/docs/javascript/methods) under the `Window` interface creates a deep copy of a JavaScript value, supporting circular references and built-in types that cannot be handled by the [`stringify()`](https://www.codecademy.com/resources/docs/javascript/json/stringify) and [`parse()`](https://www.codecademy.com/resources/docs/javascript/json/parse) methods in [JSON](https://www.codecademy.com/resources/docs/javascript/json).

## Syntax

```pseudo
structuredClone(value)
```

- `value`: The JavaScript value to be deep-cloned. It can be an [object](https://www.codecademy.com/resources/docs/javascript/objects), [array](https://www.codecademy.com/resources/docs/javascript/arrays), [map](https://www.codecademy.com/resources/docs/javascript/map), [set](https://www.codecademy.com/resources/docs/javascript/sets), or other structured [data types](https://www.codecademy.com/resources/docs/javascript/data-types).

This method returns a new deep copy of the provided `value`, with all nested objects and special types properly cloned.

## Example

The following example shows how `structuredClone()` deep copies a nested object, preserving the original structure while allowing independent modifications:

```js
// Create an object with nested properties
const original = {
  numbers: [1, 2, 3],
  nested: {
    name: 'Example',
  },
};

// Clone the object
const clone = structuredClone(original);

// Modify the clone
clone.numbers.push(4);
clone.nested.name = 'Modified';

console.log(original.numbers);
console.log(clone.numbers);
console.log(original.nested.name);
console.log(clone.nested.name);
```

The output of the above code will be:

```shell
[1, 2, 3]
[1, 2, 3, 4]
Example
Modified
```
