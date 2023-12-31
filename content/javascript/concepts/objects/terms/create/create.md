---
Title: '.create()'
Description: 'Creates a new object using a prexsiting object as a prototype.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'JavaScript'
  - 'Object'
  - 'Function'
CatalogContent:
  - 'learn-javascript'
  - 'paths/computer-science'
---

The **`.create()`** method creates an object constructed from the prototype supplied in its arguments.

## Syntax

```pseudo
Object.create(objectName)
```

- `objectName`: The name of the object being protoyped from.

## Example

The example demonstrates the use of `.create()` to create a new object based off the object called person.

```javascript
const person {
  name: "CodeAcademy",
  age: 12,
};

const me = Object.create(person);
me.name = "Mark Graham";
me.age = 26;

console.log("Name: " + me.name + "\n Age: " + person.age);
```

The output of the code above will be:

```shell
Name: Mark Graham
Age: 26
```
