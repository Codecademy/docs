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

The **`structuredClone()`** method creates a deep copy of JavaScript values, supporting circular references and built-in types that cannot be handled by the JSON `stringify`-`parse` method.

## Syntax

```pseudo
clone = structuredClone(value)
```

- `value`: The JavaScript value to be deep-cloned. It can be an object, array, map, set, or other structured data types.

It returns a new deep copy of the provided `value`, with all nested objects and special types properly cloned.

## Example

The following example shows how `structuredClone()` deep copies a nested object, preserving the original structure while allowing independent modifications:

```js
// Creating an object with nested properties
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
