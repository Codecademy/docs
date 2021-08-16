---
Title: "Variables"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags: 
  - "Variables"
  - "Data Types"
CatalogContent:
  - "introduction-to-javascript"
  - "paths/front-end-engineer-career-path"
  - "paths/computer-science"
---

Variables are used whenever there’s a need to store a piece of data. A variable contains data that can be used in the program elsewhere. Using variables also ensures code re-usability since it can be used to replace the same value in multiple places.

```js
const currency = '$';
let userIncome = 85000; 
 
console.log(currency + userIncome + ' is more than the average income.');
// Output: $85000 is more than the average income.
```

## Declaring a Variable

To declare a variable in JavaScript, any of these three keywords can be used along with a variable name:

- `var` is used in pre-ES6 versions of JavaScript.
- `let` is the preferred way to declare a variable when it can be reassigned.
- `const`  is the preferred way to declare a variable with a constant value.

```js
var age;
let weight;
const numberOfFingers = 20;
```
