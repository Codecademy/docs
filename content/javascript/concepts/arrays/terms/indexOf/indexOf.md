---
Title: '.indexOf()'
Description: 'Returns the first index at which a specified element can be found in an array, or -1 if not present.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'JavaScript'
  - 'Search'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.indexOf()`** method returns the first index at which a specified element can be found in an [array](https://www.codecademy.com/resources/docs/javascript/arrays), or -1 if the element is not present. This method searches the array from left to right and uses strict equality comparison to match elements.

The `.indexOf()` method is commonly used for element detection, data validation, conditional logic, and implementing search functionality in web applications. It is a fundamental tool for determining whether specific values exist in arrays and their exact positions. It is essential for user input validation, menu systems, and data processing workflows.

## Syntax

```pseudo
array.indexOf(searchElement, fromIndex)
```

**Parameters:**

- `searchElement`: The element to search for in the array.
- `fromIndex` (Optional): The index position to start the search from. Default value is 0. Negative values count back from the end of the array but still search from left to right.

**Return value:**

The `.indexOf()` method returns a number representing the index position of the first occurrence of the specified element, or -1 if the element is not found.

## Example 1: Basic Usage of the `.indexOf()` Method

This example demonstrates the fundamental usage of the `indexOf()` method to locate elements in an array:

```js
const fruits = ['apple', 'banana', 'orange', 'grape'];

// Find the index of "banana"
const bananaIndex = fruits.indexOf('banana');
console.log(bananaIndex);

// Search for an element that doesn't exist
const kiwiIndex = fruits.indexOf('kiwi');
console.log(kiwiIndex);

// Check if an element exists in the array
if (fruits.indexOf('orange') !== -1) {
  console.log('Orange is in the array');
} else {
  console.log('Orange is not in the array');
}
```

The output of this code will be:

```shell
1
-1
Orange is in the array
```

This example shows how `.indexOf()` returns the zero-based index position of the first matching element. When "banana" is found at position 1, the method returns 1. When searching for "kiwi" which doesn't exist, it returns -1. The conditional check demonstrates a common pattern for testing element existence.

## Example 2: Product Inventory Management

This example shows how `.indexOf()` can be used in a real-world inventory management system to track product availability and prevent duplicates:

```js
const inventory = ['laptop', 'mouse', 'keyboard', 'monitor', 'speakers'];

// Function to check if a product is in stock
function checkStock(product) {
  const index = inventory.indexOf(product);
  if (index !== -1) {
    return `${product} is in stock at position ${index}`;
  } else {
    return `${product} is out of stock`;
  }
}

// Function to add new product if not already present
function addProduct(product) {
  if (inventory.indexOf(product) === -1) {
    inventory.push(product);
    console.log(`${product} added to inventory`);
  } else {
    console.log(`${product} already exists in inventory`);
  }
}

// Test the functions
console.log(checkStock('mouse'));
console.log(checkStock('tablet'));

addProduct('webcam');
addProduct('laptop');

console.log(inventory);
```

The output of this code will be:

```shell
mouse is in stock at position 1
tablet is out of stock
webcam added to inventory
laptop already exists in inventory
[ 'laptop', 'mouse', 'keyboard', 'monitor', 'speakers', 'webcam' ]
```

This example demonstrates practical usage where `.indexOf()` helps maintain inventory integrity by preventing duplicate entries and quickly checking product availability. The functions show how to combine `.indexOf()` with conditional logic for business operations.

## Codebyte Example: User Permission System

This example illustrates using `.indexOf()` with a starting position parameter to implement a user permission system with role hierarchy:

```codebyte/javascript
const userRoles = ["guest", "user", "moderator", "admin", "guest", "user"];
const permissions = ["read", "write", "delete", "manage"];

// Function to find user role starting from a specific position
function findUserRole(role, startPosition = 0) {
  const index = userRoles.indexOf(role, startPosition);
  return index !== -1 ? index : "Role not found";
}

// Function to check permissions based on role hierarchy
function checkPermission(userRole, action) {
  const roleHierarchy = ["guest", "user", "moderator", "admin"];
  const actionHierarchy = ["read", "write", "delete", "manage"];

  const roleLevel = roleHierarchy.indexOf(userRole);
  const actionLevel = actionHierarchy.indexOf(action);

  if (roleLevel === -1 || actionLevel === -1) {
    return "Invalid role or action";
  }

  return roleLevel >= actionLevel ? "Permission granted" : "Permission denied";
}

// Find all occurrences of "user" role
let position = 0;
const userPositions = [];
while (position < userRoles.length) {
  const foundIndex = userRoles.indexOf("user", position);
  if (foundIndex === -1) break;
  userPositions.push(foundIndex);
  position = foundIndex + 1;
}

console.log("User role positions:", userPositions);
console.log(checkPermission("moderator", "write"));
console.log(checkPermission("guest", "delete"));
```

This example demonstrates advanced usage of the `fromIndex` parameter by finding multiple occurrences of a value and implementing a role-based permission system. The while loop demonstrates how to find all instances of an element by repeatedly calling `.indexOf()` with updated starting positions.

## Frequently Asked Questions

### 1. What happens when `.indexOf()` searches for objects or arrays?

The `.indexOf()` method uses strict equality comparison, which means it only matches the exact same object reference, not objects with identical content. For content-based matching of objects, use `findIndex()` with a custom comparison function.

### 2. Can `.indexOf()` work with negative starting positions?

Yes, negative values for the `fromIndex` parameter count backward from the end of the array. However, the search still proceeds from left to right. If the calculated starting position is still negative, the search begins from index 0.

### 3. How does `.indexOf()` handle undefined and null values?

The method can find `undefined` and `null` values in arrays using strict equality. It will return the index position of these values if they exist, or -1 if they don't.

### 4. Is `.indexOf()` case-sensitive when searching strings?

Yes, `.indexOf()` performs case-sensitive matching for string elements. "Apple" and "apple" are treated as different values.

### 5. What is the difference between `.indexOf()` and `.lastIndexOf()`?

Both `.indexOf()` and `.lastIndexOf()` search for a specified element in an array, but they differ in the direction of the search:

- `.indexOf()` searches the array from left to right (starting from the first index).
- `.lastIndexOf()` searches the array from right to left (starting from the last index).
