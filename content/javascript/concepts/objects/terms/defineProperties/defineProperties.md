---
Title: '.defineProperies()'
Description: 'Defines new or modify existing properties directly on an object'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Properties'
  - 'Objects'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.defineProperties()`** method is used to define new or modify existing properties directly on an object or to add multiple properties to an object at once. This method is often used for property descriptors and fine-grained control over object properties.

## Syntax

```pseudo
Object.defineProperties(object, descriptors)
```

- `object`: The object on which to define or modify it's properties.
- `descriptors`: An object where each key represents a property name, and the corresponding value is the property descriptor.

## Example

In this example `Object.defineProperties` is used to define two properties (`property1` and `property2`) on the `myObject` object. Each property has a descriptor object specifying attributes like `value` and `writable`.
The `value` attribute is the value of the property and the `writable` attribute determines whether the property can be modified.

```js
const myObject = {};

Object.defineProperties(myObject, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {
    value: 'Hello',
    writable: false
  }
});

console.log(myObject.property1);
console.log(myObject.property2);

// Trying to modify the object

myObject.property1 = 100;  // Works because property1 is writable
myObject.property2 = 'World';  // Doesn't work because property2 is not writable

console.log(myObject.property1);  
console.log(myObject.property2);
```

This will return the following output:

```shell
42
Hello

100
Hello
```

> **Note:** This method is particularly useful when you want to customize the behavior of object properties or ensure certain constraints on them.