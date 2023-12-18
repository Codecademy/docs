---
Title: '.defineProperty()'
Description: 'defines a property of an object either by creating or modifying.'
Subjects:
  - 'Web Development'
  - 'Code Foundations'
Tags:
  - 'Objects'
  - 'Methods'
  - 'Values'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---


The .defineProperty() method defines a property on an object, either creating a new property or modifying an existing one. The method returns the modified object with the specified property.

## Syntax

```pseudo
Object.defineProperty(obj, prop, descriptor)
```

The syntax above is used to define or modify a property on the object obj. The method returns the updated object containing the specified property.

## Example

In the example below, a `name` property is defined using the .defineProperty() method. Then, to check the value of property, by printing it to the console:

```js
const person = {};

// Define a property 'name' on the 'person' object with a descriptor
Object.defineProperty(person, 'name', {
  value: 'John',
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log("Name:", person.name); // Output: John
```

This above example will return the following output:

```shell
Name: John
```
