---
Title: 'Spread Operator'
Description: 'The Spread Operator in JavaScript is used to expand elements of an array, object, or iterable.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Spread Operator'
  - 'Arrays'
  - 'Objects'
  - 'Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The `Spread Operator` in JavaScript, represented by three dots (`...`), is used to expand or unpack elements of arrays, objects, or other iterables into individual elements.

The `Spread-operator` performs a shallow copy, so changes in nested objects or arrays might reflect in the copied object/array.

## Syntax

```pseudo
const nums = [...nums1 , ...nums2]   // arrays
const obj = {...obj1, ...obj2}      // objects
```

## Example 

The following example demonstrates how to use `spread-operator` 

```js
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const nums = [...nums1, ...nums2];
console.log(nums); 

const obj1 = { name: 'Subro' };
const obj2 = { age: 22 };
const obj = { ...obj1, ...obj2 };
console.log(obj); 
```

This example results in the following output:

```shell
[1, 2, 3, 4, 5, 6]
{ name: 'Subro', age: 22 }
```

## CodeByte Example

Run the example to better understand the `spread-operator` :

```js
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

// Original object with nested data
const originalObj = {
  name: 'Subro',
  address: {
    city: 'Lalaland',
    zip: '12345'
  }
};

// Create a shallow copy using the spread operator
const shallowCopyObj = { ...originalObj };

// Modifying the nested object in the copy
shallowCopyObj.address.city = 'Wonderland';

console.log('Shallow Copy:', shallowCopyObj); 
console.log('Original Object:', originalObj); 
// The nested 'address' object is shared between the original and the shallow copy,
// so modifying it affects both objects.
 
```