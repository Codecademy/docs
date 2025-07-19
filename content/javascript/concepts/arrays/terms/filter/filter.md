---
Title: '.filter()'
Description: 'Creates a new array containing the elements from the original array that pass a test implemented by a provided function.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Methods'
  - 'Filter'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

JavaScript's **`array.filter()`** method creates a new [array](https://www.codecademy.com/resources/docs/javascript/arrays) containing only the elements from the original array that pass a test implemented by a provided [function](https://www.codecademy.com/resources/docs/javascript/functions). It provides a clean and efficient way to extract specific elements from an array based on custom criteria.

## Syntax

```pseudo
array.filter(callback(element, index, array), thisArg)
```

**Parameters:**

- `callback`: A function that tests each element of the array. It accepts three arguments:
  - `element`: The current element being processed in the array
  - `index`: The index of the current element being processed in the array
  - `array`: The array `.filter()` was called upon
- `thisArg`: Optional. Value to use as `this` when executing the callback function

**Return value:**

The `.filter()` method returns a new array with all elements that pass the test implemented by the provided function. If no elements pass the test, it returns an empty array.

## Example 1: Basic Array Filtering Using JavaScripts's `.filter()` Method

This example demonstrates how to use `.filter()` to extract numbers greater than a specific value from an array:

```js
const numbers = [1, 5, 8, 12, 15, 20];

// Filter numbers greater than 10
const largeNumbers = numbers.filter(function (number) {
  return number > 10;
});

console.log(largeNumbers);
```

This example results in the following output:

```shell
[12, 15, 20]
```

The callback function tests each element in the array. Only elements that return `true` from the test function are included in the new array.

## Example 2: User Data Filtering Using `.filter()` in JavaScript

This example shows how to filter an array of user objects based on specific criteria, which is common in real-world applications:

```js
const users = [
  { name: 'Alice', age: 25, isActive: true },
  { name: 'Bob', age: 17, isActive: false },
  { name: 'Charlie', age: 30, isActive: true },
  { name: 'Diana', age: 16, isActive: true },
];

// Filter active users who are 18 or older
const eligibleUsers = users.filter(function (user) {
  return user.isActive && user.age >= 18;
});

console.log(eligibleUsers);
```

This example results in the following output:

```shell
[
  { name: "Alice", age: 25, isActive: true },
  { name: "Charlie", age: 30, isActive: true }
]
```

This demonstrates how `.filter()` can handle complex filtering logic by combining multiple conditions within the callback function.

## Codebyte Example: Product Search Implementation with `array.filter()`

This example illustrates how to implement a search feature using `.filter()` to match products based on user input:

```codebyte/javascript
const products = [
  { name: "Laptop", category: "Electronics", price: 999 },
  { name: "Coffee Maker", category: "Kitchen", price: 79 },
  { name: "Wireless Mouse", category: "Electronics", price: 25 },
  { name: "Blender", category: "Kitchen", price: 45 }
];

// Function to search products by name or category
function searchProducts(products, searchTerm) {
  return products.filter(function(product) {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           product.category.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

// Search for electronics
const electronicsResults = searchProducts(products, "electronics");
console.log(electronicsResults);

// Search for products with "coffee" in the name
const coffeeResults = searchProducts(products, "coffee");
console.log(coffeeResults);
```

The `searchProducts()` function demonstrates how `.filter()` can be used to create flexible search functionality that matches multiple fields and handles case-insensitive searches.

## Frequently Asked Questions

### 1. Does `.filter()` modify the original array?

No, `.filter()` creates and returns a new array. The original array remains unchanged.

### 2. What happens if no elements pass the test?

If no elements pass the test, `.filter()` returns an empty array `[]`.

### 3. Can I use `.filter()` with arrow functions?

Yes, `.filter()` works with arrow functions. For example: `array.filter(item => item > 5)`.

### 4. What's the difference between `.filter()` and `.find()`?

`.filter()` returns an array of all matching elements, while `.find()` returns only the first matching element or `undefined` if no match is found.
