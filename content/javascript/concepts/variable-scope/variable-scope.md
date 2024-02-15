---
Title: 'Variable Scope'
Description: 'Variable Scope refers to the areas where variables are visible and accessible.'
Subjects:
  - 'Web Development'
  - 'javascript'
Tags:
  - 'Variables'
  - 'Scope'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**Variable Scope** refers to the areas where [variables](https://www.codecademy.com/resources/docs/javascript/variables) are visible and accessible. Before ES6 was introduced in 2015, JavaScript used only global scope and function scope. The addition of keywords `let` and `const` in ES6 introduced block scope.

## Global Scope

A variable accessible anywhere in a program is said to have global scope and is called a global variable. A global variable must be declared outside all functions in a program.

```javascript
var a = 1; // Global variable

console.log(a); // Code here can use variable a

// Code here can also use variable a
function myFunction() {
  console.log(a + 1);
}
```

If a value is assigned to a variable that has not been declared, even within a function, the result will also be a global variable.

```javascript
function myFunction() {
  a = 1; // Global variable
}

myFunction();

console.log(a); // Code here can use variable a
```

## Function Scope

A variable declared anywhere within a function is said to have function scope and is called a local variable. Once a local variable is declared, a local variable is said to be local or, accessible, anywhere within the function it was declared in.

```javascript
function myFunction() {
  var a = 1;
  if (a === 1) {
    var b = 2;
    console.log(a); // Code here can use variable a
    console.log(b); // Code here can use variable b
  }
  console.log(a); // Code here can also use variable a
  console.log(b); // Code here can also use variable b
}

myFunction();

console.log(a); // Code here CANNOT use variable a
```

## Block Scope

In 2015, JavaScript introduced two new keywords to declare variables: `let` and `const`. These keywords allow for the use of block scope.

A variable declared with `let` or `const` within a block `{ }`, is said to have block scope and is also called a local variable. However, this type of local variable is only considered local to the block it was declared in.

```javascript
function myFunction() {
  let a = 1;
  if (a === 1) {
    let b = 2;
    console.log(a); // Code here can use variable a
    console.log(b); // Code here can use variable b
  }
  console.log(a); // Code here can also use variable a
  console.log(b); // Code here CANNOT use variable b
}

myFunction();

console.log(a); // Code here CANNOT use variable a
console.log(b); // Code here also CANNOT use variable b
```
