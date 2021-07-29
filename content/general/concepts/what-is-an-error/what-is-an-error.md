---
Title: "What is an Error?"
Subjects:
  - "Computer Science"
  - "Web Development"
  - "Data Science"
Tags: 
  - "Errors"
  - "Debugging"
  - "Best Practices"
Catalog Content:
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/web-development"
  - "https://www.codecademy.com/learn/paths/data-science"
---

An error is a mistake that causes a program to perform in unexpected ways or to fail outright. The mistakes could be from the slip of a keyboard stroke - like mispelling a variable or from forgetting a closing bracket; or a misunderstanding of requirements - like using imperial units of measurement instead of metric. 

Understanding different types of errors and how to debug them are crucial towards becoming a productive programmer.

## History

> “First actual case of bug being found.”

The story goes that on September 9th, 1947, computer scientist [Grace Hopper](https://en.wikipedia.org/wiki/Grace_Hopper) found a moth in the Harvard Mark II computer’s logbook and reported the world’s first literal computer bug. However, the term “bug,” in the sense of technical error, dates back at least to 1878 and with Thomas Edison.

## Syntax Errors

Every language has rules regarding the structure of words and phrases in a sentence. The rules that define this structure are known as syntax. If you texted your friend "The at will meet. pub I you in 10", your friend would be confused, and you would need to re-type the text.

Similarly to the English language, programming languages expect keywords, symbols, and values to be arranged in a certain, logical order according to syntax, otherwise the compiler will throw a syntax error.

## Logic Errors

Nearly every piece of code you write is an expression of some meaningful logic. This logic is the core of what you are intending to accomplish with your code. Sometimes you might write code in such a way that is syntactically correct but isn’t what you intended to express. This can be seen in any language, including English.

## Example

Suppose we have a JavaScript program:

```js
function sayHello(name) {
   alert("Hello ${name});
}

sayHello("Joe");
```

Because of a missing closing quotation mark, there's an error message:

```error
/home/script.js:2

   alert("Hello ${name});
         ^^^^^^^^^^^^^^^^

SyntaxError: Invalid or unexpected token
```

This error says that in the file **script.js**, on line `2`, there's a `SyntaxError`.
