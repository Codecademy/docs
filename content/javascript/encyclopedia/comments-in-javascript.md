---
Title: "Comments in JavaScript"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags: 
  - "Comments"
  - "Documenation"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-javascript"
  - "https://www.codecademy.com/learn/paths/web-development"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

A comment is a piece of text within a program that is not executed. It can be used to provide additional information to aid in understanding the code.

## Single-line Comments

In JavaScript, single-line comments are created with two consecutive forward slashes `//`.

```js
// Prints 5 to the console
console.log(5);
```

A single-line comment can also used to comment after a line of code:

```js
console.log(5); // Prints 5 
```

## Multi-line Comments

Multi-line comments are created by surrounding the lines with `/*` at the beginning and `*/` at the end. Comments are good ways for a variety of reasons like explaining a code block or indicating some hints, etc.

```js
/*  
The below configuration must be 
changed before deployment. 
*/
 
let baseUrl = 'localhost/taxwebapp/country';
```

This syntax can also be used to comment something out in the middle of a line of code:

```js
console.log(/* IGNORED! */ 5); // Still prints 5 
```