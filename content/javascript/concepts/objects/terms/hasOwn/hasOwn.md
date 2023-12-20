---
Title: '.hasOwn()'
Description: 'Returns a boolean value based on whether the specified property is directly owned by the object or not.'
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

The **`.hasOwn()`** method verifies if a specific property exists in an object, returning true if present, otherwise false. Unlike the `in` operator, it solely inspects direct object properties and doesn't consider inherited ones. This method serves as a replacement for `Object.hasOwnProperty()`.

## Syntax

```pseudo
Object.hasOwn(obj, prop)
```

- `Obj`: The Javascript object instance to test.
- `prop`: It is the property on which the check is to be applied.

## Example 1

The following code will check whether the given object has specific properties.

```js
let details = {
  name: 'Jack',
  course: 'Javascript Foundation',
};

// Check if 'details' object has its own property named 'name'
console.log(Object.hasOwn(details, 'name')); //Output: true

// Check if 'details' object has its own property named 'course'
console.log(Object.hasOwn(details, 'course')); //Output: true

// Check if 'details' object has its own property named 'phone number'
console.log(Object.hasOwn(details, 'phone number')); //Output: false
```

This above example will return the following output:

```shell
true
true
false
```

## Example 2

The following example illustrates the differentiation between direct properties and properties inherited through the prototype chain in JavaScript.

```js
let details = {
  name: 'Jack',
};
details.age = 25;

// Check if 'details' object has its own property named 'age'
console.log(Object.hasOwn(details, 'age'));  //Output: true

// Check if 'details' object has its own property named 'toString'
console.log(Object.hasOwn(details, 'toString')); //Output: false
```

This above example will return the following output

```shell
true
false
```
