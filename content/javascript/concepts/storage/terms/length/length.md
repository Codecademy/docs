---
Title: '.length'
Description: 'Returns the number of elements, characters, or items in a given data structure.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Data'
  - 'Elements'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`.length`** property is used to determine the number of elements, characters, or items in a given data structure, such as arrays or strings. This property is straightforward to use and plays a crucial role in JavaScript, making it simple for developers to work with the data.

## Syntax

```pseudo
myString.length
```

**Parameters:**

The `.length` property does not accept any parameters.

**Return value:**

Returns the number of elements, characters, or items in a given data structure.

## Example 1: Using `.length` with Arrays

This example uses `.length` to calculate the total number of elements in an array:

```js
const fruits = ['apple', 'banana', 'orange', 'grape'];

const numberOfFruits = fruits.length;

console.log(numberOfFruits);
```

Here is the output:

```shell
4
```

## Example 2: Using `.length` with Strings

This example uses `.length` to calculate the total number of characters in a string:

```js
const message = 'Hello, world!';

const messageLength = message.length;

console.log(messageLength);
```

Here is the output:

```shell
13
```

## Example 3: Using `.length` with DOM Collections

When working with the DOM (Document Object Model), methods like `document.querySelectorAll()` return NodeLists, which are array-like. In this case, `.length` can be used to count the total number of selected elements:

```js
const buttons = document.querySelectorAll('button');

console.log(buttons.length);
```

Here is a possible output:

```shell
2
```

## Frequently Asked Questions

### 1. Can I use `.length` with objects?

Not directly. Standard JavaScript objects don't have a `.length` property. To count the number of keys, use:

```js
const obj = { a: 1, b: 2 };

console.log(Object.keys(obj).length); // Output: 2
```

### 2. Does `.length` count undefined or empty slots in arrays?

Yes. JavaScript arrays can be sparse, and `.length` will count the total index range, not just defined elements:

```js
const arr = [];

arr[3] = 'dog';

console.log(arr.length); // Output: 4
```

### 3. Is `.length` writable for arrays?

Yes, but with caution:

```js
const arr = [1, 2, 3, 4];

arr.length = 2;

console.log(arr); // Output: [ 1, 2 ]
```

Modifying `.length` truncates or extends the array.
