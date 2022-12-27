---
Title: 'Variables'
Description: 'Variables are used whenever there’s a need to store a piece of data.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Variables'
  - 'Data Types'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
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

- `var` is used in pre-ES6 versions of JavaScript. It is function scoped.
- `let` is the preferred way to declare a variable when it can be reassigned. It is block scoped.
- `const` is the preferred way to declare a variable with a constant value. It is also block scoped.

```js
var age;
let weight;
const numberOfFingers = 20;
```

## Dynamic typing

Opposite to many programming languages, JavaScript doesn't force the user to specify what data type is contained by a variable. It assumes the data type based on the way a user assigns a value. For example, the example below assigns a a string by putting the text between quotation marks. Without them, JavaScript reads it as a number. This is why it's considered to be a "dynamically typed language".

```js
let movieTitle = "300"; // String
let audienceNumber  = 300; // Number
```
