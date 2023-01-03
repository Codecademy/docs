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

**Arrow function expressions** are alternatives to traditional [functions](https://www.codecademy.com/resources/docs/javascript/functions) that were first introduced in ES6. Aside from a relatively concise syntax, arrow functions have a few semantic differences along with some limitations.

## Syntax

```pseudo
const functionA = (parameter1, parameter2, ..., parameterN) => {
  // Function body here
}
```

The syntax for an arrow function expression does not require the `function` keyword and uses a fat arrow (`=>`) to separate the parameter(s) from the body.

Arrow functions can be defined with zero or more parameters, on one or more lines. In most cases, parentheses (`()`) are not required to be around the parameter list if there is one parameter. They are required in the following cases:

- There is more than one parameter.
- There are no parameters.
- The single parameter is a destructured object.
- There are default or rest parameters involved.

Arrow functions with a single expression have no curly brackets (`{ }`) and can use the concise function body to return the result of the expression without the `return` keyword. For multiple expressions, parentheses can be alternatively wrapped around the arrow function body to implicitly return the result.

## Limitations

Arrow functions functions are limited and can't be used in all situations:

- They do not have their own bindings to [`this`](https://www.codecademy.com/resources/docs/javascript/this) or `super`, and should not be used as [methods](https://www.codecademy.com/resources/docs/javascript/methods).
- They cannot be used as [constructors](https://www.codecademy.com/resources/docs/javascript/constructors).
- They cannot use `yield`, within its body.
- They cannot use the special `arguments` keyword.

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

## Codebyte Example

The following example features an arrow function defined with two arguments on a single line:

```codebyte/javascript
const multiply = (a, b) => a * b;

console.log(multiply(2, 30));
```
