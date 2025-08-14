---
Title: '.seal()'
Description: 'This method is used to seal an object and it returns the object being sealed.'
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

The **`Object.seal()`** static method is used to _seal_ an object. Sealing an object prevents extensions and makes existing properties non-configurable. In other words:

- New properties cannot be added.
- Existing properties cannot be removed.
- Their enumerability and configurability cannot be changed.

Unlike [`Object.freeze()`](https://www.codecademy.com/resources/docs/javascript/objects/freeze), objects sealed with `Object.seal()` may have their existing properties changed, as long as they are writable (`writable: true`).

> **Note:** For debugging purposes, it is good practice to use the [`strict mode`](https://www.codecademy.com/resources/docs/javascript/strict-mode), especially when working with sealed objects, as it helps prevent silent errors and detect unauthorized assignment or modification attempts.

## Syntax

```pseudo
Object.seal(obj)
```

**Parameters:**

`obj`: The object which should be sealed.

**Return value:**

The `Object.seal()` method returns the object being sealed.

## Example 1: Basic Object Sealing

In this example, the `person` object is being sealed, when attempting to add or remove properties, an explicit error will not be generated, but the operation will be performed silently (without producing any effects).

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

The following example uses the [`Object.isSealed()`](https://www.codecademy.com/resources/docs/javascript/objects/isSealed) method to check if the `car` object is sealed, that is, if `Object.seal()` has been called on it.

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

## Codebyte Example

In this codebyte example, the `'use strict'` directive is applied to the entire script. This activates JavaScript's strict mode, which enforces stricter rules and prevents certain problematic behaviors, such as attempting operations on sealed objects. Specifically, trying to delete a property from a sealed object will throw a `TypeError`.

```codebyte/javascript
'use strict';

const obj = {
  property: 'initial-data'
};

obj.property = 'new-data';

console.log(obj.property);

Object.seal(obj);

try {
  delete obj.property;
} catch (error) {
  console.log(error);
}
```
