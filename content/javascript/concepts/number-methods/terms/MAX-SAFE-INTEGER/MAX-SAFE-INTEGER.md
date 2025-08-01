---
Title: '.MAX_SAFE_INTEGER'
Description: 'Represents the largest integer that JavaScript can use while maintaining exact precision.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.MAX_SAFE_INTEGER`** static data property represents the maximum safe integer in JavaScript, which is:

$$
2^{53} - 1 = 9007199254740991
$$

It’s the largest integer that can be safely represented using the `Number` type without losing precision. This property is part of the `Number` class. To check if a value is a safe integer, use the `.isSafeInteger()` method. For integers larger than this limit, consider using the `BigInt` type instead.

## Syntax

```pseudo
Number.MAX_SAFE_INTEGER;
```

**Parameters:**

None as it's a static data property, not a function.

**Return value:**

Returns the largest safe integer representable by JavaScript's `Number` type.

## Example

This example demonstrates how `.MAX_SAFE_INTEGER` defines the upper limit for safe integers in JavaScript:

```js
console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
```

The output produced by this code is:

```shell
9007199254740991
true
false
```

## Codebyte Example

A codebyte example showing why it's best to avoid numbers larger than `.MAX_SAFE_INTEGER`:

```codebyte/javascript
const a = Number.MAX_SAFE_INTEGER + 1;
const b = Number.MAX_SAFE_INTEGER + 2;
console.log(a === b);
```

Both `a` and `b` evaluate to the same value because they exceed the maximum safe integer JavaScript can represent accurately. When numbers go beyond this limit, JavaScript starts to lose precision, which can lead to incorrect comparisons and unexpected results.
