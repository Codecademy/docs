---
Title: 'Arrow Functions'
Description: 'Arrow function expressions were introduced in ES6. These expressions are a clean and concise alternative to the traditional function syntax. The syntax for an arrow function expression does not require the function keyword and uses a fat arrow => to separate the parameter(s) from the body. However, they are limited and cant be used in all situations. There are several variations of arrow functions: - Arrow functions with a single parameter do not require () around the parameter list. - Arrow functions with a single expression can use the concise function body which returns the result of the expression without the return keyword. Arrow function with no arguments: js const printHello = () => {'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Arrow function expressions were introduced in ES6. These expressions are a clean and concise alternative to the traditional [function](../javascript/functions) syntax. The syntax for an arrow function expression does not require the `function` keyword and uses a fat arrow `=>` to separate the parameter(s) from the body. However, they are limited and can't be used in all situations.

There are several variations of arrow functions:

- Arrow functions with a single parameter do not require `()` around the parameter list.
- Arrow functions with a single expression can use the concise function body which returns the result of the expression without the `return` keyword.

## Syntax

Arrow function with no arguments:

```js
const printHello = () => {
  console.log('hello');
};

printHello();
// Output: hello
```

Arrow functions with a single argument:

```js
const checkWeight = (weight) => {
  console.log(`Baggage weight: ${weight} kilograms.`);
};

checkWeight(25);
// Output: Baggage weight: 25 kilograms.
```

Arrow function with two arguments:

```js
const sum = (firstParam, secondParam) => {
  return firstParam + secondParam;
};

console.log(sum(2, 5));
// Output: 7
```

Concise arrow functions:

```js
const multiply = (a, b) => a * b;

console.log(multiply(2, 30));
// Output: 60
```

## Limitations

- Arrow functions do not have their own bindings to `this` or `super`, and should not be used as methods.
- Arrow functions cannot be used as constructors.
- Arrow functions cannot use `yield`, within its body.
- Arrow functions don't have special `arguments` keyword.