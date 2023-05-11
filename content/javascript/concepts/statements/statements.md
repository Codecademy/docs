---
Title: 'Statements'
Description: 'In JavaScript, a statement is a unit of code that performs a specific action or task.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Statements'
  - 'Syntax'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, **statements** are instructions that are executed by the browser or Node.js. A statement can be a simple or complex operation that performs an action, such as assigning a value to a variable, calling a function, or controlling program flow with conditional statements.


## Expression Statements

Expression statements, such as function calls or assignments, evaluate an expression and generate a value in JavaScript. They can be assigned to a [variable](https://www.codecademy.com/resources/docs/javascript/variables) or used as part of a larger expression.

### Syntax

```js
// Function call
console.log('Hello World');
// Assignments
// Assign 5 to x
var x = 5;
// Assign 6 to X
var X = 6;
```

In this statement, a `const` variable named `greeting` is declared and assigned the value of `'Hello World'`:

### Syntax

```js
const greeting = 'Hello World';
```

The first statement below assigns the value 5 to the variable `x`, while the second statement logs the value of `x` to the console:

### Syntax

```js
let x = 5;
console.log(x);
```

JavaScript [variables](https://www.codecademy.com/resources/docs/javascript/variables) are containers for storing data values.
In this example, `x`, `y`, `X`, and `z`, are [variables](https://www.codecademy.com/resources/docs/javascript/variables), declared with the `var` keyword.
JavaScript identifiers are also case-sensitive. Note that `x` is not the same as `X`:

### Syntax

```js
var x = 5;
var y = 6;
var X = 4;
var z = x + y;
```

## Conditional Statements

[Conditional](https://www.codecademy.com/resources/docs/javascript/conditionals) statements, such as `if` statements or `switch` statements, control program flow based on a condition.

### Syntax

```js
// If statement
if (x > 5) {
  console.log('x is greater than 5');
}
// Switch statement
switch (x) {
  case 1:
    console.log('x is 1');
    break;
  case 2:
    console.log('x is 2');
    break;
  default:
    console.log('x is neither 1 nor 2');
}
```

## Loop Statements

[Loop](https://www.codecademy.com/resources/docs/javascript/loops) statements, such as `while` loops or `for` loops, repeat an operation while a condition is true.

### Syntax

```js
// While loop
while (x < 5) {
  console.log(x);
  x++;
}
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## Jump Statements

Jump statements, such as `break` or `return` statements, transfer control to another part of the program.

### Syntax

```js
// Break statement
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
// Return statement
function add(x, y) {
  return x + y;
}
```
