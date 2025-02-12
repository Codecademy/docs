---
Title: 'structuredClone()'
Description: 'Creates a deep clone of a JavaScript value, properly handling circular references and complex objects.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`structuredClone()`** method creates a deep copy of JavaScript values, supporting circular references and built-in types that the JSON serialize-parse technique cannot handle.

## Syntax

```pseudo
clone = structuredClone(value)
```

`structuredClone()` takes the following parameters:

- The `value` to be cloned, which can be any structured-clonable type.

It returns a new deep copy of the input value, with all nested objects and special types properly cloned.

## Example 1

The following code demonstrates how structuredClone() handles nested objects.

```js
// Creating an object with various data types
const original = {
  numbers: [1, 2, 3],
  nested: {
    name: 'Example',
  },
};

// Create circular reference
const self = (original.self = original);

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
