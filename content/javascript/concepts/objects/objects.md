---
Title: 'Objects'
Description: 'A data type for organizing a set of custom properties and behaviors.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Dictionary'
  - 'Methods'
  - 'Classes'
  - 'OOP'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

A JavaScript **object** is a non-primitive data type that can assume the properties and behaviors required for a given programming need. An object can be created or defined with an object literal:

```js
const person = {
  firstName: 'Elizabeth',
  lastName: 'Harmon',
  age: 22,
  eyeColor: 'Hazel',
};
```

Spaces and line breaks are not important. An object definition can span multiple lines:

```js
const person = {
  firstName: 'Elizabeth',
  lastName: 'Harmon',
  age: 22,
  eyeColor: 'Hazel',
};
```

## Object Properties

The `key: value` pairs in JavaScript objects are called properties:

| Property Key | Property Value |
| ------------ | -------------- |
| `firstName`  | `"Elizabeth"`  |
| `lastName`   | `"Harmon"`     |
| `age`        | `22`           |
| `eyeColor`   | `"Hazel"`      |

## Accessing Object Properties

Object properties can be accessed using the dot notation:

```pseudo
objectName.propertyName
```

```js
person.lastName;
```

Bracket notation must be used if the property name has spaces, special characters, or begins with a number:

```pseudo
objectName['property Name']
```

```js
person['last Name'];
```

## Object Methods

Object methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.

```js
const person = {
  firstName: 'Elizabeth',
  lastName: 'Harmon',
  age: 22,
  eyeColor: 'Hazel',
  greeting: function () {
    return `Hi, I am ${this.firstName} ${this.lastName}.`;
  },
};

console.log(person.greeting());
```

- The `greeting` key holds a function value that returns a template literal using backticks.
- When `person.greeting` value is invoked, the corresponding function will run.

This will output:

```shell
Hi, I am Elizabeth Harmon.
```

## Object Classes

Classes are essentially boilerplate object templates. If a car was an object, then a car factory is an object class.

A class can be constructed with the following notation. The person object example will be used.

> **Note:** Anonymous functions can't be used in classes.

```js
class Person {
  greeting() {
    return `Hi, I am ${this.firstName} ${this.lastName}.`;
  }
}
```

To use a class, an instance of it needs to be created. To demonstrate how an instance of a class is an object, its properties will be defined using the dot notation.

```js
const person = new Person();
person.firstName = 'Elizabeth';
person.lastName = 'Harmon';
person.age = 22;
person.eyeColor = 'Hazel';
console.log(person);
/*  
Output: 
Person {
  firstName: 'Elizabeth',
  lastName: 'Harmon',
  age: 22,
  eyeColor: 'Hazel'
} 
*/
```

An additional step can be made to optimize this procedure through the use of a [constructor](https://www.codecademy.com/resources/docs/javascript/constructor).

A constructor function initializes a set of variables at the creation of a class. Thanks to constructors, object properties can be defined when a new instance is made. This makes code precise and concise.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return `Hi, I am ${this.firstName} ${this.lastName}.`;
  }
}
```

To summarize what's been done, when making a new instance, the constructor assigns the new object the two new properties `firstName` and `lastName` whose values are inputted at the time of creating the instance.

```js
const person = new Person('Elizabeth', 'Harmon');
console.log(person);
/*
Output:
Person {
  firstName: 'Elizabeth',
  lastName: 'Harmon',
  __proto__: {
    constructor: ƒ Person(),
    greeting: ƒ greeting()
  }
} 
*/

person.greeting();
// Output: "Hi, I am Elizabeth Harmon"
```

## Video Walkthrough

Watch this video to learn how to create JavaScript objects containing different types of data and functions, and access their properties.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MsvR9zVM8dI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
