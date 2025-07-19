---
Title: '.keys()'
Description: 'Returns a new Array Iterator object that contains the keys for each index in the array.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Iterators'
  - 'JavaScript'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.keys()`** method returns a new array Iterator object that contains the keys (indices) for each index in the array.

## Syntax

```pseudo
array.keys()
```

**Parameters:**

- This method does not take any parameters.

**Returns:**

- A new Array Iterator object containing the keys (indices) of the array.

## Example 1: Basic Usage of the `.keys()` Method

This example demonstrates the fundamental usage of the `.keys()` method by creating an iterator and displaying the array indices:

```js
// Create an array of fruits
const fruits = ['apple', 'banana', 'orange', 'mango'];

// Get the keys iterator
const keysIterator = fruits.keys();

// Convert iterator to array to see all keys at once
const keysArray = Array.from(keysIterator);
console.log(keysArray);

// Alternative: iterate through keys one by one
const anotherIterator = fruits.keys();
for (const key of anotherIterator) {
  console.log(`Index: ${key}, Value: ${fruits[key]}`);
}
```

The output of this code is:

```shell
[0, 1, 2, 3]
Index: 0, Value: apple
Index: 1, Value: banana
Index: 2, Value: orange
Index: 3, Value: mango
```

The `.keys()` method creates an iterator that yields the numerical indices of each element in the array, starting from 0.

## Example 2: Using `.keys()` to Process Data with Index Information

This example shows how to use `.keys()` in a real-world scenario where you need to process data while keeping track of element positions, such as creating numbered lists or processing items in batches:

```js
// Customer order data
const orders = [
  'Pizza Margherita',
  'Chicken Burger',
  'Caesar Salad',
  'Pasta Carbonara',
];

// Create order numbers using keys
const orderKeys = orders.keys();
let orderSummary = '';

for (const index of orderKeys) {
  // Create order number (starting from 1 instead of 0)
  const orderNumber = index + 1;
  orderSummary += `Order #${orderNumber}: ${orders[index]}\n`;
}

console.log('Order Summary:');
console.log(orderSummary);

// Calculate processing batches (2 orders per batch)
const batchInfo = Array.from(orders.keys()).map((index) => {
  const batchNumber = Math.floor(index / 2) + 1;
  return `${orders[index]} -> Batch ${batchNumber}`;
});

console.log('Batch Processing:');
batchInfo.forEach((info) => console.log(info));
```

The output of this code is:

```shell
Order Summary:
Order #1: Pizza Margherita
Order #2: Chicken Burger
Order #3: Caesar Salad
Order #4: Pasta Carbonara

Batch Processing:
Pizza Margherita -> Batch 1
Chicken Burger -> Batch 1
Caesar Salad -> Batch 2
Pasta Carbonara -> Batch 2
```

## Codebyte Example: Working with Sparse Arrays Using `.keys()`

This example demonstrates how `.keys()` behaves with sparse arrays, where some indices might be missing values:

```codebyte/javascript
// Create a sparse array with missing elements
const sparseArray = ["first", , "third", , "fifth"];
console.log("Array length:", sparseArray.length);

// Using .keys() - includes all indices regardless of missing values
const allKeys = Array.from(sparseArray.keys());
console.log("All keys:", allKeys);

// Compare with Object.keys() which only shows existing properties
const existingKeys = Object.keys(sparseArray);
console.log("Existing keys only:", existingKeys);

// Practical use: identify missing elements
const missingIndices = [];
for (const index of sparseArray.keys()) {
  if (sparseArray[index] === undefined) {
    missingIndices.push(index);
  }
}

console.log("Missing elements at indices:", missingIndices);

// Fill missing elements
missingIndices.forEach(index => {
  sparseArray[index] = `filled-${index}`;
});

console.log("Array after filling:", sparseArray);
```

## Frequently Asked Questions

### 1. What are the keys of an array?

The keys of an array are its indices (numerical positions). In JavaScript arrays, keys are integers starting from 0 and going up to the array's length minus 1. For example, an array with 5 elements has keys 0, 1, 2, 3, and 4.

### 2. How to get array key name?

Use the `.keys()` method to get an iterator of all array keys, or use `Object.keys(array)` to get an array of key names as strings. The `.keys()` method returns numbers, while `Object.keys()` returns strings.

### 3. Does `.keys()` work with sparse arrays?

Yes, `.keys()` returns all indices from 0 to array.length - 1, including indices where no elements exist (sparse arrays). This differs from `Object.keys()` which only returns indices that actually have values.
