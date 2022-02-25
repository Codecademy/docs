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

Because functions are derived from objects, their closest classification is with composite data types.

## JavaScript Example

The following example uses [a JavaScript conditional statement](https://www.codecademy.com/resources/docs/javascript/conditionals), along with a comparison [operator](https://www.codecademy.com/resources/docs/javascript/operators) to return `true` or `false` if 42 is, in fact, "42":

```js
if (true) {
  // true would always evaluate to true so the folloing line will always run.
  console.log('this will always print');
} else if (false) {
  // false will alawys evaluate to false so the following lines will never run
  console.log('This will never print');
}
```
