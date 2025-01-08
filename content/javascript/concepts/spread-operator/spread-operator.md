---
Title: 'Spread Operator'
Description: 'Expands elements of an array, object, or iterable in JavaScript.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Objects'
  - 'Spread Operator'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **Spread Operator** in JavaScript, represented by three dots (`...`), is used to expand or unpack elements of arrays, objects, or other iterables into individual elements.

The spread operator performs a shallow copy, meaning that for nested objects or arrays, changes in the copied object/array might reflect in the original.

## Syntax

The syntax of spread operator for arrays is as follows:

```pseudo
const nums = [...nums1 , ...nums2]   // arrays
```

The syntax of spread operator for objects is as follows:

```pseudo
const obj = {...obj1, ...obj2}      // objects
```

- `nums1` and `nums2` are arrays. They represent any two arrays that need to be merged into a single array.
- `obj1` and `obj2` are objects. They represent two objects that should be combined into one.

## Example

The following example demonstrates how to use the spread operator:

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

## Codebyte Example

Run the codebyte example below to understand how the spread operator works:

```codebyte/javascript
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

// Original object with nested data
const originalObj = {
  name: 'Subro',
  address: {
    city: 'Lalaland',
    zip: '12345'
  }
};

// Creating a shallow copy using the spread operator
const shallowCopyObj = { ...originalObj };

// Modifying the nested object in the copy
shallowCopyObj.address.city = 'Wonderland';

console.log('Shallow Copy:', shallowCopyObj);
console.log('Original Object:', originalObj);
// The nested 'address' object is shared between the original and the shallow copy, so modifying it affects both objects.
```
