---
Title: 'Object.isSealed()'
Description: 'Returns true if an object is sealed, and false if that object is not sealed.'
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

The **`Object.isSealed()`** method is used to check if an object is sealed. An object is sealed when it is non-extensible, and all of its properties are non-configurable.


## Syntax

```pseudo
Object.isSealed(object_name)
```

- `object_name`: The name of the object to be checked.

## Example 1

The following code will determine if the `fruits` object is sealed or not by using `Object.seal()` and `Object.isSealed()` methods:

```js
let fruits = {
  type: 'watermelon',
  price: '$0.99 per pound',
};
console.log(Object.isSealed(fruits));
Object.seal(fruits);
console.log(Object.isSealed(fruits));
```

The above code will return the following output:

```shell
false
true
```

## Example 2

The following code will determine if the `fruits` object is sealed or not by using `Object.preventExtensions()` and `Object.defineProperties()` methods:

```js
let fruits = {
  type: 'watermelon',
  price: '$0.99 per pound',
};
console.log(Object.isSealed(fruits));
Object.preventExtensions(fruits);
Object.defineProperties(fruits, {
  type: {
    configurable: false,
    writable: true,
  },
  price: {
    configurable: false,
    writable: true,
  },
});
console.log(Object.isSealed(fruits));
```

The above code will return the following output:

```shell
false
true
```

> **Note:** If `type` or `price` property is configurable, then the `fruits` object will not be sealed.
