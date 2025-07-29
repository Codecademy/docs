---
Title: '.keys()'
Description: "Returns an array of a given object’s own enumerable string-keyed property names."
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Objects'
  - 'Properties'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`Object.keys()`** JavaScript method returns an [array](https://www.codecademy.com/resources/docs/javascript/arrays) of a given [object's](https://www.codecademy.com/resources/docs/javascript/objects) own enumerable string-keyed property names. This static method extracts only the keys from an object, providing a convenient way to iterate over or analyze object properties without accessing their values.

> **Note:** The order of the keys in the resulting array is not guaranteed to be the same as the order in which they were defined in the object.

## Syntax of JavaScript `Object.keys()`

```pseudo
Object.keys(obj)
```

**Parameters:**

- `obj`: The object whose enumerable string-keyed property names are to be returned.

**Return value:**

Returns an array of strings representing the given object's own enumerable string-keyed property keys.

## Example 1: Basic Usage of `Object.keys()`

This example demonstrates the fundamental usage of `Object.keys()` with a simple object containing different property types:

```js
// Create a person object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York',
};

// Get all keys from the object
const keys = Object.keys(person);
console.log(keys);
```

This example results in the following output:

```shell
["firstName", "lastName", "age", "city"]
```

The method returns an array containing all enumerable property names from the object. In this case, since all keys are strings, they appear in the order they were defined. However, if the object contained numeric keys, those would be ordered numerically first, regardless of definition order.

## Example 2: Using `Object.keys()` to iterate Over Object Properties

This example shows how to use `Object.keys()` to iterate through object properties, which is useful for processing or transforming object data:

```js
// Product inventory object
const inventory = {
  laptops: 45,
  smartphones: 123,
  tablets: 67,
  headphones: 89,
};

// Iterate through all product keys
Object.keys(inventory).forEach((product) => {
  console.log(`${product}: ${inventory[product]} units`);
});

// Alternative: using for...of loop
for (const product of Object.keys(inventory)) {
  if (inventory[product] < 50) {
    console.log(`Low stock alert: ${product}`);
  }
}
```

This example results in the following output:

```shell
laptops: 45 units
smartphones: 123 units
tablets: 67 units
headphones: 89 units
Low stock alert: laptops
```

## Codebyte Example: Filtering and Transforming Objects Using `Object.keys()`

This example demonstrates using `Object.keys()` to filter object properties and create new objects based on specific criteria:

```codebyte/javascript
// User settings object
const userSettings = {
  theme: "dark",
  notifications: true,
  autoSave: false,
  language: "en",
  fontSize: 14,
  showSidebar: true
};

// Filter only boolean settings
const booleanSettings = {};
Object.keys(userSettings).forEach(key => {
  if (typeof userSettings[key] === 'boolean') {
    booleanSettings[key] = userSettings[key];
  }
});

console.log("Boolean settings:", booleanSettings);

// Create an array of setting names that are enabled
const enabledSettings = Object.keys(userSettings).filter(key =>
  userSettings[key] === true
);

console.log("Enabled settings:", enabledSettings);
```

## Frequently Asked Questions

### 1. What is the difference between map keys and object keys?

In JavaScript:

- Object keys are always strings (or symbols). Even if you use a number or an object as a key, it gets converted to a string.
- Map keys can be of any type, such as string, number, object, or even functions. They're not converted to strings. This makes `Map` more flexible for key-value pairs where key type matters.

### 2. What is `Object.entries` and `Object.keys`?

- `Object.keys(obj)` returns an array of the keys (property names) in the object.
- `Object.entries(obj)` returns an array of key-value pairs from the object.

### 3. Can an object key be a number?

Not exactly. When you use a number as a key, JavaScript automatically converts it to a string.

### 4. Are object keys ordered?

Yes, in a specific way:

- Integer-like keys come first (sorted numerically).
- Then, string keys appear in insertion order.
- Symbol keys come last, also in insertion order.
