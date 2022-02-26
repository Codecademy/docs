---
Title: 'Boolean'
Description: 'The boolean data type represents the logical values of true and false.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Types'
CatalogContent:
  - 'paths/code-foundations'
  - 'paths/computer-science'
---

Booleans hold a true or false value and are mostly used in conditional statements to control a program's flow of execution. This data type is named after George Boole, a 19th century English logician.

Some languages use comparison operators (`>=`, `==`, `is`, `not`, etc.) to produce boolean values, while others may use "falsy" values like `""`, `null`, or `0`. Some even use a combination of both of these approaches.

## JavaScript Example

The following example uses [a JavaScript conditional statement](https://www.codecademy.com/resources/docs/javascript/conditionals), along with a comparison [operator](https://www.codecademy.com/resources/docs/javascript/operators) to return `true` or `false` if 42 is, in fact, "42":

```js
if (42 !== "42") {
  // If the statement above always evaluates to true...
  console.log('This will always print.');
} else {
  console.log('This will never print.');
};
```
