---
Title: 'Object.getPrototypeOf()'
Description: 'Returns the prototype value of the specified object.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Properties'
  - 'Objects'
  - 'Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

The **`Object.getPrototypeOf()`** method is a static method that returns the prototype (the value of the internal [[Prototype]] property) of the specified object.

## Syntax

```pseudo
Object.getPrototypeOf(object_name)
```

- `object_name`: The name of an object whose prototype is to be returned.

## Example 1

In the following code, `Object.getPrototypeOf()` will return the prototype value of `prototype1`, `obj1`, and `fruits`:

```js
const prototype1 = {};
const obj1 = Object.create(prototype1);
let fruits = {
  types: ['banana', 'mango', 'kiwi'],
};
console.log(Object.getPrototypeOf(prototype1));
console.log(Object.getPrototypeOf(obj1));
console.log(Object.getPrototypeOf(fruits));
console.log(Object.getPrototypeOf('hello'));
```

This will return the following output:

```shell
[Object: null prototype] {}
{}
[Object: null prototype] {}
{}
```

> **Note:** In the example: `Object.getPrototypeOf("hello")`; `"hello"` is coerced to an `Object`, therefore this method returns `String.prototype` or {}. In ES5, if the 'obj' parameter isn't an object, it will result in a TypeError exception being thrown. However, in ES2015, the parameter will undergo coercion to become an Object. 

## Example 2

In the following code, `Object.getPrototypeOf(obj1)` will return `prototype1`, which is the prototype of `obj1`:

```js
const prototype1 = {};
const obj1 = Object.create(prototype1);
console.log(Object.getPrototypeOf(obj1) == prototype1);
```

This will return the following output:

```shell
true
```
