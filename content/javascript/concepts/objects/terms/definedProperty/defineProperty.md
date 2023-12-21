---
Title: '.defineProperty()'
Description: 'Defines a property of an object either by creating or modifying.'
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


The **`.defineProperty()`** method defines a property on an object, either creating a new property or modifying an existing one. The method returns the modified object with the specified property.

## Syntax

```pseudo
Object.defineProperty(obj, prop, descriptor)
```

- `obj`: The object on which to define or modify the property.
- `prop`: The name or Symbol of the property to be defined or modified.
- `descriptor`: An object that contains the property's configuration, such as value or getter/setter functions.


The syntax above is used to define or modify a property on the object `obj`. The method returns the updated object containing the specified property.

## Example

In the example below, a `name` property is defined using the ``.defineProperty()` method. Then, to check the value of the property, by printing it to the console:

```js
const person = {};

Object.defineProperty(person, 'name', {
  value: 'John',
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log("Name:", person.name); 
```

This above example will return the following output:

```shell
Name: John
```
