---
Title: "Objects in JavaScript"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags: 
  - "Objects"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-javascript"
  - "https://www.codecademy.com/learn/paths/web-development"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

A JavaScript object can be created, or defined, with an object literal:

```js
var person = {firstName: "Elizabeth", lastName: "Harmon", age: 22, eyeColor: "Hazel"};
```

Spaces and line breaks are not important. An object definition can span multiple lines:

```js
var person = {
  firstName: "Elizabeth",
  lastName: "Harmon",
  age: 22,
  eyeColor: "Hazel"
};
```

## Object Properties

The `name: values` pairs in JavaScript objects are called properties:

| Property	| Property Value |
| --- | --- |
| `firstName` |	`"Elizabeth"` |
| `lastName` | `"Harmon"` |
| `age`  | `22` |
| `eyeColor` | `"Hazel"` |

## Accessing Object Properties

You can access object properties in two ways:

```pseudo
objectName.propertyName

objectName["propertyName"]
```

For example:

```js
person.lastName;

person["lastName"];
```

## Object Methods

Objects can also have methods.

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.