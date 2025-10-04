---
Title: '.from()'
Description: 'Creates a new Array instance from an iterable or array-like object.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'JavaScript'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`Array.from()`** static method creates a new `Array` instance from an iterable or array-like object. It provides a convenient way to convert various data structures into arrays, making them easier to work with using array methods.

## Syntax

```pseudo
Array.from(arrayLike, mapFn, thisArg)
```

**Parameters:**

- `arrayLike`: An iterable or array-like object to convert to an array
- `mapFn` (optional): A function to call on every element of the array being created
- `thisArg` (optional): Value to use as `this` when executing `mapFn`

**Return value:**

The `Array.from()` method returns a new Array instance.

## Example 1: Basic Array Creation Using `Array.from()`

This example demonstrates the fundamental usage of `Array.from()` to create an array from a string:

```js
// Convert string to array of characters
const text = 'hello';
const charArray = Array.from(text);

console.log(charArray);
```

The output of this code is:

```shell
['h', 'e', 'l', 'l', 'o']
```

The `Array.from()` method treats the string as an iterable object, creating a new array where each character becomes an individual element.

## Example 2: Using `Array.from()` to Convert Set to Array

This example shows how to convert a Set data structure to an array, which is useful when there is a need to use array methods on unique values:

```js
// Create a Set with unique values
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);

// Convert Set to array
const numberArray = Array.from(uniqueNumbers);

console.log(numberArray);

// Use array methods
const doubled = numberArray.map((num) => num * 2);
console.log(doubled);
```

The output of this code is:

```shell
[1, 2, 3, 4]
[2, 4, 6, 8]
```

This approach is particularly valuable when working with data that needs to maintain uniqueness during processing but requires array functionality for further manipulation.

## Codebyte Example: Array Creation with Mapping

This example demonstrates using the optional mapping function parameter to transform elements during array creation:

```codebyte/javascript
// Create an array of numbers and square them simultaneously
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = Array.from(numbers, x => x * x);

console.log(squaredNumbers);

// Generate a sequence of numbers from 0 to 4
const sequence = Array.from({length: 5}, (_, index) => index);
console.log(sequence);
```

The mapping function provides an efficient way to create and transform arrays in a single operation, eliminating the need for separate `map()` calls.

## Frequently Asked Questions

### 1. How to get array from set in JS?

Use `Array.from(yourSet)` to convert a Set to an array. For example: `const array = Array.from(new Set([1, 2, 3]));` This creates `[1, 2, 3]`.

### 2. What is the difference between `Array.from()` and the spread operator?

While both can convert iterables to arrays, `Array.from()` offers additional functionality with its optional mapping function parameter, allowing transformation during conversion. The spread operator `[...iterable]` only converts without transformation.

### 3. Can `Array.from()` work with array-like objects?

Yes, `Array.from()` works with both iterable objects (like Sets, Maps, strings) and array-like objects (like NodeList, arguments object). It creates a shallow copy and converts them to proper arrays with all array methods available.
