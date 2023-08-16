---
Title: 'Accessors'
Description: "Provides access to an object's properties by using the dot notation or the bracket notation."
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'OOP'
  - 'Methods'
  - 'Objects'
  - 'Classes'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, object properties can be accessed using accessor known as getters. The `get` keyword is used to define a getter method for establishing custom behavior when accessing the values of object properties, while the `set` keyword allows you to define a setter method to control the behavior when assigning values to those properties.

## Syntax

There are two ways to access properties: dot notation and bracket notation.

```pseudo
const object = {
    get propertyName() {}
}

object.propertyName
object[propertyName]
```

## Example

The following example defines a `User` class with a constructor and a getter method. It demonstrates how to encapsulate and access the GitHub profile information of a user using accessor methods.

```js
class User {
  constructor(name, github) {
    this._name = name;
    this._github = github;
  }

  get userProfile() {
    return this._github;
  }
}

const arvind = new User('arvind', 'https://github.com/Judis07');
console.log(arvind.userProfile);
```

This example results in the following output:

```shell
https://github.com/Judis07
```
