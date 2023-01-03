---
Title: 'Variable Scope in Javascirpt'
Description: 'Documentation for variable scope in Javascript'
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

**Variable Scope** refers to the areas where variables are visible and accessible. Before ES6 was introduced in 2015, Javascript used only global scope and function Scope.

## Global Scope

A variable accessible anywhere in a program is said to have **Global Scope** and is called a **Global Variable**. A global variable must be declared outside all functions in a program.

```javascript
var a = 1; //global variable

alert(a);  //code here can use variable a

//code here can also use variable a
function myFunction(){
    alert(a + 1);
}
```

If you assign a value to a variable that has not been declared, even within a function, the result will also be a global variable.

```javascript
function myFunction(){
    a = 1; //global variable
}

myFunction();

alert(a);  //code here can use variable a
```

## Function Scope

A variable declared anywhere within a function is said to have function scope and is called a local variable. Once a local variable is declared, a local variable is said to be local or, accessible, anywhere within the function it was declared in.

```javascript
function myFunction(){
	var a = 1;
    if(a === 1){
    	var b = 2;
        alert(a); //code here can use variable a
        alert(b); //code here can use variable b
    }
    alert(a); //code here can also use variable a
    alert(b); //code here can also use variable b
}

myFunction();

alert(a); //code here CANNOT use variable a
```

## Block Scope

In 2015, Javascript introduced two new keywords to declare variables: `let` and `const`. These keywords allow for the use of block scope.

A variable declared with `let` or `const` within a block { }, is said to have block scope and is also called a local variable. However this local variable is only considered local to the block it was declared in.

```javascript
function myFunction(){
	let a = 1;
    if(a === 1){
    	let b = 2;
        alert(a); //code here can use variable a
        alert(b); //code here can use variable b
    }
    alert(a); //code here can also use variable a
    alert(b); //code here CANNOT use variable b
}

myFunction();

alert(a); //code here CANNOT use variable a
alert(b); //code here also CANNOT use variable b
```

