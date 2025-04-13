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

### Codebyte Example

This example shows the output values of the declared variables:

```codebyte/js
var x = 5;
console.log(x)

var y = 6;
console.log(y)

var x = 4;
console.log(x)


var z = x + y;
console.log(z)
```

## Expression Statements

Expression statements, such as function calls or assignments, evaluate an expression and generate a value in JavaScript. They can be assigned to a variable or used as part of a larger expression and are then discarded.

```js
// Function call
console.log('Hello World');
```

The second statement below re-assigns the value 5 to the variable `x`, while the third statement logs the value of `x` to the console:

```js
var x = 5;
x = 6;
console.log(x);
```

The output of the above statement is as follows:

```shell
6
```

### Codebyte Example

This example shows the re-assignment of value to variable `x` and demonstrates the `console.log()` function call:

```codebyte/js
console.log('Hello, World!');

var x = 5;
console.log(x)
x = 6;
console.log(x);
```

## Conditional Statements

[Conditional](https://www.codecademy.com/resources/docs/javascript/conditionals) statements, such as `if` statements or `switch` statements, control program flow based on a condition:

```js
// If statement
var x = 10;
if (x > 5) {
  console.log('x is greater than 5');
}
```

Following is the output of the above code:

```shell
x is greater than 5
```

```js
// Switch statement
var x = 2;
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

This example shows the outputs of the switch statement:

```shell
x is 2
```

### Codebyte example

Try the following runnable example:

```codebyte/js
// Change value of number
let number = 3;
let numberType;

switch (number) {
  case 1:
    numberType = 'One';
    break;
  case 2:
    numberType = 'Two';
    break;
  case 3:
    numberType = 'Three';
    break;
  case 4:
    numberType = 'Four';
    break;
  case 5:
    numberType = 'Five';
    break;
  default:
    numberType = 'Unknown Number';
}

console.log(`The number ${number} is ${numberType}.`);
```

## Loop Statements

[Loop](https://www.codecademy.com/resources/docs/javascript/loops) statements, such as `while` loops or `for` loops, repeat a block of code while a condition is `true`:

```js
// While loop
var x = 4;
while (x < 5) {
  console.log(x);
  x++;
}

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### Codebyte example

The `for` loop works similarly to the `while` loop. Conventionally `let` keyword is used to declare a variable named `i` in `for` loops:

```codebyte/js
// While loop
var x = 0;
while (x < 7) {
  console.log(x);
  x++;
}

// For loop
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

// Return statement
function add(x, y) {
  return x + y;
}
```

### Codebyte Example

The following code example demonstrates the `break` and `return` statements:

```codebyte/js
function add(x, y) {
  return x + y;
}

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    console.log("Breaking the loop at i = 3");
    break; // Break the loop when i equals 3
  }

  console.log(`Sum of ${i} and 4 is: ${add(i, 4)}`);
}

console.log("Loop and function execution complete.");
```
