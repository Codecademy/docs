---
Title: 'Variables'
Description: 'Variables are used to store a piece of data at a named location in memory.'
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
```

The code above produces the following output:

```shell
$85000 is more than the average income.
```

## Codebyte Example 1

Run the following codebyte example to understand the usage of variables in JavaScript:

```codebyte/javascript
let name = "John";
let age = 25;
let city = "Berlin";

// Using the variables multiple times in the program
console.log("Name: " + name);
console.log("Age: " + age);
console.log("City: " + city);

// Reusing the variables
console.log(name + " is " + age + " years old and lives in " + city + ".");
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

## Codebyte Example 2

Run the following codebyte example to understand how to declare variables in JavaScript:

```codebyte/javascript
// Using `var`
var animal = "giraffe";
console.log(animal);

animal = "elephant";
console.log(animal);

// Using `let`
let spaceship = "Falcon";
console.log(spaceship);

spaceship = "Starship";
console.log(spaceship);

//Using `const`
const favoritePlanet = "Earth";
console.log(favoritePlanet);

favoritePlanet = "Mars";
// Error! The variable "favoritePlanet" cannot be changed because it is a const.
```

## Dynamic Typing

Unlike many programming languages, JavaScript doesn't require the user to specify a variable's [data type](https://www.codecademy.com/resources/docs/javascript/data-types). It assumes the data type based on the value. The example below assigns a string to a variable by enclosing some numbers in single quotation marks. Without them, JavaScript reads the value as a number.

```js
let movieTitle = '300'; // String
let audienceNumber = 300; // Number
```

## Video Walkthrough

Watch this video for a description on what JavaScript variables are and how to use them to store values.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cRi9Xa4jBws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
