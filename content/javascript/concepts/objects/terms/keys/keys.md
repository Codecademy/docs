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

## Syntax

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

The method returns an array containing all enumerable property names from the object. The order of keys in the returned array matches the order in which they were defined in the object.

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

### 1. How to get all the keys of an object in JavaScript?

Use `Object.keys(obj)` to get an array of all enumerable string-keyed property names of an object. This method returns only the object's own properties, not inherited properties from the prototype chain.

### 2. How to add keys in object in JavaScript?

You can add keys to an object using dot notation (`obj.newKey = value`), bracket notation (`obj["newKey"] = value`), or `Object.assign()`. To add multiple keys at once, use `Object.assign(obj, {key1: value1, key2: value2})`.

### 3. How to check object key in JavaScript?

Use `Object.keys(obj).includes("keyName")` to check if a specific key exists in an object. Alternatively, use the `in` operator (`"keyName" in obj`) or `hasOwnProperty()` method (`obj.hasOwnProperty("keyName")`).

### 4. How to lowercase all object keys in JavaScript?

Use `Object.keys(obj)` with `reduce()` to create a new object with lowercase keys:

```js
const newObj = Object.keys(obj).reduce((acc, key) => {
  acc[key.toLowerCase()] = obj[key];
  return acc;
}, {});
```
