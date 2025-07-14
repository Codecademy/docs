---
Title: '.EPSILON'
Description: 'Static property that represents the smallest difference between two representable numbers greater than 1'
Subjects:
  - 'JavaScript'
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Numbers'
  - 'Properties'
  - 'Floating-point'
  - 'Precision'
  - 'JavaScript'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The `.EPSILON` property is a part of the `Number` class in JavaScript.

In simple terms, it's just a static value that approximates the difference between 1 and the next largest floating-point number that Javascript can represent.

## Syntax

```js
Number.EPSILON;
```


## Examples

Due to floating-point precision errors, you shouldn't compare decimals directly with ===. Instead, use Number.EPSILON to check if two values are "close enough."

```js
console.log(0.1 + 0.2 === 0.3);
// false
```

```js
function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3)); 
// true
```

In the examples above, we tried to compare (0.1 + 0.2) to 0.3. Mathematically, this should return true, but due to floating-point precision issues, it returns false.

To fix this, we calculate the absolute difference between (0.1 + 0.2) and 0.3, and then check if this difference is smaller than Number.EPSILON, which represents the smallest meaningful difference between two numbers. If it is, we can treat the numbers as effectively equal.

## Codebyte Example

```codebyte/js
console.log(Number.EPSILON);
```