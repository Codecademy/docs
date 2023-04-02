---
Title: 'Boolean'
Description: 'Represents the logical values of true and false.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Booleans'
  - 'Data Types'
  - 'Types'
CatalogContent:
  - 'paths/code-foundations'
  - 'paths/computer-science'
---

A **boolean** holds a true or false value and are mostly used in conditional statements to control a program's flow of execution. This data type is named after George Boole, a 19th century English logician.

Some languages use comparison operators such as:

- `>=` and `<=`, for "greater than" and "less than", respectively.
- `==` and `is` or `!=` and `not` to test for equality and inequality, respectively.

Other languages may use a combination of "falsy" values (e.g. `""`, `null`, or `0`) and "truthy" values such as `1`.

## JavaScript Example

The following example uses a comparison [operator](https://www.codecademy.com/resources/docs/javascript/operators) to return `true` or `false` based on the evaluation of the given statement. Then, a JavaScript [conditional](https://www.codecademy.com/resources/docs/javascript/conditionals) is used to determines whether the `if` or `else` code block will run:

```codebyte/javascript
if (42 != 5) {
  // If the statement above always evaluates to true...
  console.log('This will always print.');
} else {
  console.log('This will never print.');
};
```
