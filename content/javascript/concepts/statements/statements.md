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

## Syntax

In this statement, a const variable called `greeting` is declared and assigned the value of `'Hello World'`:

```js
const greeting = 'Hello World';
```

The first statement below assigns the value 5 to the variable `x`, while the second statement logs the value of `x` to the console:

```js
let x = 5;
console.log(x);
```

JavaScript variables are containers for storing data values.
In this example, `x`, `y`, and `z`, are variables, declared with the `var` keyword:

```js
var x = 5;
var y = 6;
var z = x + y;
```

JavaScript identifiers are case-sensitive. The names `x` and `X` have different meanings:

```js
// Assign 5 to x
var x = 5;
// Assign 6 to X
var X = 6;
```

## Types of Statements

There are several types of statements in JavaScript, including:

**Expression** statements: statements that evaluate an expression, such as function calls or assignments:

```js
// Function call
console.log('Hello World');
// Assignment
let x = 5;
```

**Conditional** statements: statements that control program flow based on a condition, such as `if` statements or `switch` statements:

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

**Loop** statements: statements that repeat an operation while a condition is true, such as `while` loops or `for` loops:

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

**Jump** statements: statements that transfer control to another part of the program, such as `break` or `return` statements:

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
