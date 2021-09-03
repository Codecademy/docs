---
Title: 'Comments'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Comments'
  - 'Documenation'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

A comment is a piece of text within a program that is not executed. It can be used to provide additional information to aid in understanding the code.

## Single-line Comments

In JavaScript, single-line comments are created with two consecutive forward slashes `//`.

```js
// Prints 5 to the console
console.log(5);
```

A single-line comment can also be used to comment after a line of code:

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

## Codebyte Example

Try commenting and uncommenting the code below:

```codebyte/js
/*
console.log("Howdy!")
*/

console.log("Comment this line out!");
```
