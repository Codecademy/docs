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

## Declaration Statements

Declaration statements are [variables](https://www.codecademy.com/resources/docs/javascript/variables), [functions](https://www.codecademy.com/resources/docs/javascript/functions), or classes that are introduced into a program. These statements begin with a keyword followed by its identifier or name.

Variables are containers for storing data values:

```js
var x = 5;
var y = 6;
var X = 4;
var z = x + y;
```

In this example, `x`, `y`, `X`, and `z`, are declared with the `var` keyword.

> **Note:** JavaScript identifiers are case-sensitive. Notice that `x` is not the same as `X`.


## Codebyte Example

This example shows the output values of the declared variables:

```codebyte/javascript
var x = 5;
console.log(x)
// outputs 5
var y = 6;
console.log(y)
// outputs 6
var x = 4;
console.log(x)
// outputs 4
var z = x + y;
console.log(z)
// outputs 10, x is reassigned 4
```

## Expression Statements

Expression statements, such as function calls or assignments, evaluate an expression and generate a value in JavaScript. They can be assigned to a variable or used as part of a larger expression and are then discarded.

```js
// Function call
console.log('Hello World');
```
## Codebyte Example

This example shows a `console.log()`  function call:

```codebyte/javascript
console.log('Hello, World!');
// outputs Hello, World!
```

The second statement below re-assigns the value 5 to the variable `x`, while the third statement logs the value of `x` to the console:

```js
var x = 5;
x = 6;
console.log(x);
```

## Codebyte Example

This example shows re-assignment of value to variable `x`:

```codebyte/javascript
var x = 5;
console.log(x)
//outputs 5
x = 6;
console.log(x);
// outputs 6
```


## Conditional Statements

[Conditional](https://www.codecademy.com/resources/docs/javascript/conditionals) statements, such as `if` statements or `switch` statements, control program flow based on a condition:

```js
// If statement
if (x > 5) {
  console.log('x is greater than 5');
}
```
## Codebyte Example

This example shows the output of an if statement:

```codebyte/javascript
var x = 7
if (x > 5) {
  console.log('x is greater than 5');
  // outputs x is greater than 5
}
```

```js

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
This example shows outputs of switch statment:

```codebyte/javascript
// change value of x 
var x = 1; 

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
Change the values of x to different numbers and click on run button to see their outputs.


## Loop Statements

[Loop](https://www.codecademy.com/resources/docs/javascript/loops) statements, such as `while` loops or `for` loops, repeat a block of code while a condition is `true`:

```js
// While loop
while (x < 5) {
  console.log(x);
  x++;
}
```
## Codebyte example

```codebyte/javascript
// While loop
var x = 0;
while (x < 7) {
  console.log(x);
  x++;
}
```

```js
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
## Codebyte example

This works similar to `while`  loop. Conventionally `let`  keyword is used to declare a variable named `i`  in `for`  loops:

```codebyte/javascript
for (let i = 0; i < 7; i++) {
  console.log(i);
}
```


## Jump Statements

Jump statements, such as `break` or `return` statements, transfer control to another part of the program.

```js
// Break statement
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
```
## Codebyte Example

This code breaks or exits the loop when  `i` equals 3 and returns the value of `i`:

```codebyte/javascript
// Break statement
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

```

```js
// Return statement
function add(x, y) {
  return x + y;
}
```
## Codebyte Example

This code example returns the value of the add function: 

```codebyte/javascript
function add(x, y) {
  return x + y;
}
// call the add function with values of 2 and 4 for the arguements x and y and print the result to the console
console.log(add(2, 4))

```

