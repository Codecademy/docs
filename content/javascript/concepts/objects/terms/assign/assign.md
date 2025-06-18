---
Title: '.assign()'
Description: 'Copies all enumerable own properties from one or more source objects to a target object.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Objects'
  - 'Properties'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`Object.assign()`** method copies all enumerable own properties from one or more source [objects](https://www.codecademy.com/resources/docs/javascript/objects) to a target object. It performs a shallow copy, meaning that nested objects are not cloned, but their references are copied to the target object. This method modifies and returns the target object, making it a powerful tool for object manipulation and merging.

The `Object.assign()` method is commonly used for object cloning, merging configuration objects, copying properties between objects, and implementing object composition patterns. It serves as a fundamental utility in modern JavaScript development, particularly in scenarios involving state management, data transformation, and functional programming approaches where immutable-like operations on objects are required.

## Syntax

```pseudo
Object.assign(target, source1, source2, ..., sourceN)
```

**Parameters:**

- `target`: Required. The target object that will receive properties from the source objects. This object is modified and returned using this method.
- `source1, source2, ..., sourceN` (Optional): One or more source objects containing the properties to be copied to the target object.

**Return value:**

The `.assign()` method returns the modified target object with all enumerable own properties from the source objects copied to it.

## Example 1: Basic Object Copying

This example demonstrates the fundamental usage of `.assign()` for copying properties from one object to another:

```js
// Create source and target objects
const targetObj = {
  name: 'Alice',
  age: 25,
};

const sourceObj = {
  age: 30,
  city: 'New York',
  occupation: 'Developer',
};

// Copy properties from source to target
const result = Object.assign(targetObj, sourceObj);

console.log(result);
console.log(targetObj === result);
```

The output of this code will be:

```shell
{ name: 'Alice', age: 30, city: 'New York', occupation: 'Developer' }
true
```

In this example, `.assign()` copies all enumerable properties from `sourceObj` to `targetObj`. When properties exist in both objects (like `age`), the source object's values overwrite the target object's values. The method returns a reference to the modified target object.

## Example 2: Object Cloning and Merging

The following example shows how to use `.assign()` for creating object clones and merging multiple objects together:

```js
// Original object to clone
const originalUser = {
  id: 1,
  username: 'john_doe',
  preferences: {
    theme: 'dark',
    notifications: true,
  },
};

// Create a shallow clone using empty object as target
const clonedUser = Object.assign({}, originalUser);

// Modify the clone
clonedUser.username = 'jane_doe';
clonedUser.preferences.theme = 'light'; // This affects original too (shallow copy)

console.log('Original:', originalUser.preferences.theme);

console.log('Clone:', clonedUser.preferences.theme);

// Merging multiple configuration objects
const defaultConfig = { timeout: 5000, retries: 3 };
const userConfig = { timeout: 8000, debug: true };
const envConfig = { apiUrl: 'https://api.example.com' };

const finalConfig = Object.assign({}, defaultConfig, userConfig, envConfig);

console.log(finalConfig);
```

The output produced by this code is:

```shell
Original: light
Clone: light
{
  timeout: 8000,
  retries: 3,
  debug: true,
  apiUrl: 'https://api.example.com'
}
```

This example illustrates both object cloning and merging scenarios. The shallow copy behavior is important to understand: nested objects are shared between the original and clone, while primitive values are independent copies.

## Example 3: State Management and Updates

The following example demonstrates how `.assign()` can be used in state management scenarios, particularly for creating updated versions of state objects:

```js
// Initial application state
const initialState = {
  user: {
    id: null,
    name: '',
    isLoggedIn: false,
  },
  ui: {
    loading: false,
    error: null,
  },
  data: [],
};

// Function to update user login state
function loginUser(state, userData) {
  return Object.assign({}, state, {
    user: Object.assign({}, state.user, {
      id: userData.id,
      name: userData.name,
      isLoggedIn: true,
    }),
  });
}

// Function to set loading state
function setLoading(state, isLoading) {
  return Object.assign({}, state, {
    ui: Object.assign({}, state.ui, {
      loading: isLoading,
    }),
  });
}

// Simulate user login
const loginData = { id: 123, name: 'Sarah Connor' };
const stateAfterLogin = loginUser(initialState, loginData);

console.log('Initial state user:', initialState.user.isLoggedIn);

console.log('Updated state user:', stateAfterLogin.user.isLoggedIn);

// Chain state updates
const loadingState = setLoading(stateAfterLogin, true);

console.log('Loading state:', loadingState.ui.loading);

// Original state remains unchanged
console.log('Original loading:', initialState.ui.loading);
```

The output produced by this code will be:

```shell
Initial state user: false
Updated state user: true
Loading state: true
Original loading: false
```

This example shows practical usage in state management. The `Object.assign() method creates new state objects without mutating the original state, following immutable update patterns commonly used in frameworks like Redux.

## Frequently Asked Questions

### 1. What is the difference between `Object.create()` and `Object.assign()` in JavaScript?

`Object.create()` creates a new object with a specified prototype, while `Object.assign()` copies properties from source objects to a target object. `Object.create()` establishes prototype inheritance, whereas `Object.assign()` performs property copying without affecting the prototype chain.

### 2. Does `Object.assign()` perform deep or shallow copying?

`Object.assign()` performs shallow copying. It copies property values directly, so nested objects are copied by reference rather than being deeply cloned. You need alternative approaches like `structuredClone()` or custom recursive functions for deep copying.

### 3. Can `Object.assign()` copy non-enumerable properties?

No, `Object.assign()` only copies enumerable own properties. Non-enumerable properties, inherited properties, and properties from the prototype chain are not copied. Use `Object.getOwnPropertyDescriptors()` with `Object.defineProperties()` to copy all property types.
