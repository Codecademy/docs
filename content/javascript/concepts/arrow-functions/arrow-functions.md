---
Title: 'Arrow Functions'
Description: 'Arrow function expressions were introduced in ES6. These expressions are a clean and concise alternative to the traditional function syntax.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arguments'
  - 'ES6'
  - 'Functions'
  - 'Parameters'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**Arrow function** are expressions first introduced in ES6. These expressions are a clean and concise alternative to the traditional [function](https://www.codecademy.com/resources/docs/javascript/functions) syntax.

There are several variations of arrow functions:

- Arrow functions with a single parameter do not require `()` around the parameter list.
- Arrow functions with a single expression (no curly brackets `{ }`) can use the concise function body which returns the result of the expression without the `return` keyword.

## Syntax

```pseudo
const functionA = (parameterA, parameterB, ..., parameterN) => {
  // Function body here
}
```

The syntax for an arrow function expression does not require the `function` keyword and uses a fat arrow `=>` to separate the parameter(s) from the body. However, they are limited and can't be used in all situations.

Arrow functions can be defined with zero or more arguments. They can also be defined on one or more lines.

> **Note:** Arrow functions functions are limited and can't be used in all situations:
>
> - They do not have their own bindings to [`this`](https://www.codecademy.com/resources/docs/javascript/this) or `super`, and should not be used as [methods](https://www.codecademy.com/resources/docs/javascript/methods).
> - They cannot be used as [constructors](https://www.codecademy.com/resources/docs/javascript/constructors).
> - They cannot use `yield`, within its body.
> - They cannot use the special `arguments` keyword.

## Example

The following example showcases how arrow functions are defined and applied:

```js
const printHello = () => {
  console.log('hello');
};

const checkWeight = (weight) => {
  console.log(`Baggage weight: ${weight} kilograms.`);
};

printHello();
checkWeight(25);
```

This produces the following output:

```shell
hello
Baggage weight: 25 kilograms.
```

## Codebyte Exammple

The following example features an arrow function defined with two arguments on a single line:

```js
const multiply = (a, b) => a * b;

console.log(multiply(2, 30));
```
