---
Title: '.includes()'
Description: 'Returns true if a given value is included in an array'
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

## Example

The `.includes()` method can be used in a few ways. First, it can be used directly with an array:

```js
[1, 2, 3].includes(3);
// Output: true
```

It can also be used with a variable assigned to an array:

```js
const myArray = [1, '2', 3];

myArray.includes(2);
// Output: false
```

The output above is `false` because `.includes()` is type-sensitive. A number-type value 2 was checked for when `myArray` has no such value. Instead, it has a string literal that reads as '2'.

Some edge-cases to keep in mind about `.includes()`:

- It will not work if the provided `index` is greater than the length of the array. Instead, `false` will be returned.
- If the `index` is less than or equal to 0, the entire array will be searched.
- By itself, this method isn't suitable for nested array and should be used with the `.flat()` and/or [`.find()`](https://www.codecademy.com/resources/docs/javascript/arrays/find) methods.

## Codebyte Example

If a given array `myArray` contains an object, only references to that object return `true` from `.includes()`. Even checking against an object literal with the same property-value pairs will yield `false`:

```codebyte/javascript
const myArray = [
  {
    prop1: "red",
    prop2: 2
  },
  2
]

const test1 = myArray[0]
const test2 = {prop1: "red", prop2: 2}

console.log(myArray.includes(test1))
console.log(myArray.includes(test2))
console.log(myArray.includes(2))
```
