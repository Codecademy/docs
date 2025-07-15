---
Title: '.MAX_SAFE_INTEGER'
Description: 'Represents the largest integer that JavaScript can use while maintaining exact precision.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Numbers'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`.MAX_SAFE_INTEGER`** property represents the largest integer that JavaScript can use while maintaining exact precision.

This property is a part of the `Number` class in JavaScript. To check if an integer is greater than this, use the **`isSafeInteger()`** method (also included in the `number` class). For integers greater than this, consider using the **`BigInt`** class.

## Syntax

```js
Number.MAX_SAFE_INTEGER;
```

- `Number`: This is the JavaScript built-in object used numerical-related methods, properties and constants.

## Example

The following examples demonstrate some uses of the `.MAX_SAFE_INTEGER` property:

```js
// Display the value of the property in the console.
console.log(Number.MAX_SAFE_INTEGER);
```

## Codebyte Example

Example showing why to avoid using numbers larger than that stored in `.MAX_SAFE_INTEGER`

```codebyte/js
const a = Number.MAX_SAFE_INTEGER + 1;
const b = Number.MAX_SAFE_INTEGER + 2;
console.log(a === b); // Output: True
```
