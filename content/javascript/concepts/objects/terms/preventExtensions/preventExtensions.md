---
Title: '.preventExtensions()'
Description: 'Prevents new properties from being added to an object while allowing existing properties to be modified or deleted.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Objects'
  - 'Properties'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`Object.preventExtensions()`** method prevents new properties from being added to an object. Unlike `Object.freeze()` or `Object.seal()`, this method allows existing properties to be modified or deleted. It returns the object passed to the function.

## Syntax

```pseudo
Object.preventExtensions(obj)
```

- `obj`: The object to make non-extensible.

> **Note:** Once an object is made non-extensible, it cannot be made extensible again. This operation is irreversible.

## Example

The following code demonstrates how `Object.preventExtensions()` works:

```js
const user = {
  name: 'Arthur',
  age: 42,
};

// Show object is extensible
console.log(Object.isExtensible(user)); // true

// Prevent extensions
Object.preventExtensions(user);

// Show object is no longer extensible after using Object.preventExtensions()
console.log(Object.isExtensible(user)); // false

// New properties cannot be added
user.email = 'john@example.com';
console.log(user.email); // undefined

// Existing properties can be modified
user.age = 31;
console.log(user.age); // 31

// Existing properties can be deleted
delete user.name;
console.log(user.name); // undefined
```

## Codebyte Example

```codebyte/javascript
const config = {
  theme: 'dark',
  language: 'en'
};

console.log('Before preventExtensions:');
console.log(Object.isExtensible(config));
console.log(config);

Object.preventExtensions(config);

console.log('\nAfter preventExtensions:');
console.log(Object.isExtensible(config));

// This will fail silently in non-strict mode
config.debug = true;
console.log('Attempted to add debug property:', config.debug);

// Existing properties can still be modified
config.theme = 'light';
console.log('Modified theme:', config.theme);

// Existing properties can still be deleted
delete config.language;
console.log('After deleting language:', config);
```
