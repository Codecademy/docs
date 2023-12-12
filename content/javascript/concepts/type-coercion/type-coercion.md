---
Title: 'Type Coercion'
Description: 'The modification of types in an expression in order to yield a result.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Comparison'
  - 'Logical'
  - 'Operators'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**Type coercion** is the modification of a type within an expression in order to yield a result. In JavaScript expressions of mixed types are evaluated by default through type coercion. When strict type comparisons are required they should be implemented with the `===` and `!==` operators.

JavaScript is a relatively permissive language, and in many situations, such as mixed type expressions or function arguments the default behavior is to return a value, rather than an error.

## Mixed Type Expressions

Expressions of mixed types are evaluated by changing one of the elements to match the other. For example, in the code below the string `6` is changed to a `number` type and will yield `true` and the product `36`. However, the use of values that have been evaluated in such an expression may lead to unintended results when this behavior is not expected. It is a best practice to use the alternative, strict comparison operators to avoid errors from this form of evaluation.

```js
console.log(6 == '6');
console.log(6 * '6');

console.log(6 === '6');
```

The code above will output:

```shell
true
36
false
```
