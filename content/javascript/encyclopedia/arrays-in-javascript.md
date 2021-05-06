---
Title: "Arrays in JavaScript"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags: 
  - "Arrays"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-javascript"
  - "https://www.codecademy.com/learn/paths/web-development"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

Arrays are lists of ordered, stored data. They can hold items that are of any data type. Arrays are created by using square brackets, with individual elements separated by commas.

```js
// An array containing numbers
const numberArray = [0, 1, 2, 3];
 
// An array containing different data types
const mixedArray = [1, 'chicken', false];
```

## Creating an Array

Using an array literal is the easiest way to create a JavaScript array.

```js
var cars = ["Saab", "Volvo", "BMW"];
```

Spaces and line breaks are not important. A declaration can span multiple lines:

```js
var cars = [
  "Saab",
  "Volvo",
  "BMW"
];
```

Using the JavaScript Keyword `new` is another way to create an array.

```js
var cars = new Array("Saab", "Volvo", "BMW");
```

## Access the Elements of an Array

You access an array element by referring to the index number.

This statement accesses the value of the first element in cars:

```js
var name = cars[0];
```

Array indexes start with 0.

- 0 is the first element. 
- 1 is the second element.
- 2 is the third element.
- ...and so on.