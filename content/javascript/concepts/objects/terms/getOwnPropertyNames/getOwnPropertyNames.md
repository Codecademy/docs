---
Title: '.getOwnPropertyNames()'
Description: 'Returns an array of strings that corresponds to the properties found directly in the given object.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Objects'
  - 'Methods'
  - 'Values'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The **`.getOwnPropertyNames()`** method returns all properties that are present in a given object except for those symbol-based non-enumerable properties.

## Syntax

```pseudo
Object.getOwnPropertyNames(obj)
```

- `obj`: This parameter holds the object whose enumerable and non-enumerable properties are to be returned.

## Examples

### Example 1

In this example, **`Object.getOwnPropertyNames()`** returns an array containing the property names of the `person` object:

```js
const person = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 40,
};

const propertyNames = Object.getOwnPropertyNames(person);
console.log(propertyNames);
```

The above example will return the following output:

```shell
['firstName', 'lastName', 'age']
```

### Example 2

In this example, the `obj` object has both enumerable and non-enumerable properties. **`Object.getOwnPropertyNames()`** includes both types of properties in the resulting array:

```js
const obj = Object.create(
  {},
  {
    nonEnumerableProp: {
      value: 'I am non-enumerable',
      enumerable: false,
    },
    enumerableProp: {
      value: 'I am enumerable',
      enumerable: true,
    },
  }
);

const propertyNames = Object.getOwnPropertyNames(obj);
console.log(propertyNames);
```

The above example will return the following output:

```shell
['nonEnumerableProp', 'enumerableProp']
```
