---
Title: "What is an Error?"
Subjects:
  - "Code Foundations"
  - "Computer Science"
  - "Web Development"
  - "Data Science"
Tags: 
  - "Errors"
  - "Debugging"
  - "Best Practices"
Catalog Content:
  - "https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions/exercises/parameters"
---

An error is a mistake that causes a program to perform in unexpected ways or to fail outright. The mistakes could be from the slip of a keyboard stroke - like mispelling a variable or from forgetting a closing bracket; or a misunderstanding of requirements - like using imperial units of measurement instead of metric. Understanding different types of errors and how to debug them are crucial towards becoming a productive programmer.

## Example

```js
// Forget a closing quotation mark and this will throw a syntax error
function sayHello(name) {
  alert("Hello ${name});
}

sayHello('Joe');
// Error
```