---
Subjects:
  - "What is an Error?"
Tags: 
  - "language-agnostic"
  - "errors"
  - "functions"
  - "debugging"
  - "best practice"
Catalog Content:  # If listing multiple URLs, please put the most relevant one first 
  - "https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions/exercises/parameters"
---


# What is an Error?

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