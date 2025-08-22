---
Title: '.seal()'
Description: 'Prevents new properties from being added to an object and marks all existing properties as non-configurable'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Objects'
  - 'Properties'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`Object.seal()`** static method seals an object, preventing new properties from being added and making all existing properties non-configurable. In other words:

- New properties cannot be added.
- Existing properties cannot be removed.
- Property enumerability and configurability cannot be changed.

Unlike [`Object.freeze()`](https://www.codecademy.com/resources/docs/javascript/objects/freeze), objects sealed with `Object.seal()` may still have their existing properties updated if they are writable (`writable: true`).

> **Note:** For debugging purposes, it is good practice to use [`strict mode`](https://www.codecademy.com/resources/docs/javascript/strict-mode) when working with sealed objects, as it helps detect unauthorized modifications and prevents silent errors.

## Syntax

```pseudo
Object.seal(obj)
```

**Parameters:**

`obj`: The object to seal.

**Return value:**

The `Object.seal()` method returns the sealed object.

## Example 1: Basic Object Sealing

In this example, the `person` object is sealed. In non-strict mode, attempts to add or remove properties will fail silently (no error is thrown), while modifying writable properties will still work:

```js
const person = {
  name: 'Joe',
  age: 30,
};

// Sealing the person object
Object.seal(person);

// Modifying the age property will work
person.age = 31;

// Attempting to add or delete a property will not work
person.city = 'Madrid';
delete person.name;

console.log(person);
```

The code will produce this output:

```shell
{ name: 'Joe', age: 31 }
```

## Example 2: Check Sealed Object

The following example uses the [`Object.isSealed()`](https://www.codecademy.com/resources/docs/javascript/objects/isSealed) to check if the `car` object is sealed. This method returns `true` if the object is sealed, regardless of how it was sealed (e.g., via `Object.seal()` or [`Object.freeze()`](https://www.codecademy.com/resources/docs/javascript/objects/freeze)):

```js
const car = {
  brand: 'Audi',
  model: 'Sedan',
};

// Sealing the car object
Object.seal(car);

// This will print 'true' because the car object is sealed
console.log(Object.isSealed(car));

car.brand = 'Honda';
car.color = 'red';

console.log(car);
```

The code will produce this output:

```shell
true
{ brand: 'Honda', model: 'Sedan' }
```

## Codebyte Example: Strict Mode Behavior

This example demonstrates the core functionality of `Object.seal()` by showing what operations are allowed versus prohibited on a sealed object. The sealed object allows modification of existing properties but prevents structural changes like adding new properties or deleting existing ones:

```codebyte/javascript
'use strict';

const obj = { name: 'John', age: 25 };

Object.seal(obj);

obj.age = 26;
console.log(obj.age); // 26

try {
  obj.city = 'NYC'; // Can't add new properties
} catch (e) {
  console.log('Cannot add property:', e.message);
}

try {
  delete obj.name; // Can't delete existing properties  
} catch (e) {
  console.log('Cannot delete property:', e.message);
}
```
