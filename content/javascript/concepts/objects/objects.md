---
Title: 'Objects'
Description: 'A JavaScript object can be created or defined with an object literal: js const person = { firstName: Elizabeth, lastName: Harmon, age: 22, eyeColor: Hazel,'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Objects'
  - 'Classes'
  - 'OOP'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

A JavaScript object can be created or defined with an object literal:

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

Or using square brackets:

```pseudo
objectName["propertyName"]
```

```js
person['lastName'];
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
    return `Hi, I'm ${this.firstName} ${this.lastName}.`;
  },
};

console.log(person.greeting()); // Prints 'Hi, I'm Elizabeth Harmon.'
```

- The `greeting` key holds a function value that returns a template literal using backticks `.
- When `person.greeting` value is invoked, the corresponding function will run.

This will output:

```shell
Hi, I'm Elizabeth Harmon.
```

