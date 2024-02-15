---
Title: '.includes()'
Description: 'Returns true if a given value is included in an array.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The `.includes()` method returns `true` if a given value is included in an array. Otherwise, it returns `false`.

## Syntax

```pseudo
array.includes(value, index=0);
```

The following parameters are used:

- A case-sensitive and type-sensitive `value` that is checked for inclusion in the `array`.
- An optional `index`, defaulted to 0, that tells `.includes()` where to begin the check.

Here are some edge-cases to consider when using `.includes()`:

- It will not work if the provided `index` is greater than the length of the array. Instead, `false` will be returned.
- If the `index` is less than or equal to 0, the entire array will be searched.
- By itself, this method isn't suitable for nested array and should be used with the `.flat()` and/or [`.find()`](https://www.codecademy.com/resources/docs/javascript/arrays/find) methods.
- For objects, `.includes()` only returns `true` for references of the same object (even checking against an object with the same property-value pairs returns `false`).

## Example

The `.includes()` method can be used in a few ways. First, it can be used directly with an array:

```js
console.log([1, 2, 3].includes(3));
// Output: true
```

It can also be used with an array assigned to a variable:

```js
const myArray = [1, '2', 3];

console.log(myArray.includes(2));
// Output: false
```

The output above is `false` because `.includes()` is type-sensitive. A number-type value 2 was checked for when `myArray` has no such value. Instead, it has a string literal that reads as '2'.

## Codebyte Example

The example below uses `.includes()` on an array, `myArray`, to check for an object reference, an object literal, and a number.

```codebyte/javascript
const myObject = { prop1: "red", prop2: 2 };

const myArray = [myObject, 2];

const test1 = myArray[0]
const test2 = {prop1: "red", prop2: 2}

console.log(myArray.includes(test1));
console.log(myArray.includes(test2));
console.log(myArray.includes(2));
```
