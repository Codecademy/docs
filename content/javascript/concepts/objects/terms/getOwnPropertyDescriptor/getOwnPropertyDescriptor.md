---
Title: '.getOwnPropertyDescriptor()'
Description: 'Enables access to full information of a property.'
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

The **`.getOwnPropertyDescriptor()`** method is a built-in object that enables access to full information about a property and returns a property descriptor of the given property if it exists on the object, otherwise, it returns **undefined**. It only works on its properties directly defined by the object itself, meaning it does not have access to inherited properties from the object's prototype chain.

## Syntax

Here's the basic syntax of `Object.getOwnPropertyDescriptor()`:

```pseudo
Object.getOwnPropertyDescriptor(obj, prop)
```

- `obj`: The object where to look for the property.
- `prop`: The name or symbol of the property whose description is to be retrieved.

## Example

The example below shows how `Object.getOwnPropertyDescriptor()` works:

```JavaScript
const person = {
  name: "Jane",
  age: 21
};
const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor)
```

This example results in the following output:

```shell
{ value: 'Jane', writable: true, enumerable: true, configurable: true }
```

> **Note:** `Object.getOwnPropertyDescriptor()` method only works for an individual property of an object.
