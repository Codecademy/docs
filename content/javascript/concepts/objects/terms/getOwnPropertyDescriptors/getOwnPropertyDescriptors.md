---
Title: 'Object.getOwnPropertyDescriptors()'
Description: 'Returns all own property descriptors of a given object.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
  - 'Web Applications'
Tags:
  - 'Properties'
  - 'Objects'
  - 'Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

The **`Object.getOwnPropertyDescriptors()`** method returns all own property descriptors of a given object. It is useful for extracting property descriptors, including configurable, enumerable, value, and writable properties, allowing manipulation of these property attributes from an object.

## Syntax

```pseudo
Object.getOwnPropertyDescriptors(obj)
```

- `obj`: It is the given object.
- 
The following codes demonstrate a basic implementation of the `Object.getOwnPropertyDescriptors()` method:

## Example 1

In this example, `Object.getOwnPropertyDescriptors()` returns an object where each key is a property name, and the corresponding value is the property descriptor for that property.

```js
const obj = {
  name: 'John',
  age: 25,
};

const propertyDescriptors = Object.getOwnPropertyDescriptors(obj);
console.log(propertyDescriptors);
```

The above code snippet will return the following output:

```shell
{
  name: { value: 'John', writable: true, enumerable: true, configurable: true },
  age: { value: 25, writable: true, enumerable: true, configurable: true }
}
```

## Example 2

In this example, `clonedObject` is a new object with the same property descriptors as `originalObject`. `getOwnPropertyDescriptors` ensures that the cloned object has the same property attributes, including configurability and enumerability.

```js
const originalObject = {
  name: 'John',
  age: 25,
};

const clonedObject = Object.create(
  Object.getPrototypeOf(originalObject),
  Object.getOwnPropertyDescriptors(originalObject)
);

console.log(clonedObject);
```

The above code snippet will return the following output:

```shell
{
  name: 'John',
  age: 25
}
```
